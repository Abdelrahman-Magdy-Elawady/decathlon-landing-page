import animatedSun from "../../assets/imgs/face-2.gif";
import pattern from "../../assets/imgs/pattern.png";
import animatedCubeMan from "../../assets/imgs/speaker.gif";
import { useInnerWidth } from "../../CutomHooks/UseInnerWidth";

const PatternBlock = ({ className }) => {
  return (
    <div
      className={`w-full h-3/4 bg-custom_blue border-2 border-black ${className}`}
      style={{
        backgroundImage: `url(${pattern})`,
      }}
    ></div>
  );
};

export default function FestivalSection() {
  const innerWidth = useInnerWidth();
  return (
    <div
      className="grid grid-cols-3 grid-rows-3 md:grid-cols-5 md:grid-rows-2 uppercase  font-bold justify-items-center items-center md:gap-8 m-8"
      style={{
        fontSize: `calc(54px * (clamp(0,${innerWidth},1280) / (${
          innerWidth > 1280 ? 1280 : 1280 * 1.25
        })))`,
      }}
    >
      <span className="scale-y-[5] scale-x-[1.25]">festival</span>

      <div className="w-full md:order-4">
        <img src={animatedSun} className="object-cover object-center" />
      </div>
      <PatternBlock className="md:md:order-2" />
      <div className="w-full md:order-8">
        <img src={animatedCubeMan} className="object-cover object-center" />
      </div>
      <span className="md:order-3 scale-y-[5] scale-x-[1.25]">starter</span>
      <span className="md:order-5 scale-y-[5] scale-x-[1.25]">pack</span>
      <span className="md:order-7 scale-y-[5] scale-x-[1.25]">édition</span>
      <PatternBlock className="md:order-6" />
      <span className="md:order-9 scale-y-[5] scale-x-[1.25]">limitée</span>
      <PatternBlock className="hidden md:block md:order-10" />
    </div>
  );
}
