import SocialMediaIcons from "./SocialMediaIcons";
import { hours } from "../constants";

const findContact = (styles?: string) => (
  <div
    className={`lg:flex-1 ${styles} flex flex-col items-center font-semibold text-accent lg:block`}
  >
    <span className="font-prompt text-xl uppercase">Find + Contact Us</span>
    <div className="flex flex-col">
      <a
        href="http://maps.google.com/?q=1600 Pennsylvania Avenue NW, Washington, DC 20500"
        className="text-start hover:underline"
        target="_blank"
        rel="noreferrer noopener"
      >
        1600 Pennsylvania <br className="lg:hidden" /> Avenue NW,{" "}
        <br className="lg:hidden" />
        Washington, DC
      </a>
      <a href="tel:1-123-555-6789" className="text-start hover:underline">
        1-123-555-6789
      </a>
      <a href="mailto: restaurant@email.com" className="hover:underline">
        restaurant@email.com
      </a>
    </div>
  </div>
);

const Footer = () => {
  return (
    <div className="flex w-full flex-col gap-12 bg-dark pb-4 pt-14 lg:px-40">
      {findContact("lg:hidden")}

      <div className="flex w-full flex-col gap-12 lg:flex-row">
        {/* Left side*/}
        <div className="flex flex-col items-center  lg:flex-1 lg:items-start lg:justify-end">
          <span className="font-prompt text-xl uppercase text-accent">
            Hours
          </span>
          <ul className="flex flex-col">
            {hours.map((item) => (
              <li
                key={item}
                className="text-start text-base font-semibold text-accent"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {findContact("hidden lg:block")}

        {/* Right side */}
        <div className="flex flex-col items-center lg:flex-1 lg:items-end ">
          <div className="flex flex-col gap-1">
            <span className=" text-center font-prompt text-xl uppercase text-accent lg:text-start">
              Socials
            </span>
            <SocialMediaIcons
              styles="text-white flex gap-4"
              iconStyles="w-[2rem] cursor-pointer"
            />
          </div>
        </div>
      </div>
      <p className="text-center text-base font-semibold text-accent">
        © Restaurant. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
