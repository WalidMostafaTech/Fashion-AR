import GlobalTitle from "../../../components/common/GlobalTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import teamImg from "../../../assets/images/person.avif";
const TeamSection = () => {
  const team = Array.from({ length: 10 }, (_, index) => {
    return {
      id: index + 1,
      name: "مارك جونكو",
      img: teamImg,
      jop: "الرئيس التنفيذي والمؤسس في الشركة",
    };
  });

  return (
    <section className="container sectionPadding">
      <GlobalTitle title={"أعضاء فريق"} />

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 2000 }}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {team.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-gray-100 space-y-2 p-2">
              <div className="overflow-hidden">
                <img
                  loading="lazy"
                  src={item.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-center text-main-clr text-lg font-bold">
                {item.name}
              </h3>
              <p className="text-center text-gray-600">{item.jop}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TeamSection;
