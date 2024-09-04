import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Nav } from "../components/Header/Nav/Nav";
import { HeaderCircle } from "../components/Header/HeaderCircle/HeaderCircle";
import { Logo } from "../components/Logo/Logo";
import { Main } from "../components/Main/Main";
import { Footer } from "../components/Footer/Footer";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { FooterInfo } from "../components/Footer/FooterInfo.jsx/FooterInfo";
import { Hero } from "../components/Hero/Hero";

export const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = location.pathname.slice(1);
  }, [location]);

  return (
    <>
      <Header>
        <Nav />
        <HeaderCircle>
          <Logo />
        </HeaderCircle>
      </Header>
      <Main>
        <Hero />
        <Outlet />
      </Main>
      <Footer>
        <Wrapper>
          <FooterInfo
            header="Address:"
            textOne="Somestreet 232"
            textTwo="Luxemborg"
          />
          <FooterInfo
            header="Contact:"
            textOne="Email: somemail@mail.com"
            textTwo="Phone: 44332343"
          />
          <FooterInfo
            header="With special thanks to:"
            textOne="https://dictionaryapi.dev/"
            textTwo="For the awesome API"
          />
        </Wrapper>
        <Logo text="Lexiconline" />
      </Footer>
    </>
  );
};
