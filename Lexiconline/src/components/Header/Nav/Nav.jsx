import { NavLink } from "react-router-dom";
import style from "./Nav.module.scss";

export const Nav = () => {
  return (
    <>
      <nav>
        <ul className={style.navStyling}>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "blue" } : { color: "white" }
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "blue" } : { color: "white" }
              }
              to={"/about"}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "blue" } : { color: "white" }
              }
              to={"/api"}
            >
              API
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
