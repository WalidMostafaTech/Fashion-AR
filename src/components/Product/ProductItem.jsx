import { BsArrowRepeat } from "react-icons/bs";
import { FaRegEye, FaStar } from "react-icons/fa";
import { FiHeart, FiShoppingCart } from "react-icons/fi";

const ProductItem = ({ product }) => {
  return (
    <div className="border border-gray-200 p-2 space-y-2 group">
      <div className="relative">
        <img src={product.image} alt={product.title} />

        <div className="absolute inset-0 p-2 flex flex-col justify-between">
          <div className="space-y-2">
            <button
              className="bg-white text-main-clr text-lg lg:text-xl flex items-center justify-center w-8 h-8 
            rounded-full cursor-pointer relative z-10"
            >
              <FiHeart />
            </button>
            <button
              className="bg-white text-main-clr text-lg lg:text-xl flex items-center justify-center w-8 h-8 
                    rounded-full cursor-pointer -translate-y-6
                    opacity-0 group-hover:opacity-100 group-hover:-translate-y-0 
                    transition-all duration-500 delay-100"
            >
              <FiShoppingCart />
            </button>
            <button
              className="bg-white text-main-clr text-lg lg:text-xl flex items-center justify-center w-8 h-8 
                    rounded-full cursor-pointer -translate-y-6
                    opacity-0 group-hover:opacity-100 group-hover:-translate-y-0 
                    transition-all duration-500 delay-200"
            >
              <FaRegEye />
            </button>
            <button
              className="bg-white text-main-clr text-lg lg:text-xl flex items-center justify-center w-8 h-8 
                    rounded-full cursor-pointer -translate-y-6
                    opacity-0 group-hover:opacity-100 group-hover:-translate-y-0 
                    transition-all duration-500 delay-300"
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

      <h3 className="text-lg lg:text-2xl font-medium line-clamp-1">
        {product.title}
      </h3>
      <p className="text-gray-600 line-clamp-2">{product.description}</p>

      {product.offer ? (
        <div className="flex flex-wrap gap-2 text-sm lg:text-lg font-medium">
          <p>{product.price / (100 / product.offer)} $</p>
          <p className="line-through text-gray-600">{product.price} $</p>
          <p className="text-main-clr">خصم {product.offer} %</p>
        </div>
      ) : (
        <p className="text-lg font-medium">{product.price} $</p>
      )}
    </div>
  );
};

export default ProductItem;
