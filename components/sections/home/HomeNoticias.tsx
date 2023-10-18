import { useState } from "react";
import { Swiper as Carrousel, SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/types";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { pageData } from "@/data/pageData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { TitleHome } from "@/components/ui";
import Link from "next/link";

interface IProps {
  className?: string;
}

export const HomeNoticias: React.FC<IProps> = ({ className }) => {
  const [imgSection, setImgSection] = useState<string>(
    pageData.Home.section.noticias[0].sourceUrl
  );
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null);
  return (
    <div className={className}>
      <div className="grid grid-cols-12 items-center">
        <div
          className="col-span-12 sm:col-span-6 | h-72 sm:h-full | w-full | bg-cover | bg-top | order-2 sm:order-1"
          style={{ backgroundImage: `url('${imgSection}')` }}
        />
        <div className="col-span-12 sm:col-span-6 [&_.swiper-button-prev]:text-vinas-brown-2 [&_.swiper-button-next]:text-vinas-brown-2 | order-1 sm:order-2">
          <div className="mx-auto | w-full lg:w-10/12 | py-14 sm:py-16 lg:py-28 xl:py-52">
            <TitleHome title="Noticias" className="mb-8 ml-16" />
            <Carrousel
              loop={true}
              spaceBetween={30}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              slidesPerView={1}
              onSlideChange={({ realIndex }): void =>
                setImgSection(
                  pageData.Home.section.noticias[realIndex].sourceUrl
                )
              }
              className="mySwiper">
              {pageData.Home.section.noticias.map(
                ({ id, title, description, slug }) => (
                  <SwiperSlide key={id}>
                    <div className="relative | px-16">
                      <p className="text-2xl | text-vinas-brown-2 | mb-4">
                        {title}
                      </p>
                      <p className="text-lg">{description}</p>
                      <div className="mt-6">
                        <Link href={"/noticias"} className="btn-secundary">
                          LEER MÁS
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              )}
            </Carrousel>
          </div>
        </div>
      </div>
    </div>
  );
};
