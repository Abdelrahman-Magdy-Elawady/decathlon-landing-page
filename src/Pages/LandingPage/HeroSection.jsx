import { motion } from "framer-motion";
import { heroContent } from "./LandingPageContent";
import RubberWord from "../../Components/RubberWord";
import ShopComponent from "../../Components/ShopComponent.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

import { useRef } from "react";
const HeroSection = () => {
  const heroRef = useRef(null);
  useGSAP(
    () => {
      document.body.classList.toggle("overflow-hidden");
      // history.scrollRestoration = "manual";
      gsap.to(window, { scrollTo: 0 });

      gsap
        .timeline()
        .fromTo(
          ".logo",
          {
            y: "75vh",
            opacity: 0,
          },
          { y: "40vh", opacity: 1 }
        )
        .to(".logo", {
          delay: 1,
          y: 0,
        })
        .fromTo(
          ".rubber-char",
          {
            y: "120vh",
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: "back",
          },
          "<"
        )
        .fromTo(
          [".circle-man", ".sun"],
          {
            y: "120vh",
          },
          {
            y: 0,
          },
          "<"
        )
        .from(
          ".shop",
          {
            autoAlpha: 0,
            duration: 1,
            ease: "elastic",
            onComplete: () => document.body.classList.toggle("overflow-hidden"),
          },
          "<.5"
        );
    },
    {
      scope: heroRef,
    }
  );
  //-----------------------------------------------
  return (
    <div className="w-full h-screen" ref={heroRef}>
      <div className="flex justify-center items-center gap-2 sm:gap-12 w-3/4 sm:w-auto mx-auto pt-16 relative logo z-10">
        {Object.values(heroContent.header).map((imgSrc, index) => {
          return (
            <div key={index}>
              <img
                loading="lazy"
                src={imgSrc}
                className="w-full h-full object-cover object-center "
              />
            </div>
          );
        })}
      </div>

      <RubberWord className="z-10 mt-8 relative w-11/12 sm:w-3/4 mx-auto h-auto flex justify-center items-center  overflow-visible cursor-grab rubber-word ">
        {heroContent.RubberWordPaths}
      </RubberWord>

      <div className="relative z-10 mx-auto w-3/4 sm:w-1/2 -mt-4 xl:w-1/3  md:-mt-8 xl:-mt-10 circle-man">
        <img
          loading="lazy"
          src={heroContent.circleMan}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="hidden md:block absolute top-10 left-10 w-32 xl:left-20 xl:w-40 sun z-10">
        <img
          loading="lazy"
          src={heroContent.animatedSun}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 flex flex-col justify-evenly overflow-hidden  pointer-events-none items-start">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <motion.div
              key={index}
              initial={{
                x: index % 2 === 0 ? "-100%" : "100vw",
              }}
              animate={{
                x: index % 2 === 0 ? "100vw" : "-100%",
              }}
              transition={{
                repeat: Infinity,
                duration: `${25 + (index + 1) * 5}`,
              }}
              className="md:w-auto w-1/4"
            >
              <img loading="lazy" src={heroContent.cloud} />
            </motion.div>
          ))}
      </div>
      <ShopComponent className="shop" />
    </div>
  );
};

export default HeroSection;
