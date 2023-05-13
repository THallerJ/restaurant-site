import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header, Footer } from "../components";

const HeaderLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.getElementById("page-body")?.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default HeaderLayout;
