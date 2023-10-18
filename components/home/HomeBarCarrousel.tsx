import { Swiper as Carrousel, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, A11y } from "swiper/modules";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

interface IProps {
  className?: string;
}
const data = [
  {
    id: 1,
    sourceUrl:
      "https://www.piscovinasdeoro.com.pe/img/recetas/cl-g-1%20(1).jpg",
    title: "Capitán",
    description:
      "Preparación: Colocar los insumos dentro de un vaso mezclador, luego remover la mezcla usando una cucharilla durante 8 segundos y terminar filtrando el...",
    slug: "/el-bar/categoria/clasicos/capitan",
  },
  {
    id: 2,
    sourceUrl:
      "https://www.piscovinasdeoro.com.pe/img/recetas/cl-g-1%20(2).jpg",
    title: "Chilcano Clásico",
    description:
      "Preparación: Colocar los insumos directo al vaso según el orden de la receta. Usar la ginger ale fría y finalizar colocando 1 rodaja de limón para...",
    slug: "/el-bar/categoria/clasicos/chilcano-clasico",
  },
  {
    id: 3,
    sourceUrl:
      "https://www.piscovinasdeoro.com.pe/img/recetas/cl-g-1%20(3).jpg",
    title: "Kiwi Tonight",
    description:
      "Preparación: Colocar los insumos dentro del shaker en el orden de la receta establecida. Batir por 12 segundos con intensidad, servir directo al vaso....",
    slug: "/el-bar/categoria/sofisticados/kiwi-tonight",
  },
];

export const HomeBarCarrousel: React.FC<IProps> = ({ className = "" }) => {
  return (
    <div className={className}>
      <div className="cont-nav">
        <Carrousel
          spaceBetween={30}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation, A11y]}
          className="mySwiper">
          {data.map(({ id, sourceUrl, title, description, slug }) => (
            <SwiperSlide key={id}>
              <div className="relative | px-4 md:px-8">
                <img
                  src={sourceUrl}
                  alt={title}
                  className="ml-auto | w-full | max-w-full sm:max-w-[calc(100%-150px)] md:max-w-[calc(100%-200px)]"
                />
                <div className="bg-white | shadow-lg | static sm:absolute | left-0 | top-8 md:top-16 | w-full | max-w-full sm:max-w-[300px] md:max-w-[400px] | ml-0 sm:ml-4 md:ml-8 | border-t sm:border-t-0 | border-solid | border-[#0000000d]">
                  <div className="p-8">
                    <p className="text-3xl text-vinas-brown-2 mb-3">{title}</p>
                    <p className="leading-relaxed md:leading-loose | line-clamp-3">
                      {description}
                    </p>
                    <div className="mt-4 md:mt-6">
                      <div className="flex flex-col max-w-[160px] gap-2">
                        <Link href={slug} className="btn-secundary text-center">
                          CONOCER
                        </Link>
                        <Link
                          href={"/el-bar"}
                          className="btn-secundary text-center">
                          MAS RECETAS
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Carrousel>
      </div>
    </div>
  );
};

// 2xl:max-w-[80%]
