import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Nav } from "../components/Header/Nav/Nav";
import { Main } from "../components/Main/Main";
import style from "./MainLayout.module.scss";

export const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = location.pathname.slice(1);
  }, [location]);

  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};
