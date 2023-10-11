import { NextPage } from "next";
import { Layout } from "@/components/layouts";
import { TitleSections, Footer } from "@/components/ui";
import { ProductoCategories } from "@/components/sections/productos";

const TITLE: string = "Productos";
const Productos: NextPage = () => {
  return (
    <>
      <Layout title={TITLE} footer={false}>
        <div className="container | py-12 md:py-16 lg:py-28">
          <div className="grid grid-cols-12 gap-x-4 px-4">
            <div className="col-start-3 sm:col-start-4 md:col-start-5 xl:col-start-1 | col-span-8 sm:col-span-6 md:col-span-4 xl:col-span-3 | flex | items-end | order-2 xl:order-1">
              <img
                src="https://www.piscovinasdeoro.com.pe/img/productospage.jpg"
                alt="Productos Page"
                className="max-w-full xl:max-w-[calc(100%+7px)] 2xl:max-w-[262px] | block | mx-auto"
              />
            </div>
            <div className="col-span-12 md:col-span-10 xl:col-span-8 2xl:col-span-6 | md:col-start-2 xl:col-start-4 2xl:col-start-4 | order-1 xl:order-2">
              <TitleSections
                title={TITLE}
                subtitle="El mejor producto para un buen paladar"
              />
              <div className="content my-4 wp-line-left">
                <p>
                  A la vista, el Pisco debe ser incoloro, brillante y limpio. En
                  nariz, sus aromas deben apreciarse en dos tiempos: primero con
                  la copa inmóvil y luego haciéndola girar. Es en este momento
                  mágico que revela su intensidad y complejidad.
                </p>
                <br />
                <p>
                  En el paladar, el pisco sabe cómo dejar sentir su cuerpo y
                  sabor, que cuando es prolongado y agradable deja percibir su
                  nobleza. Pisco, el embrujo de los sentidos…
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <ProductoCategories className="bg-vinas-gray-1" />
      <Footer />
    </>
  );
};

export default Productos;
