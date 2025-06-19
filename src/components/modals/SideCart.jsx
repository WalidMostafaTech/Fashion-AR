import { MdDelete, MdEdit } from "react-icons/md";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { cartProducts } from "../../data/data";
import SideBarContainer from "./SideBarContainer";

const SideCart = ({ openCart, setOpenCart }) => {
  return (
    <SideBarContainer
      title={`سلة التسوق (${3})`}
      openSideBar={openCart}
      setOpenSideBar={setOpenCart}
      dir="end"
    >
      <div className="h-full overflow-y-auto flex flex-col gap-2 p-4">
        <button className="text-main-clr text-lg font-bold p-2 border-2 cursor-pointer">
          افراغ السلة
        </button>

        {cartProducts.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between gap-2 border-b py-4 border-gray-clr2"
          >
            <div className="flex items-center gap-2">
              <img
                loading="lazy"
                src={product.image}
                alt={product.title}
                className="w-16 h-16"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-xl">{product.title}</h3>
                <div className="flex items-center gap-2 text-lg text-gray-clr3">
                  <span>{"$" + product.price}</span>
                  <span>x</span>
                  <span>{product.quantity}</span>
                </div>
              </div>
            </div>

            <div className="text-xl grid grid-cols-2 gap-2">
              <button className="bg-gray-clr border border-gray-clr2 p-2 cursor-pointer grid place-content-center">
                <MdEdit />
              </button>
              <button className="bg-gray-clr border border-gray-clr2 p-2 cursor-pointer grid place-content-center">
                <MdDelete />
              </button>

              <div className="col-span-2 flex items-center gap-4 bg-gray-clr border border-gray-clr2 p-2">
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

      <div className="flex flex-col gap-2 p-4 border-t border-gray-clr2">
        <div className="flex items-center justify-between text-lg font-medium">
          <span>المجموع</span>
          <span className="text-main-clr">{"$" + 600}</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Link
            to="/cart"
            className="mainBtn"
            onClick={() => setOpenCart(false)}
          >
            عرض السلة
          </Link>
          <Link
            to="/checkout"
            className="mainBtn"
            onClick={() => setOpenCart(false)}
          >
            الدفع
          </Link>
        </div>
      </div>
    </SideBarContainer>
  );
};

export default SideCart;
