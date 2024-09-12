import HeroSection from "./HeroSection";
import InfinityScrollbar from "../../Components/InfinityScrollbar";
import { infinityScroll } from "./LandingPageContent.jsx";
import { Fragment } from "react";
import { motion } from "framer-motion";
import FestivalSection from "./FestivalSection.jsx";
import { useInnerWidth } from "../../CutomHooks/UseInnerWidth.jsx";
import Divider from "../../Components/Divider.jsx";
import ProductsSection from "./ProductsSection.jsx";
import { products } from "./LandingPageContent.jsx";
import YeyeWellesSection from "./YeyeWellesSection.jsx";

import LaColiarSection from "./LaColiarSection.jsx";

export default function LandingPage() {
  const innerWidth = useInnerWidth();

  return (
    <div className="bg-bgColor overflow-x-hidden">
      <HeroSection />
      <InfinityScrollbar time={50} direction="rtl" className="rotate-1 mt-4">
        <div
          className="w-full flex justify-around items-center bg-custom_blue border-y-2 border-black py-2 text-nowrap gap-4 font-extrabold 
          uppercase 
          "
          style={{
            fontSize: `calc(22px * (clamp(0,${innerWidth * 1.25},640) / 640))`,
          }}
        >
          {infinityScroll.sentence.map((text, index) => (
            <Fragment key={index}>
              <div>{text}</div>
              <motion.div
                animate={{
                  rotate: [180, -180],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <img loading="lazy" src={infinityScroll.emoji[index]} />
              </motion.div>
            </Fragment>
          ))}
        </div>
      </InfinityScrollbar>
      <FestivalSection />
      <Divider className="h-6  mx-4" />
      <ProductsSection products={products[0]} className="my-10" />
      <Divider className="h-6  mx-4" />
      <ProductsSection products={products[1]} />
      <YeyeWellesSection />
      <LaColiarSection />
    </div>
  );
}
