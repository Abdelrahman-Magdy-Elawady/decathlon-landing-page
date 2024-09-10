import classname from "classnames";
import { twMerge } from "tailwind-merge";

const Button = ({ children, className, ...rest }) => {
  const style = twMerge(
    classname(
      "p-2 px-6 border-[3px] border-black rounded-md font-extrabold text-xl uppercase",
      className
    )
  );

  return (
    <button className={style} {...rest}>
      {children}
    </button>
  );
};

export default Button;
