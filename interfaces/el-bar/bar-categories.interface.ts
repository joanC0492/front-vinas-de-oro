export interface BarCategoryResponse {
  elBarCategorias: ElBarCategorias;
}
interface ElBarCategorias {
  nodes: NodeElement[];
}
export interface NodeElement {
  id: string;
  slug: string;
  name: string;
  image: Image;
}
interface Image {
  node: ImageNode;
}
interface ImageNode {
  title: string;
  guid: string;
}

