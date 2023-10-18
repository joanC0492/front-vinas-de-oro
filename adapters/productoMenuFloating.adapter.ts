import { CardFloatingData, CardFloatingProps } from "@/interfaces/menu-card";
import { ProductoMenuResponse } from "@/interfaces/responses/producto-menu-response";

export const getProductoMenuFloatingAdapter = (
  data: ProductoMenuResponse
): CardFloatingProps => {
  return {
    title: "NUESTROS PRODUCTOS",
    category: data.productosCategorias.nodes.map((category, i) => {
      const slugCategory: string = `/productos/categoria/${category.slug}`;
      return {
        id: category.id,
        isActive: i === 0 ? true : false,
        name: category.name,
        slug: slugCategory,
        data: category.productoss.nodes.map((producto) => {
          return {
            id: producto.id,
            name: producto.title,
            slug: `${slugCategory}/${producto.slug}`,
          } as CardFloatingData;
        }),
      };
    }),
  };
};
