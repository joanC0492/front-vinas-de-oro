import { useState } from "react";
import { Swiper as Carrousel, SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/types";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// import { Node } from "@/interfaces/newsBySlug";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface IProps {
  className?: string;
}
const dataFixed = [
  {
    id: 1,
    sourceUrl: "https://www.piscovinasdeoro.com.pe/img/origen_c/o-g-07.jpg",
    title: "Origen 1",
    description:
      "Nuestra bodega cuenta con una capacidad de producción de 200,000 litros.",
  },
  {
    id: 2,
    sourceUrl: "https://www.piscovinasdeoro.com.pe/img/origen_c/o-g-08.jpg",
    title: "Origen 2",
    description:
      "Nuestra planta cuenta con tanques de acero inoxidable lo cual permite mantener una temperatura adecuada del pisco.",
  },
  {
    id: 3,
    sourceUrl: "https://www.piscovinasdeoro.com.pe/img/origen_c/o-g-09.jpg",
    title: "Origen 3",
    description:
      "El jugo de uva fermentado se destila en tradicionales alambiques de cobre.",
  },
  {
    id: 4,
    sourceUrl: "https://www.piscovinasdeoro.com.pe/img/origen_c/o-g-10.jpg",
    title: "Origen 4",
    description:
      "Nuestros piscos reposan al menos 10 meses en tanques de acero antes pasar a embotellado.",
  },
  {
    id: 5,
    sourceUrl: "https://www.piscovinasdeoro.com.pe/img/origen_c/o-g-02.jpg",
    title: "Origen 5",
    description:
      "Una mañana, exactamente el 23 de Agosto de 1993 inició nuestro gran sueño, abrimos nuestras puertas e iniciamos labores en nuestra bodega ubicada en la Hacienda Hoja Redonda, en el Km. 213 de la Panamericana Sur del distrito El Carmen – Chincha",
  },
  {
    id: 6,
    sourceUrl: "https://www.piscovinasdeoro.com.pe/img/origen_c/o-g-04.jpg",
    title: "Origen 6",
    description:
      "En el 2004 se construye la actual Bodega, tanques de acero inoxidable y alambiques tradicionales de cobre. Con esta moderna planta hoy nos enfocamos en optimizar cada uno de los procesos de elaboración del Pisco, por esta razón podemos garantizar nuestra calidad.",
  },
  {
    id: 7,
    sourceUrl: "https://www.piscovinasdeoro.com.pe/img/origen_c/o-g-05.jpg",
    title: "Origen 7",
    description:
      "El 2006 fue el año del gran salto, este año renovamos nuestra imagen y apostamos por un pisco elegante y con un diseño moderno. Hoy en día las formas patentadas de nuestras botellas son las características más llamativas de nuestra marca.",
  },
  {
    id: 8,
    sourceUrl: "https://www.piscovinasdeoro.com.pe/img/origen_c/o-g-06.jpg",
    title: "Origen 8",
    description: "Imagen de la Colección Mosto Verde Viñas de Oro 2006.",
  },
];

export const OrigenCarrousel: React.FC<IProps> = ({ className }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null);
  return (
    <div className={`OrigenCarrousel ${className}`}>
      <div className="[&_.swiper-button-prev]:text-vinas-brown-2 [&_.swiper-button-next]:text-vinas-brown-2 [&_.swiper-wrapper]:items-center [&_.swiper-button-prev]:select-none [&_.swiper-button-next]:select-none [&_.swiper-button-prev]:bg-white [&_.swiper-button-next]:bg-white [&_.swiper-button-prev]:w-[44px] [&_.swiper-button-next]:w-[44px] [&_.swiper-button-prev]:font-bold [&_.swiper-button-next]:font-bold after:[&_.swiper-button-prev]:text-[28px] after:[&_.swiper-button-next]:text-[28px] after:[&_.swiper-button-prev]:content-['prev'] after:[&_.swiper-button-next]:content-['next']">
        <Carrousel
          loop={true}
          spaceBetween={30}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          slidesPerView={1}
          className="mySwiper2">
          {dataFixed.map(({ id, sourceUrl, title, description }) => (
            <SwiperSlide key={id}>
              <div className="relative">
                <img
                  src={sourceUrl}
                  alt={title}
                  className="min-h-[220px] sm:min-h-full | mx-auto | w-[calc(100%-64px)]"
                />
                <div className="absolute left-[32px] bottom-0 w-[calc(100%-64px)]">
                  <p className="text-white | text-xs sm:text-sm | p-2 sm:p-4 | bg-black/40">{description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Carrousel>
        <div className="mx-auto w-[calc(100%-64px)]">
          <Carrousel
            onSwiper={setThumbsSwiper}
            loop={true}
            slidesPerView={6}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper">
            {dataFixed.map(({ id, sourceUrl, title }) => (
              <SwiperSlide key={id}>
                <img src={sourceUrl} alt={title} className="mx-auto" />
              </SwiperSlide>
            ))}
          </Carrousel>
        </div>
      </div>
    </div>
  );
};
