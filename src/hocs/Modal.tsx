import { close } from "../assets";

type ModalProps = {
  showDialog: boolean;
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
  content?: React.ReactNode;
};
const Modal = ({ showDialog, setShowDialog, title, content }: ModalProps) => {
  const renderClose = (imgStyle?: string, btnStyle?: string) => (
    <button onClick={() => setShowDialog(false)} className={btnStyle}>
      <img src={close} className={imgStyle} />
    </button>
  );
  const renderHeader = (
    <>
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
        {renderClose("mr-3 mt-3 w-[1.75rem]")}
      </div>
      <div className="max-h-[10em] overflow-auto bg-offwhite px-6 py-4">
        {content}
      </div>
    </>
  );

  return showDialog ? (
    <div
      className="fixed left-0 top-0 z-[1000] h-screen w-screen bg-dark/90"
      autoFocus
      onClick={() => {
        setShowDialog(false);
      }}
    >
      {!title ? renderClose("fixed w-[3rem] right-0 top-0 bg-red-500") : null}
      <div
        className="fixed left-[50%] top-[50%] w-[80%] translate-x-[-50%] 
          translate-y-[-50%] text-[3rem] xl:w-auto"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {title ? renderHeader : content}
      </div>
    </div>
  ) : null;
};

export default Modal;
