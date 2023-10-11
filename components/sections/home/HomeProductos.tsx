import Link from "next/link";
import { pageData } from "@/data/pageData";
import { TitleHome } from "@/components/ui";

interface IProps {
  className?: string;
}
const data = pageData.Home.section.productos;
export const HomeProductos = ({ className = "" }: IProps) => {
  return (
    <div className={className}>
      <div
        className="py-14"
        style={{
          backgroundImage: `url(${data.sourceUrl})`,
        }}>
        <div className="container">
          <div className="grid grid-cols-12 | px-4 lg:px-0">
            <div className="col-start-1 lg:col-start-2 xl:col-start-3 | col-span-12 lg:col-span-10 xl:col-span-8">
              <TitleHome title="Nuestros Productos" className="mb-8" dark />
              <ul className="flex | flex-col sm:flex-row | gap-4 sm:gap-6 | justify-center | items-center">
                {data.data.map((item) => (
                  <li key={item.id} className="flex-1 text-center">
                    <article className="bg-white p-6 transition-all hover:duration-200 hover:scale-105">
                      <p className="font-medium | text-lg sm:text-xl | leading-tight md:leading-[1.1] | min-h-[64px] md:min-h-[44px] | flex md:block | items-center | w-[200px] sm:w-auto | justify-center">
                        {item.title}
                      </p>
                      <div className="h-44 lg:h-64 | flex items-center justify-center">
                        <img
                          src={item.sourceUrl}
                          alt={item.title}
                          className="max-h-full mx-auto"
                        />
                      </div>
                      <div>
                        <Link href={item.slug} className="btn-main">
                          CONOCER
                        </Link>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
