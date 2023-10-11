import React from "react";
import { Swiper as Carrousel, SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/types";
import { Pagination, Navigation } from "swiper/modules";
import { Node } from "@/interfaces/newsBySlug";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface IProps {
  data: Node[];
}
const paginationClassName = "swiper-bcp-home-custom-pagination";
export const NoticiaDetailCarrousel: React.FC<IProps> = ({ data }) => {
  return (
    <div className="[&_.swiper-button-prev]:text-vinas-brown-2 [&_.swiper-button-next]:text-vinas-brown-2 [&_.swiper-wrapper]:items-center [&_.swiper-button-prev]:select-none [&_.swiper-button-next]:select-none">
      <Carrousel
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          el: `.${paginationClassName}`,
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper">
        {data.map(({ id, sourceUrl, title }) => (
          <SwiperSlide key={id}>
            <div className="px-36">
              <img src={sourceUrl} alt={title} className="mx-auto" />
            </div>
          </SwiperSlide>
        ))}
      </Carrousel>
      <div className="relative top-2">
        <div
          className={`${paginationClassName} text-center [&>.swiper-pagination-bullet]:mx-1 [&>.swiper-pagination-bullet]:cursor-pointer [&>.swiper-pagination-bullet-active]:bg-vinas-brown-2`}
        />
      </div>
    </div>
  );
};
