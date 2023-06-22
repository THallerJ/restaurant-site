import { useState } from "react";
import { ImageModal } from "../hocs";
import {
  food1,
  food2,
  food3,
  food4,
  interior,
  open,
  dailySpecial,
  chefFire,
} from "../assets";

type layout =
  | "small" // each image span-1
  | "start" // first image in row span-2
  | "middle" // second image in row span-2
  | "end" // final image in row span-2
  | "diag-start" // images along diagnol span-2
  | "diag-end" // images along reverse diagnol span-2
  | "cross" // images along cross pattern span-2
  | "wide"; // all images span-2

type GalleryProps = {
  layout?: layout;
};

const Gallery = ({ layout = "diag-end" }: GalleryProps) => {
  const images = [food1, food2, food3, food4, interior, open];
  const [currImage, setCurrImage] = useState<string>("");
  const [doView, setDoView] = useState(false);

  const getLayout = (index: number): string => {
    const i = index % 9;

    switch (layout) {
      case "small":
        return "col-span-1";
      case "wide":
        return "col-span-2";
      case "start": {
        if (i % 3 === 0) return "col-span-2";
        return "col-span-1";
      }
      case "middle": {
        if ((i - 1) % 3 === 0) return "col-span-2";
        return "col-span-1";
      }
      case "end": {
        if ((i + 1) % 3 === 0) return "col-span-2";
        return "col-span-1";
      }
      case "diag-start": {
        if (i % 4 == 0) return "col-span-2";
        return "col-span-1";
      }
      case "diag-end": {
        if (i % 2 === 0 && i !== 0 && i !== 8) return "col-span-2";
        return "col-span-1";
      }
      case "cross": {
        if (i === 0 || i === 5 || i === 6) return "col-span-2";
        return "col-span-1";
      }
      default:
        return "";
    }
  };

  return (
    <>
      <div className="grid w-full grid-cols-4">
        {images.map((item, i) => (
          <div
            key={`${i}gallery`}
            className={`${getLayout(i)} relative h-96 overflow-hidden`}
          >
            <div
              className="peer absolute top-0 z-10 h-full w-full hover:cursor-pointer"
              style={{ boxShadow: "inset 5px 3px 10px 5px #000000" }}
              onClick={() => {
                setCurrImage(item);

                setDoView(true);
              }}
            />
            <img
              className="h-full w-full object-cover peer-hover:scale-125"
              style={{
                filter: "box-shadow: inset 0 0 8px rgba(0,0,0,.6)",
              }}
              src={item}
            />
          </div>
        ))}
      </div>
      <ImageModal
        showImage={doView}
        setShowImage={setDoView}
        image={currImage}
      />
    </>
  );
};

export default Gallery;
