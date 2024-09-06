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
                isActive ? { textDecoration: "underline", color: "white" } : { color: "white" }
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { textDecoration: "underline", color: "white" } : { color: "white" }
              }
              to={"/about"}
            >
              About
            </NavLink>
          </li>
          <li>
            <a href="https://dictionaryapi.dev/" target="_blank">API</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
