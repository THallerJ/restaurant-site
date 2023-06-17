// TODO: pass in array of images and text overlay
import Divider from "./Divider";
import {
  food1,
  food2,
  food3,
  food4,
  interior,
  open,
  dailySpecial,
} from "../assets";

const Gallery = () => {
  const images = [food1, food2, food3, food4, interior, open, dailySpecial];

  return (
    <div className="grid w-full grid-cols-4">
      {images.map((item, i) => (
        <div
          key={`${i}gallery`}
          className={`${
            i % 2 === 0 && i !== 0 ? "col-span-2" : "col-span-1"
          } relative h-96`}
        >
          <img
            style={{
              filter: "box-shadow: inset 0 0 8px rgba(0,0,0,.6)",
            }}
            src={item}
            className="h-full w-full object-cover hover:cursor-pointer"
          />
          <div
            className="absolute top-0 h-full w-full"
            style={{ boxShadow: "inset 3px 3px 10px 0 #000000" }}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
