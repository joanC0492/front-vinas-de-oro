import { NextPage } from "next";
import { LayoutMain } from "@/components/layouts";
import {
  HomeBar,
  HomeCarrouselHero,
  HomeMotto,
  HomeNoticias,
  HomeProductos,
} from "@/components/sections/home";

const HomePage: NextPage = () => {
  return (
    <LayoutMain title="Inicio">
      <HomeCarrouselHero className="" />
      <HomeMotto />
      <HomeNoticias />
      <HomeProductos />
      <HomeBar className="bg-vinas-gray-2" />
    </LayoutMain>
  );
};

export default HomePage;
