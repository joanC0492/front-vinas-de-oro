import { NextPage } from "next";
import { Layout } from "@/components/layouts";
import {
  ProductoDetailCarrousel,
  ProductoReceta,
  ProductoShared,
} from "@/components/sections/productos";
import { CardFloating, TitleSections } from "@/components/ui";

const CategoriaItemPage: NextPage = () => {
  return (
    <Layout title="Productos" banner={false}>
      <div className="container py-12">
        <div className="grid grid-cols-12">
          <div className="col-start-1 | col-span-12 md:col-span-2 xl:col-span-3">
            {/* <CardFloating
              className="md:w-[262px] | bg-white | shadow-vinas | sticky | top-[calc(111px+10rem)] | z-40 | left-0 | mb-8 md:mb-20 | xl:-ml-[100px] 2xl:ml-1 | lg:-translate-x-24 xl:translate-x-0 | md:text-right"
              path="productos"
            /> */}
          </div>
          <div className="col-start-1 md:col-start-3 xl:col-start-4 | col-span-12 md:col-span-8 xl:col-span-6 2xl:col-span-6">
            <TitleSections
              title={"Productos"}
              subtitle="Línea Premium"
              className="my-4 | pl-8 md:pl-0"
              line
            />
            {/* <ProductoDetailCarrousel className="mt-4" /> */}
            <div className="px-4 sm:px-0">
              <p>
                Este Pisco conquista el olfato con sus sensaciones aromáticas
                intensas a flores en las que destaca el geranio con tonos a
                frutos tropicales como la mandarina, así como a aromas limpios y
                predominantes.
              </p>
              <p>
                En el paladar se percibe equilibrado, redondo y untuoso, gracias
                a su proceso especial de elaboración. Al culminar libera un
                aroma a flores y frutas de mandarina y pasas rubias que definen
                su elegancia.
              </p>
            </div>
            <ProductoReceta className="mt-6" />
            <ProductoShared />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoriaItemPage;
