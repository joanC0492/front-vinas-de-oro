import { ElBarResponse } from "@/interfaces/responses/el-bar-response";

export const getBarSlugsAdapter = (data: ElBarResponse) => {
  return data.elBars.nodes.map((bar) => {
    return {
      params: {
        slug: bar.elBarCategorias.nodes[0].slug,
        item: bar.slug,
      },
    };
  });
};
