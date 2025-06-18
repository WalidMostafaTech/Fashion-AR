import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import instaImg from "../../../../assets/images/banner-img.png";
import GlobalTitle from "../../../../components/common/GlobalTitle";
import { AiFillInstagram } from "react-icons/ai";

const InstagramSection = () => {
  return (
    <section className="py-12">
      <GlobalTitle title={"#من_يرتدي_ماذا"} />

      <Swiper
        modules={[Autoplay]}
        loop={true}
        slidesPerView={2}
        autoplay={{ delay: 2000 }}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 7,
          },
        }}
      >
        {Array.from({ length: 10 }, (_, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-52 group cursor-pointer">
              <img
                loading="lazy"
                src={instaImg}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-main-clr/40 opacity-0 hover:opacity-100 transition-all duration-300">
                <AiFillInstagram className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] rotate-180 group-hover:text-7xl group-hover:rotate-0 duration-500" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default InstagramSection;
