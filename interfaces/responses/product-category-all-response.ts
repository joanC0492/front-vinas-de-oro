export interface ProductCategoryResponse {
  productosCategorias: ProductosCategorias;
}

export interface ProductosCategorias {
  nodes: NodeElement[];
}

export interface NodeElement {
  id:    string;
  slug:  string;
  name:  string;
  image: Image;
}

export interface Image {
  node: ImageNode;
}

export interface ImageNode {
  title: string;
  guid:  string;
}
