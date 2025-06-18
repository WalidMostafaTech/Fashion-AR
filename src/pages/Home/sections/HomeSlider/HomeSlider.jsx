import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./HomeSlider.css";
import homeSliderImg from "../../../../assets/images/slider-img.png";

const HomeSlider = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      loop={true}
      className="homeSlider"
    >
      <SwiperSlide>
        <div className="h-[300px] xl:h-[800px]">
          <img
            loading="lazy"
            src={homeSliderImg}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[300px] xl:h-[800px]">
          <img
            loading="lazy"
            src={homeSliderImg}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSlider;
