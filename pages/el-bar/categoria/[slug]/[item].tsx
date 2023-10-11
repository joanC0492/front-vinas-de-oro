import { NextPage } from "next";
import { Layout } from "@/components/layouts";
import {
  ProductoDetailCarrousel,
  ProductoShared,
} from "@/components/sections/productos";
import { CardFloating, TitleSections } from "@/components/ui";
import { CardRecetaBar } from "@/components/receta";

const ElBarCateogriaItemPage: NextPage = () => {
  return (
    <Layout title="Productos" banner={false}>
      <div className="container py-12">
        <div className="grid grid-cols-12">
          <div className="col-start-1 | col-span-12 md:col-span-2 xl:col-span-3">
            <CardFloating
              className="md:w-[262px] | bg-white | shadow-vinas | sticky | top-[calc(111px+10rem)] | z-40 | left-0 | mb-8 md:mb-20 | xl:-ml-[100px] 2xl:ml-1 | lg:-translate-x-24 xl:translate-x-0 | md:text-right"
              path="el-bar"
            />
          </div>
          <div className="col-start-1 md:col-start-3 xl:col-start-4 | col-span-12 md:col-span-8 xl:col-span-6 2xl:col-span-6">
            <TitleSections
              title={"Productos"}
              subtitle="Chilcano Clásico"
              className="my-4 | pl-8 md:pl-0"
              line
            />
            <ProductoDetailCarrousel className="mt-4" />
            <CardRecetaBar />
            <ProductoShared />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ElBarCateogriaItemPage;
