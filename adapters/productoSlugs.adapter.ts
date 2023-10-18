import { ProductoSlugsResponse } from "@/interfaces/responses/producto-slug-response";

export const getProductoSlugsAdapter = (data: ProductoSlugsResponse) => {
  return data.productoss.nodes.map((producto) => {
    return {
      params: {
        slug: producto.productosCategorias.nodes[0].slug,
        item: producto.slug,
      },
    };
  });
};