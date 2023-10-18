import {
  ProductCategoryPage,
  ProductCarrousel,
  Product,
  Recipe,
} from "@/interfaces/product-category.interface";
import { ProductCategoryPageResponse } from "@/interfaces/responses/product-response.interface";

export const getAllProductCategoryAdapter = (
  data: ProductCategoryPageResponse
): ProductCategoryPage => {
  const slugCategory = `/productos/categoria/${data.productosCategorias.nodes[0].slug}`;

  const elBarCategory = {
    title: data.productosCategorias.nodes[0].name,
    slug: slugCategory,
    description: data.productosCategorias.nodes[0].description,
    product: data.productosCategorias.nodes[0].productoss.nodes.map(
      (product) => {
        return {
          id: product.id,
          title: product.title,
          slug: `${slugCategory}/${product.slug}`,
          content: product.content,
          image: product.featuredImage.node.sourceUrl,
          carrousel: product.galeria.nodes.map((image) => {
            return {
              id: image.id,
              img: image.guid,
            };
          }) as ProductCarrousel[],
          recipe: {
            id: product.receta.node.id,
            title: product.receta.node.title,
            image: product.receta.node.featuredImage.node.sourceUrl,
            preparation: product.receta.node.preparation,
            slug: `/el-bar/categoria/${product.receta.node.elBarCategorias.nodes[0].slug}/${product.receta.node.slug}`,            
          } as Recipe,
        };
      }
    ) as Product[],
  } as ProductCategoryPage;

  return elBarCategory;
};
