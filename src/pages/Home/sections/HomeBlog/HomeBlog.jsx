import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import blogImg from "../../../../assets/images/slider-img.png";
import GlobalTitle from "../../../../components/common/GlobalTitle";

const HomeBlog = () => {
  return (
    <section className="container py-12">
      <GlobalTitle title={"موضة تناسبك"} subtitle={"من المدونة"} />

      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 2000 }}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {Array.from({ length: 10 }, (_, index) => (
          <SwiperSlide key={index}>
            <div className="mb-2 relative">
              <img
                loading="lazy"
                src={blogImg}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-main-clr/40 opacity-0 hover:opacity-100 transition-all duration-300" />
            </div>
            <GlobalTitle
              title={
                "الاحتفال بعيد الميلاد أثناء الحجر الصحي | في زمن كوفيد-19"
              }
              subtitle={"25 يناير 2018"}
              description={"بواسطة: جون ديو، 2 تعليق"}
              text="small"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeBlog;
