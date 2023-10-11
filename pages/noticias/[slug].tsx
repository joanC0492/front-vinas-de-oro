import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { Layout } from "@/components/layouts";
import { getNewsBySlug, getNewsWithSlug } from "@/lib/api";
import { NoticiaBy } from "@/interfaces/newsBySlug";
import { NoticiaDetailCarrousel as Carrousel } from "@/components/sections";

interface IProps {
  news: NoticiaBy;
}

const NoticiaDetailPage: NextPage<IProps> = ({ news }) => {
  const timeElapsed = (): string => {
    const differenceMilliseconds: number =
      new Date().getTime() - new Date(news.date).getTime();
    const secondsElapsed: number = Math.floor(differenceMilliseconds / 1000);
    const minutesElapsed: number = Math.floor(secondsElapsed / 60);
    const hoursElapsed: number = Math.floor(minutesElapsed / 60);
    const daysElapsed: number = Math.floor(hoursElapsed / 24);
    const yearsElapsed: number = Math.floor(daysElapsed / 365);

    if (yearsElapsed > 0) return `${yearsElapsed} años`;
    if (daysElapsed > 0) return `${daysElapsed} días`;
    if (hoursElapsed > 0) return `${hoursElapsed} horas`;
    if (minutesElapsed > 0) return `${minutesElapsed} minutos`;
    return `${secondsElapsed} segundos`;
  };

  return (
    <Layout title="Noticias">
      <div className="grid grid-cols-12 py-8">
        <div className="col-start-3 col-span-6">
          <p className="mb-4 text-sm">Hace {timeElapsed()}</p>
          <h1 className="text-3xl text-vinas-brown-2">{news.title}</h1>
          <hr className="my-4" />
          <div
            dangerouslySetInnerHTML={{ __html: news.content }}
            className="[&_p]:text-sm [&_div]:text-sm [&_p]:text-vinas-brown-4"
          />
          <div className="my-5">
            <Carrousel data={news.carrousel.nodes} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  let paths = [] as { params: { slug: string } }[];

  try {
    const allNews = await getNewsWithSlug();
    paths = allNews.map((news) => ({
      params: { slug: `${news.slug}` },
    }));
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al obtener datos:", error.message);
    }
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  let news: NoticiaBy = {} as NoticiaBy;
  try {
    news = await getNewsBySlug(slug);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al obtener datos:", error.message);
    }
  }
  return {
    props: {
      news,
    },
    revalidate: 30,
  };
};

export default NoticiaDetailPage;
