import { Gallery, Divider } from "../../components";
import { food1, food2, food3, food4, interior, open } from "../../assets";

const AboutPage = () => {
  const images = [food1, food2, food3, food4, interior, open];
  return (
    <div className=" w-full bg-offwhite">
      <div className="h-[50%]">hello</div>
      <Gallery images={images} />
      <Divider />
    </div>
  );
};

export default AboutPage;
