import InfinityScrollbar from "../../Components/InfinityScrollbar";
import { infinityScroll } from "./LandingPageContent";
import { Fragment, useRef } from "react";
import { motion } from "framer-motion";
import Divider from "../../Components/Divider";
import ButtonWithPattern from "../../Components/ButtonWithPattern";
import { videoPlayer } from "../../Helpers/videoPlayer";
//------------------------------------------------
import leftSpeaker from "../../assets/imgs/speaker.gif";
import rightSpeaker from "../../assets/imgs/speaker-reverse.gif";
import yeyeLogo from "../../assets/imgs/hero/logo-yeye-weller.svg";
import star from "../../assets/imgs/star-blue.png";
import mixedEmoji from "../../assets/imgs/stickers-about.png";
import play from "../../assets/imgs/hero/play.svg";
import playBg from "../../assets/imgs/hero/play-background.svg";
import mascot from "../../assets/imgs/mascot-video.gif";
import pattern from "../../assets/imgs/pattern.png";
import mainImg from "../../assets/imgs/yeye-weller.png";
import videoPoster from "../../assets/imgs/video-poster.jpg";
//------------------------------------------------
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

//------------------------------------------------
const YeyeWellesSection = () => {
  const yeyeRef = useRef(null);
  const videoRef = useRef(null);
  const { contextSafe } = useGSAP(
    () => {
      gsap.from(".yeye-logo", {
        scale: 0.5,
        scrollTrigger: {
          trigger: ".yeye-logo",
          start: "top 75%",
          end: "bottom bottom",
          scrub: 1,
        },
      });
      gsap.from(".main-img", {
        rotate: 0,
        scrollTrigger: {
          trigger: ".main-img",
          start: "top center",
          end: "bottom bottom",
          scrub: 1,
        },
      });
      gsap.from(".video", {
        rotate: 6,
        scrollTrigger: {
          trigger: ".video",
          start: "top center",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      gsap.from(".instagram-content", {
        xPercent: "100",
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".instagram-content",
          start: "top 80%",
          end: "bottom bottom",
          scrub: 1,
        },
      });
      gsap.to(".slice", {
        xPercent: "-100",
        stagger: 0.1,
        ease: "power3.in",
        opacity: 0,
        scrollTrigger: {
          trigger: ".window",
          start: "top 80%",
          end: "bottom bottom",
          scrub: 1,
        },
      });
    },
    { scope: yeyeRef }
  );
  //--------------------------------------------------------
  const playVideo = contextSafe(() => {
    gsap.to([".videoPoster", ".playBtn", ".mascot"], {
      scale: 1.5,
      opacity: 0,
      duration: 2,
    });
    document
      .querySelector(".video-container")
      .classList.toggle("pointer-events-none");
    videoPlayer(videoRef);
  });

  //----------------------------------------------------------
  return (
    <div className=" bg-custom_pink overflow-hidden " ref={yeyeRef}>
      <InfinityScrollbar time={50} direction="rtl">
        <div
          className="w-full flex justify-around items-center bg-[#a564a8] border-y-2 border-black py-2 text-nowrap gap-4 font-extrabold 
          "
          style={{
            fontSize: `calc(22px * (clamp(0,${innerWidth * 1.25},640) / 640))`,
          }}
        >
          {infinityScroll.sentence.map((text, index) => (
            <Fragment key={index}>
              <div className="uppercase font-bold">{text}</div>
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
      <Divider className="h-6 m-24 mx-4" />
      <div className="flex flex-col gap-16 justify-center items-center">
        <div className="flex justify-center items-center md:gap-16 gap-2 h-40">
          <div className="md:w-60 w-1/3">
            <img
              loading="lazy"
              src={leftSpeaker}
              className="size-full object-cover object-center"
            />
          </div>
          <div className="md:w-52 w-1/4 yeye-logo">
            <img
              loading="lazy"
              src={yeyeLogo}
              className="size-full object-cover object-center"
            />
          </div>
          <div className="md:w-60 w-1/3">
            <img
              loading="lazy"
              src={rightSpeaker}
              className="size-full object-cover object-center"
            />
          </div>
        </div>
        <div className="relative md:w-2/3  w-full rotate-6 main-img">
          <div>
            <img loading="lazy" src={mainImg} className="size-full " />
          </div>
          <div className="absolute bottom-0 right-1/4 translate-y-1/2 -rotate-45  w-12 ">
            <img
              loading="lazy"
              src={star}
              className="size-full object-cover object-center "
            />
          </div>
        </div>
      </div>
      <Divider className="h-6 m-24 mx-4" />

      <div className="relative instagram-section">
        <div className="flex flex-col text-center items-center gap-16 md:px-16 pb-16 instagram-content">
          <div className="order-2 md:order-1 md:w-1/3">
            <img loading="lazy" src={mixedEmoji} className="size-full" />
          </div>
          <div className="order-1 md:order-2 text-2xl md:text-3xl md:max-w-[55rem] p-4">
            Mis à l&apos;honneur pour cette collaboration estivale avec
            Decathlon, Yeye Weller, un duo d&apos;illustrateurs allemands,
            propose un art haut en couleurs avec humour.
          </div>
          <ButtonWithPattern
            config={{ pattern, patternBg: "#F03B42" }}
            className="order-3"
          >
            instagram
          </ButtonWithPattern>
        </div>
        <div className="absolute inset-0  z-10 grid window overflow-hidden pointer-events-none">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="slice bg-custom_pink shadow-black shadow-2xl"
              ></div>
            ))}
        </div>
      </div>
      <InfinityScrollbar time={50} direction="rtl">
        <div
          className="w-full flex justify-around items-center bg-[#a564a8] border-y-2 border-black py-2 text-nowrap gap-4 font-extrabold  
          "
          style={{
            fontSize: `calc(22px * (clamp(0,${innerWidth * 1.25},640) / 640))`,
          }}
        >
          {infinityScroll.sentence.map((text, index) => (
            <Fragment key={index}>
              <div className="uppercase font-bold">{text}</div>
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
      <div
        className="md:h-screen h-[80vh] bg-custom_blue grid justify-items-center items-center md:p-32 p-10 relative"
        style={{
          backgroundImage: `url(${pattern})`,
        }}
      >
        <div
          className="-rotate-3 w-full h-full border-black border-8 rounded-xl video relative hover:cursor-pointer group/videoBg video-container"
          onClick={() => playVideo()}
        >
          <iframe
            className="size-full object-cover object-center pointer-events-auto "
            src="https://www.youtube.com/embed/ob2DpxTpEyg?si=-ymAkCMb7b5n3O7X"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            ref={videoRef}
          ></iframe>

          <div className="absolute inset-0 border-black rounded-xl overflow-hidden">
            <img
              loading="lazy"
              src={videoPoster}
              className="size-full object-cover object-center group-hover/videoBg:scale-105 transition-transform duration-300 videoPoster"
            />
          </div>

          <div
            className="w-14 md:w-28 aspect-square absolute right-0 top-0  translate-x-1/2  -translate-y-1/2 flex justify-center items-center group-hover/videoBg:scale-110 transition-transform duration-300 playBtn"
            style={{
              backgroundImage: `url(${playBg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          >
            <div className="w-4 md:w-auto">
              <img
                loading="lazy"
                src={play}
                className="size-full object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div className="w-32 md:w-auto absolute bottom-0 left-0 mascot">
          <img loading="lazy" src={mascot} className="size-full " />
        </div>
      </div>
    </div>
  );
};

export default YeyeWellesSection;
