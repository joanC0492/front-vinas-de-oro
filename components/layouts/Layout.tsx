import Head from "next/head";
import React from "react";
import { Header, SideBar } from "@/components/ui";
import { Footer } from "../ui/Footer";

interface IProps {
  children: React.ReactNode;
  title?: string;
  banner?: boolean;
  footer?: boolean;
}
const img = "https://www.piscovinasdeoro.com.pe/img/baner-noticias.jpg";
export const Layout: React.FC<IProps> = ({
  children,
  title = "Viñas de Oro",
  banner = true,
  footer = true,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <div className="grid grid-cols-12">
        <SideBar className="hidden lg:block | lg:col-span-3 | bg-vinas-de-oro" />
        <div className="col-span-12 lg:col-span-9">
          <main>
            {banner && (
              <div
                className={`py-7 md:py-10 | text-center | text-white | text-[65px]`}
                style={{
                  backgroundImage: `url("${img}")`,
                }}>
                {title}
              </div>
            )}
            <div>{children}</div>
          </main>
        </div>
      </div>
      {footer && <Footer />}
    </>
  );
};
