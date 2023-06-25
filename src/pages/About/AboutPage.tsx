import { Gallery, Divider } from "../../components";
import { food1, food2, food3, food4, interior, open } from "../../assets";
import { imageType } from "../../components";

const AboutPage = () => {
  const images: imageType[] = [
    { image: food1 },
    { image: food2 },
    { image: food3 },
    { image: food4, position: "right" },
    { image: interior },
    { image: open },
  ];

  return (
    <div className=" w-full bg-offwhite">
      <div className="h-[50%]">hello</div>
      <Gallery images={images} />
      <Divider />
    </div>
  );
};

export default AboutPage;
