import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const HeaderRight = ({ setOpenSearch, setOpenCart }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <div className="flex items-center gap-4">
      <IoSearchOutline
        className="text-2xl cursor-pointer"
        onClick={() => setOpenSearch(true)}
      />

      <button
        className="relative cursor-pointer"
        onClick={() => setOpenCart(true)}
      >
        <FiShoppingCart className="text-2xl" />
        <span className="absolute -top-2 -end-2 bg-main-clr text-white w-5 h-5 flex items-center justify-center rounded-full">
          2
        </span>
      </button>

      <div className="flex md:hidden items-center gap-2 h-full relative cursor-pointer">
        <FaUser
          className={`text-xl ${
            showUserMenu ? "text-main-clr" : ""
          } duration-300`}
          onClick={() => setShowUserMenu((prev) => !prev)}
        />

        <div
          className={`absolute z-30 top-10 end-0 w-44 text-text-clr bg-bg-clr shadow-md rounded-md transition-all duration-300 ease-in-out ${
            showUserMenu
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          <Link
            to="/login"
            className="block text-lg text-center p-2 hover:text-main-clr duration-300"
          >
            تسجيل الدخول
          </Link>
          <Link
            to="/register"
            className="block text-lg text-center p-2 hover:text-main-clr duration-300"
          >
            انشاء حساب
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderRight;
