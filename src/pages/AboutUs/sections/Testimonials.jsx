import GlobalTitle from "../../../components/common/GlobalTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import testimonialImg from "../../../assets/images/person.avif";

const Testimonials = () => {
  const testimonials = Array.from({ length: 10 }, (_, index) => {
    return {
      id: index + 1,
      name: "مارك جونكو",
      desc: "كيف نشأت هذه الفكرة الخاطئة عن إدانة المتعة ومدح الألم، وسأقدم لك شرحًا كاملاً للنظام، وأوضح التعاليم الحقيقية.",
      img: testimonialImg,
      jop: "مصمم",
    };
  });
  return (
    <section className="bg-gray-100">
      <div className="container py-8">
        <GlobalTitle title={"ماذا يقول الناس"} subtitle={"أحدث الشهادات"} />

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2000 }}
          className="mySwiper"
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div>
                  <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300">
                    <img
                      src={item.img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-center mt-3 text-main-clr text-lg font-bold">
                    {item.name}
                  </h3>
                  <p className="text-center text-gray-600">{item.jop}</p>
                </div>
                <p className="flex-1">{item.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
