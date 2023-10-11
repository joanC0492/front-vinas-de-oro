import React from "react";
import { LinkedIn, Facebook, Instagram } from "@mui/icons-material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

interface Irrss {
  name: string;
  url: string;
  component: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
}

const rrss = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/VinasDeOroPeru/",
    component: Facebook,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/company/bodegas-vi%C3%B1as-de-oro/",
    component: LinkedIn,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/vinasdeoro/",
    component: Instagram,
  },
];

interface IProps {
  className?: string;
}
export const SideBar: React.FC<IProps> = ({ className = "" }) => {
  return (
    <div className={className}>
      <div className="w-full sticky top-[111px] left-0 z-30">
        <ul className="w-full h-full flex flex-col gap-2 items-center py-48">
          {rrss.map((rs, i) => (
            <li key={i}>
              <a target="_blank" href={rs.url} rel="noopener noreferrer">
                <rs.component className="text-vinas-brown-3 text-3xl" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
