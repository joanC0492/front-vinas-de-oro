export interface PaisesResponse {
  paisess: Paisess;
}

export interface Paisess {
  nodes: PaisesNode[];
}

export interface PaisesNode {
  name: string;
  count: number | null;
}
