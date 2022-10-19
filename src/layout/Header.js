import { Outlet, NavLink } from "react-router-dom";

function Header() {
  return (
    <main>
      <header>
        <h1>Welcome to my page</h1>
        <ul>
          <NavLink
            to="/Me"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            ME
          </NavLink>
          <span>|</span>
          <NavLink
            to="/hobbies"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            HOBBIES
          </NavLink>
          <span>|</span>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            CONTACT
          </NavLink>
        </ul>
      </header>
      <Outlet />
    </main>
  );
}

export default Header;
