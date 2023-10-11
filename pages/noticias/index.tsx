import { NextPage, GetStaticProps } from "next";
import { getAllCountries, getAllNews } from "@/lib/api";
import { Layout } from "@/components/layouts";
import { CardNoticia, FilterNoticia } from "@/components/noticia";
import { TitleNoticia } from "@/components/noticia/TitleNoticia";
import { Pagination } from "@/components/ui";
import { useFilterNews } from "@/hooks/useFilterNews";
import { NoticiasNode } from "@/interfaces/noticiasInterface";
import { PaisesNode } from "@/interfaces/paisesInterface";

interface ICountries {
  country: string;
  count: number; //
  isActive: boolean;
}
interface IProps {
  news: NoticiasNode[];
  countries: ICountries[];
}

const NoticiasPage: NextPage<IProps> = ({ news, countries }) => {
  const {
    handleFilterChange,
    handlePageChange,
    newsToShow,
    totalPages,
    currentPage,
  } = useFilterNews({
    news,
  });

  return (
    <Layout title={"Noticias"}>
      <div className="container min-h-screen py-8">
        <div className="grid grid-cols-12 gap-x-4 px-4">
          <div className="lg:col-start-2 xl:col-start-2 2xl:col-start-2 | col-span-12 lg:col-span-10 xl:col-span-8 2xl:col-span-6">
            <TitleNoticia className="mb-6" />
            <FilterNoticia
              className="mb-8"
              countries={countries}
              onFilterChange={handleFilterChange}
              onPageChange={handlePageChange}
            />
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              className="container mx-auto mb-4"
            />
            {newsToShow?.map((_news, i) => (
              <CardNoticia _news={_news} className="mb-8" key={i} />
            ))}
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              className="container mx-auto"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  let allNews: NoticiasNode[] = [];
  let allCountries: PaisesNode[] = [];

  const getFormatCountries = (allCountries: PaisesNode[]): ICountries[] => {
    let countries: PaisesNode[] = allCountries
      .map((_country) => ({
        name: _country.name,
        count: _country.count,
      }))
      .filter((_country) => _country.count !== null)
      .sort((a, b) => b.count! - a.count!);

    const totalNews: number = countries.reduce(
      (acum, country) => acum + country.count!,
      0
    );
    countries.unshift({ name: "ALL", count: totalNews });

    return countries.map((country, i) => {
      if (i === 0) {
        return {
          country: country.name,
          count: country.count!,
          isActive: true,
        };
      }
      return {
        country: country.name,
        count: country.count!,
        isActive: false,
      };
    });
  };

  try {
    allNews = await getAllNews(preview);
    allCountries = await getAllCountries(preview);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al obtener datos:", error.message);
    }
  }
  const countries: ICountries[] = getFormatCountries(allCountries);
  return {
    props: {
      news: allNews,
      countries,
    },
    revalidate: 30, // Regenera la página cada 60 segundos
  };
};

export default NoticiasPage;
