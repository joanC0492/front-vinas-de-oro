export interface NewsResponse {
  noticias: Noticias;
}

export interface Noticias {
  nodes: NoticiasNode[];
}

export interface NoticiasNode {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: FeaturedImage;
  paisess: Paisess;
}

export interface FeaturedImage {
  node: FeaturedImageNode;
}

export interface FeaturedImageNode {
  sourceUrl: string;
}

export interface Paisess {
  nodes: PaisessNode[];
}

export interface PaisessNode {
  name: string;
}
