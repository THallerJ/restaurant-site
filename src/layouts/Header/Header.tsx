import { useState } from "react";
import { useDetectScroll, useMatchRoute, useStateToRef } from "../../hooks";
import useNavItemSelected from "./hooks/useNavItemSelected";
import useNavItems from "./hooks/useNavItems";
import { useHeaderLayoutContext } from "../../contexts";
import useSmoothScroll from "./hooks/useSmoothScroll";
import MobileNav from "./components/MobileNav";
import Nav from "./components/Nav";
import HeaderInfo from "./components/HeaderInfo";

const Header = () => {
  const [toggled, setToggled] = useState<boolean>(false);
  const { headerLayoutRef, autoScroll } = useHeaderLayoutContext();

  const onNavSelected = useNavItemSelected(setToggled);
  const navItems = useNavItems();
  const isHome = useMatchRoute("/");

  const scrollThreshold = 10;
  const scrolled = useDetectScroll(headerLayoutRef, scrollThreshold, isHome);
  const autoScrollRef = useStateToRef(autoScroll);
  const enableSmoothScroll = scrolled && !autoScrollRef.current;
  useSmoothScroll(enableSmoothScroll, scrollThreshold);

  const doPersistNav = !isHome || scrolled;

  const getBgClass = (): string => {
    const transition = "transition-colors duration-500";

    if (toggled && doPersistNav) return "bg-dark";
    if (toggled && !doPersistNav) return `bg-dark md:bg-dark/0 ${transition}`;
    if (isHome && doPersistNav) return `bg-dark ${transition}`;
    if (isHome && !doPersistNav) return `bg-dark/0 ${transition}`;
    if (doPersistNav) return "bg-dark";

    return "bg-dark/0";
  };

  return (
    <header
      className={`${doPersistNav ? "sticky" : "fixed"} 
        pointer-events-none top-0 z-[1000] w-full`}
    >
      <div className={`px-4  sm:px-7 xxl:px-12 ${getBgClass()}`}>
        <HeaderInfo doPersistNav={doPersistNav} />
        <Nav
          toggled={toggled}
          setToggled={setToggled}
          doShrinkNav={doPersistNav}
          navItems={navItems}
          onNavSelected={onNavSelected}
        />
      </div>
      <MobileNav
        toggled={toggled}
        navItems={navItems}
        onNavSelected={onNavSelected}
      />
    </header>
  );
};

export default Header;
