import { close } from "../assets";

type ModalProps = {
  showDialog: boolean;
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  content?: React.ReactNode;
};
const Modal = ({ showDialog, setShowDialog, title, content }: ModalProps) => {
  return showDialog ? (
    <div
      className="fixed left-0 top-0 z-[1000] h-screen w-screen bg-dark/90"
      autoFocus
      onClick={() => {
        setShowDialog(false);
      }}
    >
      <div
        className="fixed left-[50%] top-[50%] w-[80%] translate-x-[-50%] 
          translate-y-[-50%] text-[3rem] xl:w-auto"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          className="flex h-full w-full flex-row items-start
            justify-between bg-third"
        >
          <h3
            className="p-6 align-text-bottom font-bebas text-3xl
              uppercase text-dark sm:text-4xl"
          >
            {title}
          </h3>
          <button onClick={() => setShowDialog(false)}>
            <img src={close} className="mr-2 mt-2 w-[1.75rem]" />
          </button>
        </div>
        <div className="max-h-[10em] overflow-auto bg-offwhite px-6 py-4 ">
          {content}
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
