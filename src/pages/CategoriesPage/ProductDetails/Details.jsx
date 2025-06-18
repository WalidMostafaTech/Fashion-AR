import { useRef, useState } from "react";
import { IoRepeatOutline } from "react-icons/io5";
import { MdQuestionMark } from "react-icons/md";
import { PiVan } from "react-icons/pi";
import { TiArrowSortedDown } from "react-icons/ti";

const Details = () => {
  const [activeSection, setActiveSection] = useState("info");
  const descRef = useRef(null);
  const infoRef = useRef(null);

  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? "" : section));
  };

  return (
    <section className="space-y-2">
      <p className="text-sm text-gray-600">
        يُباع بسرعة! 4 أشخاص اشتروا هذا المنتج في سنة الشراء.
      </p>

      <h1 className="text-xl font-bold">طقم جيم متناسق (بني)</h1>
      <div className="flex items-center gap-2">
        <span className="text-yellow-500 font-semibold">★ ★ ★ ★ ★</span>
        <span className="text-sm text-gray-500">20 تقييم</span>
      </div>

      <p className="text-yellow-500 font-bold text-lg">
        السعر: <span className="text-black">$15.00</span>{" "}
        <span className="text-sm text-gray-500">شامل جميع الضرائب</span>
      </p>

      <div className="flex gap-2 text-sm cursor-pointer">
        <span className="flex items-center gap-1">
          <PiVan />
          التوصيل والاسترجاع
        </span>
        <span>|</span>
        <span className="flex items-center gap-1">
          <MdQuestionMark />
          اسأل سؤالاً
        </span>
      </div>

      <div>
        <h3
          onClick={() => toggleSection("desc")}
          className="cursor-pointer font-medium bg-gray-200 p-2 flex justify-between items-center"
        >
          وصف المنتج
          <TiArrowSortedDown
            className={`transform transition-transform duration-300 ${
              activeSection === "desc" ? "rotate-180" : ""
            }`}
          />
        </h3>
        <div
          ref={descRef}
          className="overflow-hidden transition-all duration-500"
          style={{
            maxHeight:
              activeSection === "desc"
                ? `${descRef.current?.scrollHeight}px`
                : "0px",
          }}
        >
          <p className="text-gray-700 mt-2 p-2">
            "طقم جيم متناسق" يقدم طقماً كاملاً للتمارين لعشاق اللياقة البدنية
            العصريين. يضم هذا الطقم المتناسق كل ما يلزم لحصة تمرين أنيقة وعملية،
            من قمصان مقاومة للرطوبة إلى ليقنز داعم، مما يضمن الراحة والأداء
            أثناء التمارين.
          </p>
        </div>
      </div>

      <div>
        <h3
          onClick={() => toggleSection("info")}
          className="cursor-pointer font-medium bg-gray-200 p-2 flex justify-between items-center"
        >
          معلومات
          <TiArrowSortedDown
            className={`transform transition-transform duration-300 ${
              activeSection === "info" ? "rotate-180" : ""
            }`}
          />
        </h3>

        <div
          ref={infoRef}
          className="overflow-hidden transition-all duration-500"
          style={{
            maxHeight:
              activeSection === "info"
                ? `${infoRef.current?.scrollHeight}px`
                : "0px",
          }}
        >
          <div className="p-2">
            <h2 className="font-medium text-lg mb-1">معلومات المنتج</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
              <li>رمز المنتج (SKU): SP18 (بني)</li>
              <li>السعر: 150 درهم</li>
              <li>الكمية المتبقية: 40 قطعة متوفرة</li>
            </ul>

            <h2 className="font-medium text-lg mb-1 mt-4">تفاصيل التوصيل</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
              <li className="flex items-center gap-1">
                <PiVan /> يتم الشحن و التسليم خلال 7 أيام.
              </li>
              <li className="flex items-center gap-1">
                <IoRepeatOutline />
                يتم استرجاع المنتج خلال 7 أيام.
              </li>
            </ul>

            <div className="p-6 border border-dashed relative mt-6">
              <h3 className="font-medium absolute -top-4 start-2 bg-white">
                دفع آمن مضمون
              </h3>
              <div className="flex flex-wrap gap-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                  alt="Visa"
                  className="h-6"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                  alt="PayPal"
                  className="h-6"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                  alt="Visa"
                  className="h-6"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                  alt="PayPal"
                  className="h-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
