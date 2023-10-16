import { CardFloatingProps } from "@/interfaces/menu-card";
import { CardFloatingItem } from "./CardFloatingItem";

interface IProps {
  className?: string;
  data: CardFloatingProps;
}
export const CardFloating = ({ data, className = "" }: IProps) => {
  return (
    <div className={className}>
      <div className="py-[30px] md:py-[50px] | px-[50px]">
        <p className="text-base leading-tight font-bold text-vinas-gray-4">
          {data.title}
        </p>
        <ul className="mt-2">
          {data.category.map((category, i) => (
            <CardFloatingItem key={category.id} index={i} category={category} />
          ))}
        </ul>
      </div>
    </div>
  );
};
