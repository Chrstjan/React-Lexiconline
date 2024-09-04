import { NavLink } from "react-router-dom";
import style from "./Nav.module.scss";

export const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "blue" } : { color: "black" }
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "blue" } : { color: "black" }
              }
              to={"/about"}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
