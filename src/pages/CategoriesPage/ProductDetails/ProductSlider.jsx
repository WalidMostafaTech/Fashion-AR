import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import "./ProductSlider.css";
import productImg1 from "../../../assets/images/product1.png";
import productImg2 from "../../../assets/images/product2.png";
import productImg3 from "../../../assets/images/product3.png";

const ProductSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper2"
      >
        <SwiperSlide>
          <img src={productImg1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={productImg2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={productImg3} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper1"
      >
        <SwiperSlide>
          <img src={productImg1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={productImg2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={productImg3} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ProductSlider;
