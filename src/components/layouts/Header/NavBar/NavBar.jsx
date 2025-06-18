import { NavLink } from "react-router-dom";
import { navLinks } from "../../../../data/data";

const NavBar = () => {
  return (
    <nav className="hidden lg:flex items-center gap-10">
      {navLinks.map((link) => (
        <NavLink key={link.name} to={link.link} className="nav-link">
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
