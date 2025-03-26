type GreenButtonProps = {
  text: string;
  targetId: string;
  className?: string;
};

const GreenButton: React.FC<GreenButtonProps> = ({
  text,
  targetId,
  className,
}) => {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`w-fit rounded-full leading-none bg-[#B3D138]  text-[#114677] px-[24px] py-[4px]  hover:bg-[#a6c234] transition-all druation-300 text-[16px] md:text-[40px] md:rounded-[15px] md:py-[10px] ${
        className || ""
      }`}
    >
      {text}
    </button>
  );
};

export default GreenButton;
