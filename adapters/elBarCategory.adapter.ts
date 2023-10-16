import {
  ElBarCategoryPage,
  ElBar,
  ElBarCarrousel,
} from "@/interfaces/el-bar-category";
import { BarByCategory } from "@/interfaces/el-bar/barByCategory.interface";

export const getAllBarByCategoryAdapter = (
  data: BarByCategory
): ElBarCategoryPage => {
  const slugCategory = `/el-bar/categoria/${data.elBarCategorias.nodes[0].slug}`;
  const elbar: ElBar[] = data.elBarCategorias.nodes[0].elBars.nodes.map(
    (bar) => {
      const carrousel: ElBarCarrousel[] = bar.galeria.nodes.map((item) => ({
        id: item.id,
        img: item.guid,
      }));
      return {
        id: bar.id,
        title: bar.title,
        slug: `${slugCategory}/${bar.slug}`,
        image: bar.featuredImage.node.mediaItemUrl,
        content: bar.content,
        carrousel,
      };
    }
  );

  const elBarCategory: ElBarCategoryPage = {
    title: data.elBarCategorias.nodes[0].name,
    slug: slugCategory,
    elbar,
  };

  return elBarCategory;
};
