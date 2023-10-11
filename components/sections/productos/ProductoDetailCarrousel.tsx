import React, { useRef } from "react";
import { Swiper as Carrousel, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation, A11y } from "swiper/modules";
import { Node } from "@/interfaces/newsBySlug";

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
      "https://www.piscovinasdeoro.com.pe/img/productos/galeria/pmv-g-1%20(1).jpg",
    title: "Imagen 1",
  },
  {
    id: 2,
    sourceUrl:
      "https://www.piscovinasdeoro.com.pe/img/productos/galeria/pmv-g-1%20(5).jpg",
    title: "Imagen 2",
  },
];

export const ProductoDetailCarrousel: React.FC<IProps> = ({
  className = "",
}) => {
  return (
    <div className={className}>
      <div className="cont-nav">
        <Carrousel
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation, A11y]}
          className="mySwiper">
          {data.map(({ id, sourceUrl, title }) => (
            <SwiperSlide key={id}>
              <div>
                <img
                  src={sourceUrl}
                  alt={title}
                  className="mx-auto max-w-full 2xl:max-w-[80%]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Carrousel>
      </div>
    </div>
  );
};
