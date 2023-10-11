import { Layout } from "@/components/layouts";
import { CardProductoCategoria } from "@/components/producto";
import { CardFloating, TitleSections } from "@/components/ui";
import { NextPage } from "next";

const ElBarCategoriaPage: NextPage = () => {
  return (
    <Layout title="El Bar" banner={false}>
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
              title="El Bar"
              subtitle="Línea Premium"
              className="my-4 | pl-8 md:pl-0"
              line
            />
            <div className="pt-2" />
            <ul className="px-4 sm:px-0">
              {[...new Array(5)].map((_, i) => (
                <li key={i}>
                  <CardProductoCategoria
                    className={`w-full sm:w-[585px] | mx-auto | transition-shadow | shadow-md hover:shadow-2xl | my-6 | bg-vinas-brown-5 ${
                      (i + 1) % 2 === 0
                        ? "sm:[&_.col2]:order-1 sm:[&_.col1]:order-2"
                        : "sm:[&_.col1]:order-1 sm:[&_.col2]:order-2"
                    }`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ElBarCategoriaPage;
