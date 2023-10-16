export interface BarCategoriesResponse {
  elBarCategorias: ElBarCategorias;
}

export interface ElBarCategorias {
  nodes: Node[];
}

export interface Node {
  id:   string;
  slug: string;
}
