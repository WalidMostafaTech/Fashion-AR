import { IoClose } from "react-icons/io5";
import { MdDelete, MdEdit } from "react-icons/md";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { cartProducts } from "../../../data/data";

const SideCart = ({ openCart, setOpenCart }) => {
  return (
    <aside
      className={`fixed z-40 top-0 end-0 w-full h-screen bg-black/30 transition-opacity duration-300 ${
        openCart ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={() => setOpenCart(false)}
    >
      <div
        className={`w-11/12 lg:w-[500px] ms-auto h-full flex flex-col bg-bg-clr duration-300 ${
          openCart
            ? "translate-x-0"
            : "ltr:translate-x-full rtl:-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-2xl">سلة التسوق {`(${3})`}</h2>
          <IoClose
            className="text-3xl cursor-pointer"
            onClick={() => setOpenCart(false)}
          />
        </div>

        <div className="h-full overflow-y-auto flex flex-col gap-2 p-4">
          <button className="text-main-clr text-lg font-bold p-2 border-2 cursor-pointer">
            افراغ السلة
          </button>

          {cartProducts.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between gap-2 border-b py-4 border-gray-200"
            >
              <div className="flex items-center gap-2">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-16 h-16"
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl">{product.title}</h3>
                  <div className="flex items-center gap-2 text-lg text-gray-500">
                    <span>{"$" + product.price}</span>
                    <span>x</span>
                    <span>{product.quantity}</span>
                  </div>
                </div>
              </div>

              <div className="text-xl grid grid-cols-2 gap-2">
                <button className="bg-gray-100 border border-gray-200 p-2 cursor-pointer grid place-content-center">
                  <MdEdit />
                </button>
                <button className="bg-gray-100 border border-gray-200 p-2 cursor-pointer grid place-content-center">
                  <MdDelete />
                </button>

                <div className="col-span-2 flex items-center gap-4 bg-gray-100 border border-gray-200 p-2">
                  <span className="cursor-pointer">
                    <FiPlus />
                  </span>
                  <span>{product.quantity}</span>
                  <span className="cursor-pointer">
                    <FiMinus />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 p-4 border-t border-gray-200">
          <div className="flex items-center justify-between text-lg font-medium">
            <span>المجموع</span>
            <span className="text-main-clr">{"$" + 600}</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link
              to="/cart"
              className="bg-main-clr text-white p-2 text-lg font-bold text-center"
            >
              عرض السلة
            </Link>
            <Link
              to="/checkout"
              className="bg-main-clr text-white p-2 text-lg font-bold text-center"
            >
              الدفع
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideCart;
