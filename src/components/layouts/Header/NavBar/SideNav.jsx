import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../../../data/data";

const SideNav = ({ openNav, setOpenNav }) => {
  return (
    <aside
      className={`lg:hidden fixed z-40 top-0 start-0 w-full h-screen bg-black/30 transition-opacity duration-300 ${
        openNav ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={() => setOpenNav(false)}
    >
      <div
        className={`w-80 h-full bg-bg-clr duration-300 ${
          openNav
            ? "translate-x-0"
            : "ltr:-translate-x-full rtl:translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-2xl">القائمة</h2>
          <IoClose
            className="text-3xl cursor-pointer"
            onClick={() => setOpenNav(false)}
          />
        </div>

        <nav className="h-full flex flex-col gap-2 p-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.link}
              className="nav-link"
              onClick={() => setOpenNav(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default SideNav;
