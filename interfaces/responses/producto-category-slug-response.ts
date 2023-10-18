export interface ProductoCategorySlugsResponse {
  productosCategorias: ProductosCategorias;
}

export interface ProductosCategorias {
  nodes: Node[];
}

export interface Node {
  slug: string;
}
