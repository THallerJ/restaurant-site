import { useState } from "react";
import { open } from "../../../assets";
import { DailySpecialModal } from "../../../components";
import { hours } from "../../../constants";

const Hours = () => {
  const [showDialog, setShowDialog] = useState<boolean>(false);

  return (
    <section
      id="hours"
      className="flex flex-col items-center justify-center gap-10 py-12 md:flex-row md:px-12"
    >
      <div className="pair flex flex-col items-center">
        <span className="font-bebas text-5xl font-medium text-dark">Hours</span>
        <ul className="flex w-full flex-col gap-2 rounded-2xl border-2 border-dark p-4 sm:items-center md:items-start">
          {hours.map((item) => (
            <li
              key={item}
              className="mb-1 text-start text-xs font-bold text-dark sm:text-base"
            >
              {item}
            </li>
          ))}
        </ul>
        <button
          className="btn mt-4 w-full self-start"
          onClick={() => {
            setShowDialog(true);
          }}
        >
          View Daily Special
        </button>
      </div>
      <img src={open} className="pair self-center rounded-2xl lg:self-start" />
      <DailySpecialModal
        showDialog={showDialog}
        setShowDialog={setShowDialog}
      />
    </section>
  );
};
export default Hours;
