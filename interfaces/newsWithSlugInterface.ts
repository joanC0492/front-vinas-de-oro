export interface NewsWithSlugResponse {
  noticias: Noticias;
}

export interface Noticias {
  nodes: Node[];
}

export interface Node {
  slug: string;
}
