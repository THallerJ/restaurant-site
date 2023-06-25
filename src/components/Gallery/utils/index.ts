import { layoutType, imagePos } from "../types";

const getLayout = (index: number, layout: layoutType): string => {
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

const getImagePosition = (pos: imagePos): string => {
  switch (pos) {
    case "center":
      return "object-center";
    case "left":
      return "object-[65%]";
    case "right":
      return "object-[35%]";
    default:
      return "object-center";
  }
};

export { getLayout, getImagePosition };
