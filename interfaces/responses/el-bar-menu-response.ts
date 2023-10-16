export interface ElBarMenuResponse {
  elBarCategorias: ElBarCategorias;
}

export interface ElBarCategorias {
  nodes: ElBarCategoriasNode[];
}

export interface ElBarCategoriasNode {
  id: string;
  name: string;
  slug: string;
  elBars: ElBars;
}

export interface ElBars {
  nodes: ElBarsNode[];
}

export interface ElBarsNode {
  id: string;
  title: string;
  slug: string;
}