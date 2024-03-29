import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import {
  getAllBarByCategory,
  getBarCategories,
  getElBarMenuFloating,
} from "@/lib/api";
import { Layout } from "@/components/layouts";
import { CardProductoCategoria } from "@/components/producto";
import { CardFloating, TitleSections } from "@/components/ui";
import { ElBarCategoryPage } from "@/interfaces/el-bar-category";
import { CardFloatingProps } from "@/interfaces/menu-card";
import { useCardFloatingContext } from "@/store/CardFloatingContext";
import { useEffect } from "react";

interface IProps {
  elBarCategoryPage: ElBarCategoryPage;
  elBarMenuFloating: CardFloatingProps;
}

const ElBarCategoriaPage: NextPage<IProps> = ({
  elBarCategoryPage,
  elBarMenuFloating,
}) => {
  const { dataMenuFloating, addDataMenu, isEmpty } = useCardFloatingContext();
  const { title, elbar } = elBarCategoryPage;

  useEffect(() => {
    const isOtherPage: boolean =
      !isEmpty && dataMenuFloating.title !== elBarMenuFloating.title;
    if (isEmpty || isOtherPage) {
      addDataMenu(elBarMenuFloating);
    }
  }, []);

  return (
    <Layout title={`El Bar | ${title}`} banner={false}>
      <div className="container py-12">
        <div className="grid grid-cols-12">
          <div className="col-start-1 | col-span-12 md:col-span-2 xl:col-span-3">
            {!isEmpty && (
              <CardFloating
                className="md:w-[262px] | bg-white | shadow-vinas | sticky | top-[calc(111px+10rem)] | z-40 | left-0 | mb-8 md:mb-20 | xl:-ml-[100px] 2xl:ml-1 | lg:-translate-x-24 xl:translate-x-0 | md:text-right"
                data={dataMenuFloating}
              />
            )}
          </div>
          <div className="col-start-1 md:col-start-3 xl:col-start-4 | col-span-12 md:col-span-8 xl:col-span-6 2xl:col-span-6">
            <TitleSections
              title={`El Bar | ${title}`}
              subtitle="Recetas"
              className="my-4 | pl-8 md:pl-0"
              line
            />
            <div className="pt-2" />
            <ul className="px-4 sm:px-0">
              {elbar.map((barItem, i) => (
                <li key={i}>
                  <CardProductoCategoria
                    data={barItem}
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

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const categories = await getBarCategories();

  const paths = categories.map((category) => {
    return {
      params: {
        slug: category.slug,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  let elBarCategoryPage = {} as ElBarCategoryPage;
  let elBarMenuFloating = {} as CardFloatingProps;
  try {
    elBarCategoryPage = await getAllBarByCategory(slug);
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

export default ElBarCategoriaPage;
