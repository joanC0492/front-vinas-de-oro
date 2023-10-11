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
    title: "Imagen 1",
  },
  {
    id: 2,
    sourceUrl:
      "https://www.piscovinasdeoro.com.pe/img/recetas/cl-g-1%20(2).jpg",
    title: "Imagen 2",
  },
  {
    id: 3,
    sourceUrl:
      "https://www.piscovinasdeoro.com.pe/img/recetas/cl-g-1%20(3).jpg",
    title: "Imagen 3",
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
          {data.map(({ id, sourceUrl, title }) => (
            <SwiperSlide key={id}>
              <div className="relative | px-4 md:px-8">
                <img
                  src={sourceUrl}
                  alt={title}
                  className="ml-auto | w-full | max-w-full sm:max-w-[calc(100%-150px)] md:max-w-[calc(100%-200px)]"
                />
                <div className="bg-white | shadow-lg | static sm:absolute | left-0 | top-8 md:top-16 | w-full | max-w-full sm:max-w-[300px] md:max-w-[400px] | ml-0 sm:ml-4 md:ml-8 | border-t sm:border-t-0 | border-solid | border-[#0000000d]">
                  <div className="p-8">
                    <p className="text-3xl text-vinas-brown-2 mb-3">
                      Chilcano Clásico
                    </p>
                    <p className="leading-relaxed md:leading-loose | line-clamp-3">
                      Preparación: Colocar los insumos directo al vaso según el
                      orden de la receta. Usar la ginger ale fría y finalizar
                      colocando 1 rodaja de limón para...
                    </p>
                    <div className="mt-4 md:mt-6">
                      <div className="flex flex-col max-w-[160px] gap-2">
                        <Link href={""} className="btn-secundary text-center">
                          CONOCER
                        </Link>
                        <Link href={""} className="btn-secundary text-center">
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
