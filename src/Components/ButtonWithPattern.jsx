import Button from "./Button";

const ButtonWithPattern = ({
  children,
  className,
  config: { pattern, patternBg },
}) => {
  return (
    <Button
      className={`mx-auto block relative w-52 h-14 bg-[#fcd8db] group hover:translate-y-2 duration-500  transition-all font-extrabold ${className}`}
    >
      {children}
      <div
        className="h-4 rounded-md absolute top-full inset-x-2 border-black border-2  transition-all group-hover:h-0 group-hover:inset-x-0 group-hover:border-0 duration-500 "
        style={{
          backgroundImage: `url(${pattern})`,
          backgroundColor: patternBg,
        }}
      ></div>
    </Button>
  );
};

export default ButtonWithPattern;
