import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Layout } from "@/components/layouts";
import {
  ProductoDetailCarrousel,
  ProductoReceta,
  ProductoShared,
} from "@/components/sections/productos";
import { CardFloating, TitleSections } from "@/components/ui";
import {
  getAllProductCategory,
  getProductoMenuFloating,
  getProductoSlugs,
} from "@/lib/api";
import { ProductCategoryPage } from "@/interfaces/product-category.interface";
import { CardFloatingProps } from "@/interfaces/menu-card";
import { useEffect } from "react";
import { useCardFloatingContext } from "@/store/CardFloatingContext";

interface IProps {
  productCategoryPage: ProductCategoryPage;
  productMenuFloating: CardFloatingProps;
}
const CategoriaItemPage: NextPage<IProps> = ({
  productCategoryPage,
  productMenuFloating,
}) => {
  const { dataMenuFloating, addDataMenu, isEmpty } = useCardFloatingContext();

  const { product } = productCategoryPage;
  const { title, carrousel, content, recipe } = product[0];

  useEffect(() => {
    const isOtherPage: boolean =
      !isEmpty && dataMenuFloating.title !== productMenuFloating.title;
    if (isEmpty || isOtherPage) {
      addDataMenu(productMenuFloating);
    }
  }, []);

  return (
    <Layout title={`Productos | ${title}`} banner={false}>
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
              title={"Productos"}
              subtitle={title}
              className="my-4 | pl-8 md:pl-0 | [&_h2]:max-w-md"
              line
            />
            <ProductoDetailCarrousel className="mt-4" data={carrousel} />
            <div className="px-4 sm:px-0 mt-4">
              <div
                dangerouslySetInnerHTML={{
                  __html: content,
                }}
              />
            </div>
            <ProductoReceta
              className="mt-6"
              data={recipe}
              titleProduct={title}
            />
            <ProductoShared />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const productPaths = await getProductoSlugs();
  return {
    paths: productPaths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug, item } = params as { slug: string; item: string };
  let productCategoryPage = {} as ProductCategoryPage;
  let productMenuFloating = {} as CardFloatingProps;
  try {
    productCategoryPage = await getAllProductCategory(slug, item);
    productMenuFloating = await getProductoMenuFloating();
  } catch (error) {
    if (error instanceof Error) {
      console.log("Error: ", error.message);
    }
  }

  return {
    props: {
      productCategoryPage,
      productMenuFloating,
    },
  };
};

export default CategoriaItemPage;
