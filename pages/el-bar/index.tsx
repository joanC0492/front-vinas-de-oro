import { NextPage, GetStaticProps } from "next";
import { Layout } from "@/components/layouts";
import { Footer, TitleSections } from "@/components/ui";
import { ElBarCategories } from "@/components/sections/el-bar";
import { getAllBarCategories } from "@/lib/api";
import { NodeElement as ICategory } from "@/interfaces/el-bar";

interface IProps {
  categories: ICategory[];
}
const TITLE: string = "El Bar";
const ElBarPage: NextPage<IProps> = ({ categories }) => {
  return (
    <>
      <Layout title={TITLE} footer={false}>
        <div className="container | py-12 md:py-16 lg:py-28">
          <div className="grid grid-cols-12 gap-x-4 px-4">
            <div className="col-start-3 sm:col-start-4 md:col-start-5 xl:col-start-1 | col-span-8 sm:col-span-6 md:col-span-4 xl:col-span-3 | flex | items-end | order-2 xl:order-1">
              <img
                src="https://www.piscovinasdeoro.com.pe/img/el-bar.jpg"
                alt="Productos Page"
                className="max-w-full xl:max-w-[calc(100%+7px)] 2xl:max-w-[262px] | block | mx-auto"
              />
            </div>
            <div className="col-span-12 md:col-span-10 xl:col-span-8 2xl:col-span-6 | md:col-start-2 xl:col-start-4 2xl:col-start-4 | order-1 xl:order-2">
              <TitleSections title={TITLE} subtitle="Variedad en propuestas" />

              <div className="content my-4 wp-line-left [&>p]:mb-5">
                <p>
                  A la vista, el Pisco debe ser incoloro, brillante y cristalino
                  tanto como la copa en que debe servirse. Para el olfato, debe
                  contar con un “aroma limpio”, es decir, que mientras más
                  presencia tenga la uva en su perfume, la calidad está
                  asegurada. Este proceso debe llevarse a cabo en dos tiempos.
                  Inicialmente, con la copa inmóvil y el líquido en reposo;
                  seguidamente, haciéndola girar para liberar sus aromas.
                </p>
                <p>
                  Por último y más importante, para el gusto, el pisco debe
                  tener un sabor amable que no sea agresivo con la garganta para
                  que nos invite a seguir probando su explosión de sabores. En
                  este punto, el pisco revela los misterios de su intensidad y
                  complejidad. Puedes disfrutar el pisco solo o en alguna de sus
                  mejores preparaciones. A continuación, te mostramos algunas
                  alternativas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>

      <ElBarCategories className="bg-vinas-gray-1" data={categories} />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  let allCategories: ICategory[] = [];
  try {
    allCategories = await getAllBarCategories(preview);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al obtener datos: ", error.message);
    }
  }
  return {
    props: {
      categories: allCategories,
    },
  };
};

export default ElBarPage;
