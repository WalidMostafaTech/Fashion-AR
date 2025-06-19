import { BsArrowRepeat } from "react-icons/bs";
import { FaRegEye, FaStar } from "react-icons/fa";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductItem = ({ product }) => {
  const [isTouched, setIsTouched] = useState(false);

  return (
    <div
      className={`border border-gray-clr2 p-2 space-y-1 group`}
      onMouseEnter={() => setIsTouched(true)}
      onMouseLeave={() => setIsTouched(false)}
      onFocus={() => setIsTouched(true)}
    >
      <div className="relative">
        <img loading="lazy" src={product.image} alt={product.title} />

        <div className="absolute inset-0 p-2 flex flex-col justify-between">
          <div className="space-y-2">
            <button className="bg-white text-main-clr text-xl flex items-center justify-center w-9 h-9 rounded-full cursor-pointer relative z-10">
              <FiHeart />
            </button>

            <button
              className={`bg-white text-main-clr text-xl flex items-center justify-center w-9 h-9 
              rounded-full cursor-pointer -translate-y-6 opacity-0 
              transition-all duration-500 delay-100 
              ${isTouched ? "opacity-100 translate-y-0" : ""}
              group-hover:opacity-100 group-hover:translate-y-0`}
            >
              <FiShoppingCart />
            </button>

            <Link
              to={"/product-details"}
              className={`bg-white text-main-clr text-xl flex items-center justify-center w-9 h-9 
              rounded-full cursor-pointer -translate-y-6 opacity-0 
              transition-all duration-500 delay-200 
              ${isTouched ? "opacity-100 translate-y-0" : ""}
              group-hover:opacity-100 group-hover:translate-y-0`}
            >
              <FaRegEye />
            </Link>

            <button
              className={`bg-white text-main-clr text-xl flex items-center justify-center w-9 h-9 
              rounded-full cursor-pointer -translate-y-6 opacity-0 
              transition-all duration-500 delay-300 
              ${isTouched ? "opacity-100 translate-y-0" : ""}
              group-hover:opacity-100 group-hover:translate-y-0`}
            >
              <BsArrowRepeat />
            </button>
          </div>

          <p className="flex items-center gap-2 bg-white px-2 py-1 w-fit absolute bottom-2 end-2">
            {product.rate}
            <FaStar className="text-yellow-500" />
          </p>
        </div>
      </div>

      <Link
        to={"/product-details"}
        className="text-lg lg:text-2xl font-medium line-clamp-1"
      >
        {product.title}
      </Link>
      <p className="text-gray-clr3 line-clamp-2">{product.description}</p>

      {product.offer ? (
        <div className="flex flex-wrap gap-2 text-sm lg:text-lg font-medium">
          <p>{product.price / (100 / product.offer)} $</p>
          <p className="line-through text-gray-clr3">{product.price} $</p>
          <p className="text-main-clr">خصم {product.offer} %</p>
        </div>
      ) : (
        <p className="text-lg font-medium">{product.price} $</p>
      )}
    </div>
  );
};

export default ProductItem;
