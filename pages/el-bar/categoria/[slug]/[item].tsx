import { useEffect } from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Layout } from "@/components/layouts";
import {
  ProductoDetailCarrousel,
  ProductoShared,
} from "@/components/sections/productos";
import { CardFloating, TitleSections } from "@/components/ui";
import { CardRecetaBar } from "@/components/receta";
import {
  getAllBarByCategory,
  getBarSlugs,
  getElBarMenuFloating,
} from "@/lib/api";
import { useCardFloatingContext } from "@/store/CardFloatingContext";
import { CardFloatingProps } from "@/interfaces/menu-card";
import { ElBarCategoryPage } from "@/interfaces/el-bar-category";

interface IProps {
  elBarMenuFloating: CardFloatingProps;
  elBarCategoryPage: ElBarCategoryPage;
}
const ElBarCateogriaItemPage: NextPage<IProps> = ({
  elBarMenuFloating,
  elBarCategoryPage,
}) => {
  const { dataMenuFloating, addDataMenu, isEmpty } = useCardFloatingContext();

  const { elbar, title: titleCategory } = elBarCategoryPage;
  const { title: titleBar, carrousel, content } = elbar[0];

  useEffect(() => {
    const isOtherPage: boolean =
      !isEmpty && dataMenuFloating.title !== elBarMenuFloating.title;
    if (isEmpty || isOtherPage) {
      addDataMenu(elBarMenuFloating);
    }
  }, []);

  return (
    <Layout title={`El Bar | ${titleBar}`} banner={false}>
      <div className="container py-12">
        <div className="grid grid-cols-12">
          <div className="col-start-1 | col-span-12 md:col-span-2 xl:col-span-3">
            {!isEmpty && (
              <CardFloating
                className="md:w-[262px] | bg-white | shadow-vinas | sticky | top-[calc(111px+10rem)] | z-40 | left-0 | mb-8 md:mb-20 | xl:-ml-[100px] 2xl:ml-1 | lg:-translate-x-24 xl:translate-x-0 | md:text-right"
                data={dataMenuFloating}
              />
            )}
            {/* data={elBarMenuFloating}
              data={dataMenuFloating} */}
          </div>
          <div className="col-start-1 md:col-start-3 xl:col-start-4 | col-span-12 md:col-span-8 xl:col-span-6 2xl:col-span-6">
            <TitleSections
              title={`El Bar | ${titleCategory}`}
              subtitle={titleBar}
              className="my-4 | pl-8 md:pl-0"
              line
            />
            <ProductoDetailCarrousel className="mt-4" data={carrousel} />
            <CardRecetaBar data={content!} />
            <ProductoShared />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const bars = await getBarSlugs();
  return {
    paths: bars,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug, item } = params as { slug: string; item: string };
  let elBarCategoryPage = {} as ElBarCategoryPage;
  let elBarMenuFloating = {} as CardFloatingProps;
  try {
    elBarCategoryPage = await getAllBarByCategory(slug, item);
    elBarMenuFloating = await getElBarMenuFloating();
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al obtener datos: ", error.message);
    }
  }
  return {
    props: {
      elBarCategoryPage,
      elBarMenuFloating,
    },
  };
};

export default ElBarCateogriaItemPage;
