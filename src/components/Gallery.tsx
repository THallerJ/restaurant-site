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

const Gallery = ({ layout = "cross" }: GalleryProps) => {
  const images = [
    food1,
    food2,
    food3,
    food4,
    interior,
    open,
    dailySpecial,
    chefFire,
    food1,
    food2,
    food3,
    food4,
    interior,
    open,
    dailySpecial,
    chefFire,
  ];

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
    <div className="grid w-full grid-cols-4">
      {images.map((item, i) => (
        <div key={`${i}gallery`} className={`${getLayout(i)} relative h-96`}>
          <img
            style={{
              filter: "box-shadow: inset 0 0 8px rgba(0,0,0,.6)",
            }}
            src={item}
            className="h-full w-full object-cover hover:cursor-pointer"
          />
          <div
            className="absolute top-0 h-full w-full"
            style={{ boxShadow: "inset 5px 3px 10px 5px #000000" }}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
