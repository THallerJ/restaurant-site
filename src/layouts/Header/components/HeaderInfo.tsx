import { phone, location } from "../../../assets";

type HeaderInfo = {
  doPersistNav: boolean;
};

const HeaderInfo = ({ doPersistNav }: HeaderInfo) => {
  return (
    <div
      className={`pointer-events-auto w-full justify-end pt-1 
        ${doPersistNav ? "hidden" : "hidden md:flex"}`}
    >
      <div className="flex items-center pr-7">
        <img src={phone} className="mr-2 w-[1em]" />

        <a
          href="tel:1-123-555-6789"
          className="font-prompt text-sm font-medium text-accent 
            hover:text-fourth hover:underline"
        >
          1-123-555-6789
        </a>
      </div>

      <div className="flex items-center">
        <img src={location} className="mr-2 w-[1em]" />
        <a
          href="http://maps.google.com/?q=1600 Pennsylvania Avenue NW, Washington, DC 20500"
          className="font-prompt text-sm font-medium text-accent
          hover:text-fourth hover:underline"
          target="_blank"
          rel="noreferrer noopener"
        >
          1600 Pennsylvania Avenue NW, Washington, DC
        </a>
      </div>
    </div>
  );
};

export default HeaderInfo;
