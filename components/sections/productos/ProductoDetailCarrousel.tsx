import { Swiper as Carrousel, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, A11y } from "swiper/modules";
import { ElBarCarrousel } from "@/interfaces/el-bar-category";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

interface IProps {
  className?: string;
  data: ElBarCarrousel[];
}
export const ProductoDetailCarrousel: React.FC<IProps> = ({
  data,
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
          {data.map(({ id, img }) => (
            <SwiperSlide key={id}>
              <div>
                <img
                  src={img}
                  alt={id}
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
