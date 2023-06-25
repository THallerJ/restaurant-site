import { useState } from "react";
import { ImageModal } from "../../hocs";
import { layoutType } from "./types";
import { getLayout } from "./utils";

type GalleryProps = {
  layout?: layoutType;
  images: string[];
};

const Gallery = ({ layout = "diag-end", images }: GalleryProps) => {
  const [currImage, setCurrImage] = useState<string>("");
  const [doView, setDoView] = useState(false);

  return (
    <>
      <div className="grid w-full grid-cols-4">
        {images.map((item, i) => (
          <div
            key={`${i}gallery`}
            className={`${getLayout(i, layout)} relative h-96 overflow-hidden`}
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
