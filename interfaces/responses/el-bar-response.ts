export interface ElBarResponse {
  elBars: ElBars;
}

export interface ElBars {
  nodes: ElBarsNode[];
}

export interface ElBarsNode {
  slug:            string;
  elBarCategorias: ElBarCategorias;
}

export interface ElBarCategorias {
  nodes: ElBarCategoriasNode[];
}

export interface ElBarCategoriasNode {
  slug: Slug;
}

export enum Slug {
  Clasicos = "clasicos",
  FacilesYRapidos = "faciles-y-rapidos",
  Sofisticados = "sofisticados",
}