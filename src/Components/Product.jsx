import Button from "./Button";
import { GoDotFill } from "react-icons/go";
export default function Product({ product }) {
  return (
    <div className=" hover:cursor-pointer flex flex-col items-center justify-center py-8 group gap-12">
      {product?.emoji && (
        <div className={`${product.styles.emoji}`}>
          <img
            loading="lazy"
            src={product.emoji}
            className="w-full h-full object-cover object-center"
          />
        </div>
      )}
      <div
        className={`isolate relative w-72 group flex justify-center items-center`}
      >
        <div
          className={`${product.styles.circle} absolute  left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square rounded-full  transition-all duration-300  ease-in-out w-0`}
        />

        <div
          className={`${product.styles.mainImgBg} transition-all duration-300  ease-in-out  group-hover:opacity-0 absolute `}
        >
          <img
            loading="lazy"
            src={product.mainImgBg}
            className="object-center object-cover "
          />
        </div>

        <div
          className={`${product.styles.mainImg}  group-hover:scale-90 transition-all duration-300 ease-in-out`}
        >
          <img
            loading="lazy"
            src={product.mainImg}
            className="object-center object-scale-down w-full h-full"
          />
        </div>

        <div
          className={`${
            product.styles.cardImgPosition === "left"
              ? "bottom-0 left-1/4 group-hover:left-0 group-hover:-rotate-12 origin-bottom-left"
              : "bottom-0 right-1/4 group-hover:right-0  group-hover:rotate-12 origin-bottom-right"
          } absolute  w-48  opacity-0 group-hover:opacity-100 transition-all duration-300  ease-in-out`}
        >
          <img
            loading="lazy"
            src={product.cardImg}
            className="object-center object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 px-8">
        <div className="font-extrabold text-2xl uppercase text-center flex items-center justify-center">
          <span> {product.name}</span>
          <GoDotFill className="flex-shrink-0" />
          <span>{product.cost}&#8364;</span>
        </div>

        <Button
          className={`${product.styles.button} transition-all duration-300 `}
        >
          shop
        </Button>
      </div>
    </div>
  );
}
