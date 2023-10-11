import { NewsResponse } from "@/interfaces/noticiasInterface";
import { NewsWithSlugResponse } from "@/interfaces/newsWithSlugInterface";
import { NewsBySlugResponse } from "@/interfaces/newsBySlug";
import { MenuHeader } from "@/interfaces/menuInterface";
import { PaisesResponse } from "@/interfaces/paisesInterface";

const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query = "", { variables }: Record<string, any> = {}) {
  const headers = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

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
