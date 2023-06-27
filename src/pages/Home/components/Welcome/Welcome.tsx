import useBackgroundImage from "./hooks/useBackgroundImage";
import ScrollButton from "./components/ScrollButton";

const Welcome = () => {
  const backgroundImage = useBackgroundImage();

  return (
    <section id="welcome" className="relative h-screen w-full overflow-hidden">
      <img
        loading="lazy"
        src={backgroundImage}
        alt="food1"
        className="breath h-full w-full object-cover brightness-[.3] 
          transition-all duration-700"
      />
      <div
        className="absolute bottom-0 left-0 z-10 flex h-full w-full 
          flex-col items-center justify-center gap-12 p-4 text-center
          text-accent lg:justify-center"
      >
        <h2
          className="w-full font-bebas text-[4rem] leading-[4rem] sm:text-[6rem] 
					 sm:leading-[5rem] md:text-[4.5rem]"
        >
          Welcome <br className="xl:hidden" />
          to <br className="xl:hidden" />
          Restaurant!
        </h2>
        <p className="w-[90%] md:w-[50%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
          cursus sit amet dictum sit amet justo donec enim.
        </p>
        <ScrollButton />
      </div>
    </section>
  );
};

export default Welcome;
