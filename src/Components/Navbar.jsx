import { NavLink } from "react-router-dom";

const Navbar = ({ links }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {links.map((link, index) => (
          <li key={index} className="navbar-item">
            <NavLink to={link.url} className="navbar-link">
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
