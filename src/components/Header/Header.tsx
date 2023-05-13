import { useState } from "react";
import { phone, location, logo } from "../../assets";
import MenuButton from "../MenuButton";
import { useDetectScroll, useMatchRoute } from "../../hooks";
import { Link } from "react-router-dom";
import useNavItemSelected from "./hooks/useNavItemSelected";
import SocialMediaIcons from "../SocialMediaIcons";
import useNavItems from "./hooks/useNavItems";

const Header = () => {
  const [toggled, setToggled] = useState<boolean>(false);
  const scrolled = useDetectScroll(10);

  const onNavSelected = useNavItemSelected(setToggled);
  const navItems = useNavItems();
  const isHome = useMatchRoute("/");

  const doShrinkNav = scrolled || !isHome;

  return (
    <header className="fixed top-0 z-[1000] w-full">
      <div
        className={`px-4 transition-colors duration-500 sm:px-7 xxl:px-12 ${
          doShrinkNav || toggled ? "bg-dark" : "bg-dark/0"
        }`}
      >
        {/* Header phone number and address*/}
        <div
          className={`${
            doShrinkNav ? "hidden" : "hidden md:flex"
          } w-full justify-end pt-1`}
        >
          <div className="flex items-center pr-7">
            <img src={phone} className="mr-2 w-[1em]" />

            <a
              href="tel:1-123-555-6789"
              className="font-prompt text-sm font-medium text-accent hover:underline"
            >
              1-123-555-6789
            </a>
          </div>

          <div className="flex items-center">
            <img src={location} className="mr-2 w-[1em]" />
            <a
              href="http://maps.google.com/?q=1600 Pennsylvania Avenue NW, Washington, DC 20500"
              className="font-prompt text-sm font-medium text-accent 
                decoration-white hover:underline"
              target="_blank"
              rel="noreferrer noopener"
            >
              1600 Pennsylvania Avenue NW, Washington, DC
            </a>
          </div>
        </div>
        {/* Nav section of Header */}
        <div
          className={`${
            doShrinkNav ? "p-0" : "md:p-5 xl:p-10"
          } transition-all duration-500`}
        >
          <nav
            id="nav-header"
            className={`flex w-full
            items-center justify-between py-4 transition-all duration-500`}
          >
            <h1>
              <Link to="/" onClick={onNavSelected}>
                <img
                  src={logo}
                  alt="logo"
                  className="mr-4 w-[9rem] rounded-2xl p-4 sm:w-[12rem]"
                />
              </Link>
            </h1>

            <ul className="hidden items-end gap-14 md:flex">
              {navItems.map((item) => (
                <li
                  key={`largescreen-${item.to}`}
                  className={`font-prompt text-lg font-medium uppercase ${
                    doShrinkNav ? "text-accent" : "text-accent "
                  } hover:cursor-pointer ${
                    item.isMatch ? "underline underline-offset-4" : ""
                  }`}
                >
                  <Link to={item.to} onClick={onNavSelected}>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
            <SocialMediaIcons
              styles="text-white hidden lg:flex gap-8"
              iconStyles="w-[1.5rem] cursor-pointer"
            />
            <div className="flex md:hidden">
              <MenuButton
                toggle={toggled}
                onClick={() => setToggled((prev) => !prev)}
              />
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile nav menu */}
      <div
        className={`fixed flex h-full
          w-full justify-center bg-dark 
					transition-all duration-500 md:hidden ${
            toggled ? "translate-y-0" : "w-full translate-y-[100vh]"
          }`}
        style={{}}
      >
        <nav className="flex flex-col justify-around gap-8">
          <ul className="flex flex-col gap-5">
            {navItems.map((item) => (
              <li
                key={`mobile-${item.to}`}
                className={`pb-5 text-center text-4xl text-accent 
                ${item.isMatch ? "underline underline-offset-4" : ""}`}
              >
                <Link to={item.to} onClick={onNavSelected}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
          <SocialMediaIcons
            styles="flex gap-10 self-center"
            iconStyles="w-[2rem]"
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
