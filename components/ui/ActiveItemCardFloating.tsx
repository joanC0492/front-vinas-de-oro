import Link from "next/link";
import { useRouter } from "next/router";

interface IProps {
  slug: string;
  title: string;
}

const comparePaths = (path: string, asPath: string): boolean =>
  asPath.includes(path);

export const ActiveItemCardFloating = ({ slug, title }: IProps) => {
  const { asPath } = useRouter();  
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
