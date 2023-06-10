import { artist } from "../../../assets";
const LiveMusic = () => {
  return (
    <section
      id="music"
      className="flex flex-col-reverse items-center justify-center 
        gap-10 pb-12 md:flex-row md:px-12"
    >
      <img src={artist} className="pair rounded-3xl" />

      <p
        className="pair text-center font-bebas text-5xl 
        leading-relaxed text-dark lg:text-start"
      >
        We have <br />
        live music <br /> on Fridays <br /> and Saturdays!
      </p>
    </section>
  );
};

export default LiveMusic;
