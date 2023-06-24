import { Modal } from "./";

type ImageModalProps = {
  showImage: boolean;
  setShowImage: React.Dispatch<React.SetStateAction<boolean>>;
  image: string;
};

const ImageModal = ({ showImage, setShowImage, image }: ImageModalProps) => {
  const content = (
    <img src={image} className="max-h-[90%] max-w-[90%] object-contain" />
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
