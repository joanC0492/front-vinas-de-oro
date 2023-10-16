import { AppProps } from "next/app";
import { GetStaticProps } from "next";
import { getMenuHeader } from "@/lib/api";
import { CardFloatingProvider } from "@/store/CardFloatingContext";
import "../styles/index.css";
import "../styles/OrigenCarrousel.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CardFloatingProvider>
      <Component {...pageProps} />
    </CardFloatingProvider>
  );
}

const getGlobalStaticProps: GetStaticProps = async () => {
  const menuItems = await getMenuHeader();
  return {
    props: {
      data: menuItems,
    },
  };
};

MyApp.getGlobalStaticProps = getGlobalStaticProps;

export default MyApp;
