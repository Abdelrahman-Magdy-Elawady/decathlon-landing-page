import { heroContent } from "../Pages/LandingPage/LandingPageContent.jsx";
import Button from "./Button.jsx";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Shop = ({ className }) => {
  const shopRef = useRef(null);
  const tl = useRef(null);
  const [outOfScroll, setOutOfScroll] = useState(false);

  useGSAP(
    () => {
      tl.current = gsap.timeline({
        defaults: {
          ease: "power3.inOut",
        },
      });

      [
        ".word",
        ".pink-smile",
        ".press-play",
        ".smile-face",
        ".girl",
        ".boy",
      ].forEach((target) => {
        const tween = gsap.to(target, {
          rotate: 0,
          y: 500,
          opacity: 0,
        });
        tl.current.add(tween);
      });
      tl.current
        .add(
          gsap.to(".arrow", {
            clipPath: "polygon(0 100%, 100% 100%, 100% 25%, 0 25%)",
          })
        )
        .add(
          gsap.to(".arrow", {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
          })
        );
      ScrollTrigger.create({
        animation: tl.current,
        trigger: ".parent",
        start: "top center",
        end: "bottom bottom",
        scrub: 3,
        pin: true,
        onEnterBack: () => {
          tl.current.pause();
          setOutOfScroll(false);
        },
        onLeave: () => {
          setOutOfScroll(true);
        },
      });
    },
    { scope: shopRef }
  );
  //------------------------------------------------
  return (
    <div
      className={`fixed left-1/2 bottom-10 pb-3  -translate-x-1/2 flex flex-col justify-center items-center gap-1 md:left-auto md:right-10  md:translate-x-0 w-72 overflow-hidden z-50 pointer-events-none  rounded-xl ${
        outOfScroll && "has-[:hover]:bg-bgColor has-[:hover]:shadow-xl"
      }  ${className}`}
      ref={shopRef}
    >
      <div className="h-20"></div>
      <div className="flex gap-4 md:gap-0 parent h-[8.5rem] md:h-[11.5rem]">
        <div className=" relative -rotate-12">
          <div className="w-20 md:w-28 border-2 border-white boy">
            <img loading="lazy" src={heroContent.shop.boyImg} />
          </div>

          <div className="absolute top-0 w-8 right-0 translate-x-1/4  rotate-[35deg] -translate-y-1/2 md:translate-y-0 md:bottom-0 md:top-auto  md:w-10 md:translate-x-3/4 pink-smile">
            <img loading="lazy" src={heroContent.shop.pinkSmile} />
          </div>

          <div className="w-16 rotate-[35deg] absolute bottom-0 right-0 translate-x-1/2 translate-y-1/4 md:w-20 md:bottom-full md:translate-y-0 smile-face">
            <img loading="lazy" src={heroContent.shop.smileFace} />
          </div>

          <div className="hidden md:block w-20 -rotate-12 absolute bottom-0 right-0  -translate-y-1/4 press-play">
            <img loading="lazy" src={heroContent.shop.pressPlayImg} />
          </div>
        </div>

        <div className="w-20 md:w-28 border-2 border-white rotate-12 mt-4 -z-10  girl">
          <img loading="lazy" src={heroContent.shop.girlImg} />
        </div>
      </div>

      <div className="hidden md:block uppercase word">Nouvelle collection</div>
      <div className="relative">
        <Button
          className="mx-auto block relative w-52 bg-[#FF99C8] group hover:translate-y-2 duration-500  transition-all pointer-events-auto"
          onMouseEnter={() => {
            if (outOfScroll) {
              tl.current.timeScale(2).reverse();
            }
          }}
          onMouseLeave={() => {
            if (outOfScroll) {
              tl.current.play();
            }
          }}
        >
          shop
          <div
            className="h-4 rounded-md absolute top-full inset-x-2 border-black border-2  transition-all group-hover:h-0 group-hover:inset-x-0 group-hover:border-0 duration-500 "
            style={{
              backgroundImage: `url(${heroContent.shop.pattern})`,
              backgroundColor: "#F03B42",
            }}
          ></div>
          <div className="absolute top-0 -translate-y-full left-0 -translate-x-full p-1 arrow">
            <img loading="lazy" src={heroContent.shop.arrow} />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Shop;
