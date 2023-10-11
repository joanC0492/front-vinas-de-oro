import Head from "next/head";
import React from "react";
import { Header } from "@/components/ui";
import { Footer } from "../ui/Footer";

interface IProps {
  children: React.ReactNode;
  title?: string;
}

export const LayoutMain: React.FC<IProps> = ({ children, title = "" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
