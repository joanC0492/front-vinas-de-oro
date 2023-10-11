import { SharedRrss } from "@/components/ui";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface IProps {
  className?: string;
}

export const ProductoShared = ({ className }: IProps) => {
  const [url, setUrl] = useState("");
  const { asPath } = useRouter();
  useEffect(() => {
    setUrl(location.href);
  }, [asPath]);

  return (
    <div className={className}>
      <hr className="my-6" />
      <SharedRrss slug={url} className="px-4 sm:px-0"/>
    </div>
  );
};
