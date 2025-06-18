import { HiMenuAlt1 } from "react-icons/hi";
import logoImg from "../../../assets/images/header-logo.svg";
import NavBar from "./NavBar/NavBar";
import { useState } from "react";
import TopHeader from "./TopHeader";
import SearchModal from "../../modals/SearchModal";
import SideCart from "../../modals/SideCart";
import SideNav from "./NavBar/SideNav";
import HeaderRight from "./HeaderRight";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

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
            <img
              loading="lazy"
              src={logoImg}
              alt="logo"
              className="w-22 lg:w-36"
            />
          </div>

          <NavBar />

          <HeaderRight
            setOpenSearch={setOpenSearch}
            setOpenCart={setOpenCart}
          />
        </div>
      </header>

      <SideNav openNav={openNav} setOpenNav={setOpenNav} />
      <SideCart openCart={openCart} setOpenCart={setOpenCart} />
      <SearchModal openModal={openSearch} setOpenModal={setOpenSearch} />
    </>
  );
};

export default Header;
