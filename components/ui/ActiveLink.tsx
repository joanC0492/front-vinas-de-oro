import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface INav {
  path: string;
  name: string;
}
interface IProps extends INav {
  className?: string;
}

const comparePaths = (path: string, asPath: string): boolean => {
  if (path !== "/") return asPath.includes(path);
  if (path === asPath) return true;
  return false;
};

const ActiveLink: React.FC<IProps> = ({ name, path, className }) => {
  const { asPath } = useRouter();
  return (
    <li className={`group ${comparePaths(path, asPath) ? "is-active" : ""}`}>
      <Link className={className} href={path}>
        {name}
      </Link>
    </li>
  );
};

export default ActiveLink;
