export interface NewsBySlugResponse {
  noticiaBy: NoticiaBy;
}

export interface NoticiaBy {
  id: string;
  date: string;
  title: string;
  content: string;
  slug: string;
  carrousel: Carrousel;
}

export interface Carrousel {
  nodes: Node[];
}

export interface Node {
  id: string;
  title: string;
  sourceUrl: string;
}
