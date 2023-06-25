import { Modal } from "./";

type ImageModalProps = {
  showImage: boolean;
  setShowImage: React.Dispatch<React.SetStateAction<boolean>>;
  image: string;
};

const ImageModal = ({ showImage, setShowImage, image }: ImageModalProps) => {
  const content = (
    <img
      src={image}
      className="max-h-[95%] max-w-[95%] object-contain sm:max-h-[90%] sm:max-w-[90%]"
    />
  );

  return (
    <Modal
      showDialog={showImage}
      setShowDialog={setShowImage}
      content={content}
    />
  );
};

export default ImageModal;
