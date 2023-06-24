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
      className="h-[75%] w-auto"
      onClick={(e) => {
        e.stopPropagation();
      }}
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
