import { useState } from "react";
import productImg1 from "../../assets/images/product1.png";
import productImg2 from "../../assets/images/product2.png";
import productImg3 from "../../assets/images/product3.png";

const Colors = () => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const colors = [
    { src: productImg1, alt: "أخضر" },
    { src: productImg2, alt: "أسود" },
    { src: productImg3, alt: "بيج" },
  ];

  const maxStock = 10;

  return (
    <div className="border border-gray-200 p-4 text-center space-y-4 h-fit">
      <h3 className="font-medium">اللون:</h3>

      <div className="flex justify-center gap-2">
        {colors.map((color, index) => (
          <img
            loading="lazy"
            key={index}
            src={color.src}
            alt={color.alt}
            onClick={() => setSelectedColor(index)}
            className={`w-22 h-22 border-2 p-1 rounded cursor-pointer ${
              selectedColor === index ? "border-main-clr" : "border-gray-200"
            }`}
          />
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 bg-gray-200 p-2 mx-auto w-fit">
        <button
          onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
          className="px-3 py-1 bg-white cursor-pointer text-xl"
        >
          ‹
        </button>
        <span className="w-6 text-center">{quantity}</span>
        <button
          onClick={() => setQuantity((prev) => Math.min(prev + 1, maxStock))}
          className="px-3 py-1 bg-white cursor-pointer text-xl"
        >
          ›
        </button>
      </div>

      <div className="flex justify-center gap-2">
        <button
          disabled
          className="bg-gray-200 text-gray-500 px-4 py-1 rounded line-through cursor-not-allowed"
        >
          غير متوفر
        </button>
        <button className="bg-main-clr text-white px-4 py-1 rounded line-through">
          اشترِ الآن
        </button>
      </div>

      <p>عجل بالشراء، تبقى فقط {maxStock} في المخزون</p>
      <div className="w-full h-2 rounded bg-gradient-to-l from-main-clr to-main-clr/60"></div>

      <div className="flex justify-center gap-4 text-gray-700 mt-2">
        <button className="text-base">♡ أضف إلى المفضلة</button>
        <button className="text-base">أضف للمقارنة</button>
        <button className="text-base">مشاركة ↗</button>
      </div>
    </div>
  );
};

export default Colors;
