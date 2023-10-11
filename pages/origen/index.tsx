import { NextPage } from "next";
import { Layout } from "@/components/layouts";
import { Footer, TitleSections } from "@/components/ui";
import { OrigenCarrousel } from "@/components/sections/origen";

const TITLE: string = "Origen";
const OrigenPage: NextPage = () => {
  return (
    <>
      <Layout title={TITLE} footer={false}>
        <div className="container | py-12 md:py-16 lg:py-28">
          <div className="grid | grid-cols-12 | gap-x-4 | px-4">
            <div className="col-span-12 md:col-span-10 xl:col-span-8 2xl:col-span-6 | md:col-start-2 xl:col-start-3 2xl:col-start-4">
              <TitleSections
                title={TITLE}
                subtitle="El pisco que expresa su estilo"
              />

              <div className="content my-4 wp-line-left [&>p]:mb-5">
                <p>
                  Contemporáneo y rico en sensaciones, así es el espíritu que
                  anima la exquisita variedad de productos de Bodegas Viñas de
                  Oro, elaborados con las mejores uvas y la perfecta combinación
                  entre tradición y los procesos de elaboración más modernos de
                  la industria vitivinícola.
                </p>
                <p>
                  En Bodegas Viñas de Oro, cada botella espera ser abierta para
                  liberar sus aromas y cautivar sus sentidos. Usted solo tiene
                  que elegir entre nuestra exquisita variedad, aquella que
                  refleje su estilo de vida y anime esos momentos hechos para
                  compartir.
                </p>
                <p>
                  Viñas de Oro, el mejor Pisco del Perú y los más selectos
                  productos elaborados para deleitar al mundo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <div className="bg-vinas-gray-1 py-12">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="sm:col-start-2 lg:col-start-4 | col-span-12 sm:col-span-10 lg:col-span-8">
              <p className="text-3xl pl-8">Conoce nuestro origen</p>
              <OrigenCarrousel className="mt-4" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrigenPage;
