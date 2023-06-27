import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header, Footer } from "../components";
import { useHeaderLayoutContext } from "../contexts";

const HeaderLayout = () => {
  const { pathname } = useLocation();
  const { headerLayoutRef } = useHeaderLayoutContext();

  useEffect(() => {
    headerLayoutRef?.current?.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      className="relative h-full overflow-auto bg-dark"
      ref={headerLayoutRef}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HeaderLayout;
