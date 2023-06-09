type MenuButtonProps = {
  toggle: boolean;
  onClick: () => void;
};

const MenuButton = ({ toggle, onClick }: MenuButtonProps) => {
  return (
    <button onClick={onClick} className="flex flex-col gap-[6px] p-4">
      <div
        className={`h-[3px] w-7 bg-accent transition duration-700 ${
          toggle ? "translate-y-[9px] -rotate-45" : ""
        }`}
      />
      <div
        className={`h-[3px] w-7 bg-accent transition duration-300 ${
          toggle ? "rotate-45" : ""
        }`}
      />
      <div
        className={`h-[3px] w-7 bg-accent transition duration-300 ${
          toggle ? "translate-y-[-9px] rotate-45" : ""
        }`}
      />
    </button>
  );
};

export default MenuButton;
