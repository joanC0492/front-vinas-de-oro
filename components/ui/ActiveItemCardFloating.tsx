import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCardFloatingContext } from "@/store/CardFloatingContext";

interface IProps {
  slug: string;
  title: string;
  indexCategory: number;
}

const comparePaths = (path: string, asPath: string): boolean =>
  asPath.includes(path);

export const ActiveItemCardFloating = ({
  slug,
  title,
  indexCategory,
}: IProps) => {
  const { updateDataMenuActiveItem } = useCardFloatingContext();
  const { asPath } = useRouter();
  const isEquals = comparePaths(slug, asPath);
  useEffect(() => {
    if (isEquals) {
      updateDataMenuActiveItem(indexCategory);
    }
  }, [indexCategory]);

  return (
    <Link
      href={slug}
      className={`${
        comparePaths(slug, asPath) ? "underline text-vinas-brown-2" : ""
      } inline-block leading-tight`}>
      {title}
    </Link>
  );
};
