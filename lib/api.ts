import { NewsResponse } from "@/interfaces/noticiasInterface";
import { NewsWithSlugResponse } from "@/interfaces/newsWithSlugInterface";
import { NewsBySlugResponse } from "@/interfaces/newsBySlug";
import { MenuHeader } from "@/interfaces/menuInterface";
import { PaisesResponse } from "@/interfaces/paisesInterface";
import { BarCategoryResponse } from "@/interfaces/el-bar";
import { BarByCategory } from "@/interfaces/el-bar/barByCategory.interface";
import { BarCategoriesResponse } from "@/interfaces/el-bar/barCategories.interface";
import { getAllBarByCategoryAdapter } from "@/adapters/elBarCategory.adapter";
import { ElBarMenuResponse } from "@/interfaces/responses/el-bar-menu-response";
import { getElBarMenuFloatingAdapter } from "@/adapters/elBarMenuFloating.adapter";
import { ElBarResponse } from "@/interfaces/responses/el-bar-response";
import { getBarSlugsAdapter } from "@/adapters/elBarSlugs.adapter";

const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query = "", { variables }: Record<string, any> = {}) {
  const headers = { "Content-Type": "application/json" };

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL!, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.posts;
}

export async function getAllNews(preview: boolean) {
  const data: NewsResponse = await fetchAPI(
    `
    query getAllNoticias {
      noticias(first: 20, where:{orderby:{field:DATE, order:DESC }}){
        nodes {
          id
          title
          slug
          excerpt
          featuredImage {
            node {
              sourceUrl
            }
          }
          paisess {
            nodes {
              name
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  );
  return data.noticias.nodes;
}

export async function getAllCountries(preview: boolean) {
  const data: PaisesResponse = await fetchAPI(
    `
    query getAllCountries {
      paisess{
        nodes {
          name
          count
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  );
  return data.paisess.nodes;
}

export async function getAllBarCategories(preview: boolean) {
  const data: BarCategoryResponse = await fetchAPI(
    `
    query getAllElBarCategorias {
      elBarCategorias{
        nodes{
          id
          slug
          name
          image {
            node {
              title
              guid
            }
          }          
        }
      }
    }
    `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  );
  return data.elBarCategorias.nodes;
}

export async function getAllBarByCategory(slug: string, item?: string) {
  const data: BarByCategory = await fetchAPI(
    `
    query getAllBarByCategory {
      elBarCategorias(where: {slug: "${slug}"}) {
        nodes {
          name
          slug
          elBars {
            nodes {
              id
              title
              slug
              date
              content
              galeria {
                nodes {
                  id
                  guid
                }
              }
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
            }
          }
        }
      }
    }
    `
  );

  // const result = item ? :
  let result = getAllBarByCategoryAdapter(data);

  if (item) {
    const newElBar = result.elbar.find(
      (bar) => bar.slug.split("/").reverse()[0] === item
    );
    result = { ...result, elbar: [newElBar!] };
  }

  return result;
}

export async function getBarCategories(preview: boolean = false) {
  const data: BarCategoriesResponse = await fetchAPI(
    `
    query getAllElBarCategorias {
      elBarCategorias{
        nodes{
          id
          slug
        }
      }
    }
    `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  );
  return data.elBarCategorias.nodes;
}

export async function getBarSlugs() {
  const data: ElBarResponse = await fetchAPI(`
  query getBarSlugs {
    elBars(first: 50) {
      nodes {
        slug
        elBarCategorias {
          nodes {
            slug
          }
        }
      }
    }
  }
  `);

  return getBarSlugsAdapter(data);
}

export async function getNewsWithSlug() {
  const data: NewsWithSlugResponse = await fetchAPI(`
    {
      noticias(first: 20) {
        nodes {
          slug
        }
      }
    }
  `);
  return data.noticias.nodes;
}

export async function getNewsBySlug(slug: string) {
  const data: NewsBySlugResponse = await fetchAPI(
    `
      query getNewsBySlug($slug: String!) {
        noticiaBy(slug: $slug) {
          id
          date
          title
          content
          slug
          carrousel {
            nodes {
              id
              title
              sourceUrl
            }
          }
        }
      }    
    `,
    {
      variables: {
        slug,
      },
    }
  );

  return data.noticiaBy;
}

export async function getMenuHeader() {
  const data: MenuHeader = await fetchAPI(`
  query getMenuHeader {
    menuItems {
      nodes {
        id
        path
        label
        cssClasses
      }
    }
  }
  `);
  return data;
}

export async function getElBarMenuFloating() {
  const data: ElBarMenuResponse = await fetchAPI(
    `
    query getElBarMenuFloating {
      elBarCategorias {
        nodes {
          id
          name
          slug
          elBars {
            nodes {
              id
              title
              slug
            }
          }
        }
      }
    }
    `
  );
  return getElBarMenuFloatingAdapter(data);
}
