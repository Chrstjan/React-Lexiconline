import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { LandingPage } from "./pages/LandingPage";
import { AboutPage } from "./pages/AboutPage";
import "./App.scss";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<MainLayout />}>
            <Route index element={<LandingPage />} />
            <Route path={"/about"} element={<AboutPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
