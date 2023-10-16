import { CardFloatingData, CardFloatingProps } from "@/interfaces/menu-card";
import { ElBarMenuResponse } from "@/interfaces/responses/el-bar-menu-response";

export const getElBarMenuFloatingAdapter = (
  data: ElBarMenuResponse
): CardFloatingProps => {
  return {
    title: "NUESTROS BARES",
    category: data.elBarCategorias.nodes.map((category, i) => {
      const slugCategory: string = `/el-bar/categoria/${category.slug}`;
      return {
        id: category.id,
        isActive: i === 0 ? true : false,
        name: category.name,
        slug: slugCategory,
        data: category.elBars.nodes.map((bar) => {
          return {
            id: bar.id,
            name: bar.title,
            slug: `${slugCategory}/${bar.slug}`,
          } as CardFloatingData;
        }),
      };
    }),
  };
};
