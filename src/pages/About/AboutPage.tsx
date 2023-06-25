import { Gallery, Divider } from "../../components";
import { chefFire, barStaff, kitchenStaff } from "../../assets";
import { imageType } from "../../components";

const AboutPage = () => {
  const images: imageType[] = [
    { image: chefFire },
    { image: barStaff, position: "right" },
    { image: kitchenStaff },
  ];

  return (
    <div className=" w-full bg-offwhite">
      <div className="h-[50%]">hello</div>
      <Gallery images={images} layout="start" />
      <Divider />
    </div>
  );
};

export default AboutPage;
