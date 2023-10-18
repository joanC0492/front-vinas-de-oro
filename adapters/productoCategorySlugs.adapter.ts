import { ProductoCategorySlugsResponse } from "@/interfaces/responses/producto-category-slug-response";

export const getProductoCategorySlugsAdapter = (
  data: ProductoCategorySlugsResponse
) => {
  return data.productosCategorias.nodes.map((category) => {
    return {
      params: {
        slug: category.slug,
      },
    };
  });
};
