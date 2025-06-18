import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import logoImg1 from "../../../../assets/images/1.png";
import logoImg2 from "../../../../assets/images/2.png";
import logoImg3 from "../../../../assets/images/3.png";
import logoImg4 from "../../../../assets/images/4.png";
import logoImg5 from "../../../../assets/images/5.png";
import logoImg6 from "../../../../assets/images/6.png";

const LogoSection = () => {
  return (
    <section className="container py-12">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 2000 }}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
      >
        {Array.from(
          [
            logoImg1,
            logoImg2,
            logoImg3,
            logoImg4,
            logoImg5,
            logoImg6,
            logoImg1,
            logoImg2,
            logoImg3,
          ],
          (img, index) => (
            <SwiperSlide key={index}>
              <img loading="lazy" src={img} alt="" className="mx-auto" />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </section>
  );
};

export default LogoSection;
