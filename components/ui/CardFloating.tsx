import Link from "next/link";
import { useState } from "react";
import { Add as MoreIcon, Remove as LessIcon } from "@mui/icons-material";
import { ActiveItemCardFloating } from "./ActiveItemCardFloating";

const dataFixed = {
  title: "NUESTROS BARES",
  list: [
    {
      title: "Clásicos",
      slug: "clasicos",
      isActive: true,
      data: [
        {
          title: "Capitán",
          slug: "capitan",
        },
        {
          title: "Chilcano Clásico",
          slug: "chilcano-clasico",
        },
        {
          title: "Pisco Punch",
          slug: "pisco-punch",
        },
        {
          title: "Pisco Sour",
          slug: "pisco-sour",
        },
      ],
    },
    {
      title: "Fáciles y Rápidos",
      slug: "faciles-y-rapidos",
      isActive: false,
      data: [
        {
          title: "Morena Mía",
          slug: "morena-mia",
        },
        {
          title: "Pisco Mule",
          slug: "pisco-mule",
        },
        {
          title: "Pisco Tonic",
          slug: "pisco-tonic",
        },
        {
          title: "Zamboni",
          slug: "zamboni",
        },
      ],
    },
    {
      title: "Sofisticados",
      slug: "sofisticados",
      isActive: false,
      data: [
        {
          title: "Kiwi Tonight",
          slug: "kiwi-tonight",
        },
        {
          title: "La Mina Party",
          slug: "la-mina-party",
        },
        {
          title: "Zamacueca",
          slug: "zamacueca",
        },
      ],
    },
  ],
};

interface IProps {
  path: string;
  className?: string;
}

export const CardFloating = ({ path, className = "" }: IProps) => {
  const [data, setData] = useState(dataFixed);

  const handleActiveList = (index: number): void => {
    const newData = { ...data };
    newData.list.map((item) => (item.isActive = false));
    newData.list[index].isActive = true;
    setData(newData);
  };

  return (
    <div className={className}>
      <div className="py-[30px] md:py-[50px] | px-[50px]">
        <p className="text-base leading-tight font-bold text-vinas-gray-4">
          {data.title}
        </p>
        <ul className="mt-2">
          {data.list.map((item, i) => (
            <li key={i} className="mb-1">
              <div>
                <Link
                  href={`/${path}/categoria/${item.slug}`}
                  onClick={() => handleActiveList(i)}>
                  <div className="relative">
                    <span
                      className={`inline-block font-semibold leading-tight ${
                        item.isActive ? "underline drop-shadow-xl" : ""
                      }`}>
                      {item.title}
                    </span>
                    <span className="absolute | right-0 sm:-right-6 | -top-[1px]">
                      {item.isActive ? <MoreIcon /> : <LessIcon />}
                    </span>
                  </div>
                </Link>
              </div>
              <ul className={`${item.isActive ? "block" : "hidden"}`}>
                {item.data.map((_item, j) => (
                  <li key={j}>
                    <ActiveItemCardFloating
                      title={_item.title}
                      slug={`/${path}/categoria/${item.slug}/${_item.slug}`}
                    />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
