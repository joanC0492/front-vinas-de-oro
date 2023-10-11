import Link from "next/link";
import { NoticiasNode } from "@/interfaces/noticiasInterface";
import { SharedRrss } from "../ui";

interface IProps {
  _news: NoticiasNode;
  className?: string;
}

export const CardNoticia: React.FC<IProps> = ({ _news, className = "" }) => {
  return (
    <div className={className}>
      <article className="bg-white rounded-lg">
        <div className="flex | flex-col sm:flex-row | gap-4">
          <div className="sm:flex-none | w-full sm:w-52">
            <Link href={`noticias/${_news.slug}`}>
              <img
                className="max-w-full rounded-md"
                src={_news.featuredImage.node.sourceUrl}
                alt="Pisco"
              />
            </Link>
          </div>
          <div className="py-2">
            <Link href={`noticias/${_news.slug}`}>
              <h3 className="text-3xl font-normal text-vinas-brown-2 leading-8">
                {_news.title}
              </h3>
            </Link>
            <hr className="my-4" />
            <div
              dangerouslySetInnerHTML={{ __html: _news.excerpt }}
              className="text-vinas-brown-4"
            />
            <div className="mt-4">
              <Link href={`noticias/${_news.slug}`} className="btn-main">
                LEER MÁS
              </Link>
            </div>
            <SharedRrss slug={_news.slug} className="pt-6" />
          </div>
        </div>
      </article>
    </div>
  );
};
