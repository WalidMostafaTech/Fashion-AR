import { AiOutlineSound } from "react-icons/ai";
import { PiVan } from "react-icons/pi";
import { RxTimer } from "react-icons/rx";

const Services = () => {
  const servicesList = [
    {
      icon: <PiVan />,
      title: "شحن مجاني",
      description: "شحن مجاني لجميع أنحاء العالم",
    },
    {
      icon: <RxTimer />,
      title: "خدمة 24 × 7",
      description: "خدمة عبر الإنترنت للعملاء الجدد",
    },
    {
      icon: <AiOutlineSound />,
      title: "دفع آمن",
      description: "نضمن لك حماية كاملة لمدفوعاتك",
    },
  ];
  return (
    <section className="container sectionPadding border-y border-gray-clr2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {servicesList.map((service, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-4 lg:not-last:border-e border-gray-clr2 p-6 group"
          >
            <span className="text-7xl text-main-clr group-hover:scale-120 duration-300">
              {service.icon}
            </span>
            <div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className=" text-gray-clr3">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
