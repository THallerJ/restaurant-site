import { logo } from "../../../assets";
import { Link } from "react-router-dom";
import { navItemType } from "../types/navItemType";
import SocialMediaIcons from "../../../components/SocialMediaIcons";
import { MenuButton } from "../../../components";
import { useHeaderLayoutContext } from "../../../contexts";

type NavProps = {
  toggled: boolean;
  doShrinkNav: boolean;
  navItems: navItemType[];
  onNavSelected: () => void;
  setToggled: React.Dispatch<React.SetStateAction<boolean>>;
};
const Nav = ({
  toggled,
  doShrinkNav,
  navItems,
  onNavSelected,
  setToggled,
}: NavProps) => {
  const { headerRef } = useHeaderLayoutContext();

  return (
    <>
      {/* Nav section of Header */}
      <div
        className={`pointer-events-auto 
          ${doShrinkNav ? "p-0" : "md:p-5 xl:p-10"}`}
      >
        <nav
          className="flex w-full items-center justify-between py-4"
          ref={headerRef}
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
                } hover:cursor-pointer hover:text-fourth ${
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
            styles="hidden lg:flex gap-8"
            iconStyles="w-[1.5rem] h-[1.5rem] cursor-pointer hover:stroke-fourth"
          />
          <div className="flex md:hidden">
            <MenuButton
              toggle={toggled}
              onClick={() => setToggled((prev) => !prev)}
            />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
