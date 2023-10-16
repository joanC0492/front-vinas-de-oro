export interface CardFloatingData {
  id: string;
  name: string;
  slug: string;
}
export interface CardFloatingCategory {
  id: string;
  name: string;
  slug: string;
  isActive: boolean;
  data: CardFloatingData[];
}
export interface CardFloatingProps {
  title: string;
  category: CardFloatingCategory[];
}
