import { Swiper as Carrousel, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper/modules";
import { Swiper } from "swiper/types";
import { pageData } from "@/data/pageData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

interface IProps {
  className?: string;
}

export const HomeCarrouselHero: React.FC<IProps> = ({ className = "" }) => {
  return (
    <div className={className}>
      <div className="">
        <Carrousel
          effect={"fade"}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Pagination]}
          className="mySwiper">
          {pageData.Home.section.hero.carrousel.map(
            ({ id, sourceUrl, sourceUrlMob, title }) => (
              <SwiperSlide key={id}>
                <img
                  src={sourceUrl}
                  alt={title}
                  className="mx-auto | w-full | object-cover | object-bottom xl:object-bottom | h-auto lg:h-[calc(100vh-111px)] | min-h-[432px] lg:min-h-[494px] 2xl:min-h-[780px] | hidden sm:block"
                />
                <img src={sourceUrlMob} alt={title} className="sm:hidden" />
              </SwiperSlide>
            )
          )}
        </Carrousel>
      </div>
    </div>
  );
};
