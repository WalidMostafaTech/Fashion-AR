import { HiMenuAlt1 } from "react-icons/hi";
import logoImg from "../../../assets/images/header-logo.svg";
import NavBar from "./NavBar/NavBar";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import SideNav from "./NavBar/SideNav";
import { useState } from "react";
import TopHeader from "./TopHeader";
import SideCart from "./SideCart";
import SearchModal from "../../modals/SearchModal";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <>
      <header>
        <TopHeader />

        <div className="container h-16 lg:h-26 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <HiMenuAlt1
              className="text-3xl text-main-clr cursor-pointer lg:hidden"
              onClick={() => setOpenNav(true)}
            />
            <img src={logoImg} alt="logo" className="w-22 lg:w-36" />
          </div>

          <NavBar />

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
                  className="block text-lg p-2 hover:text-main-clr duration-300"
                >
                  تسجيل الدخول
                </Link>
                <Link
                  to="/register"
                  className="block text-lg p-2 hover:text-main-clr duration-300"
                >
                  انشاء حساب
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <SideNav openNav={openNav} setOpenNav={setOpenNav} />
      <SideCart openCart={openCart} setOpenCart={setOpenCart} />
      <SearchModal openModal={openSearch} setOpenModal={setOpenSearch} />
    </>
  );
};

export default Header;
