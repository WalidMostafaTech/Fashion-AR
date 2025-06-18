import { NavLink } from "react-router-dom";
import { navLinks } from "../../../../data/data";
import SideBarContainer from "../../../modals/SideBarContainer";

const SideNav = ({ openNav, setOpenNav }) => {
  return (
    <SideBarContainer
      title={`القائمة`}
      openSideBar={openNav}
      setOpenSideBar={setOpenNav}
    >
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
    </SideBarContainer>
  );
};

export default SideNav;
