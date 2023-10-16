export interface BarByCategory {
  elBarCategorias: ElBarCategorias;
}

export interface ElBarCategorias {
  nodes: ElBarCategoriasNode[];
}

export interface ElBarCategoriasNode {
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
  date: Date;
  content: string | null;
  galeria: Galeria;
  featuredImage: FeaturedImage;
}

export interface FeaturedImage {
  node: FeaturedImageNode;
}

export interface FeaturedImageNode {
  mediaItemUrl: string;
}

export interface Galeria {
  nodes: GaleriaNode[];
}

export interface GaleriaNode {
  id: string;
  guid: string;
}
