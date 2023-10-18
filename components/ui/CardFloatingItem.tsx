import Link from "next/link";
import { Add as MoreIcon, Remove as LessIcon } from "@mui/icons-material";
import { ActiveItemCardFloating } from "./ActiveItemCardFloating";
import { CardFloatingCategory } from "@/interfaces/menu-card";
import { useCardFloatingContext } from "@/store/CardFloatingContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface IProps {
  category: CardFloatingCategory;
  index: number;
}
export const CardFloatingItem = ({ category, index }: IProps) => {
  const { updateDataMenuActiveItem } = useCardFloatingContext();
  const { asPath } = useRouter();

  useEffect(() => {
    const categorySlug = category.slug.split("/").reverse()[0];
    const [item, slug] = asPath.split("/").reverse();
    if ([item, slug].includes(categorySlug)) {      
      updateDataMenuActiveItem(index);
    }
  }, []);

  return (
    <li className="mb-1">
      <div>
        <Link
          href={category.slug}
          onClick={() => updateDataMenuActiveItem(index)}>
          <div className="relative">
            <span
              className={`inline-block font-semibold leading-tight ${
                category.isActive ? "underline drop-shadow-xl" : ""
              }`}>
              {category.name}
            </span>
            <span className="absolute | right-0 sm:-right-6 | -top-[1px]">
              {category.isActive ? <MoreIcon /> : <LessIcon />}
            </span>
          </div>
        </Link>
      </div>
      <ul className={`${category.isActive ? "block" : "hidden"}`}>
        {category.data.map((item, j) => (
          <li key={j}>
            <ActiveItemCardFloating
              title={item.name}
              slug={item.slug}
              indexCategory={index}
            />
          </li>
        ))}
      </ul>
    </li>
  );
};
