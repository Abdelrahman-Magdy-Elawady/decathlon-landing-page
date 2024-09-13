import decathlonLogo from "../../assets/imgs/hero/logo-decathlon.svg";
import wellesLogo from "../../assets/imgs/hero/logo-yeye-weller.svg";
import cross from "../../assets/imgs/hero/cross.svg";
import star from "../../assets/imgs/star-blue.png";
import smilyBlueDuo from "../../assets/imgs/smiley-duo.png";
import bottleMan from "../../assets/imgs/bottle.gif";

import smilePurple from "../../assets/imgs/sticker-smiley-purple.png";
import findCube from "../../assets/imgs/img24.png";
import mascotMain from "../../assets/imgs/mascot-main-2.gif";
import orangeTicket from "../../assets/imgs/ticket.png";
import pinkTicket from "../../assets/imgs/ticket-bg.png";
import RubberWord from "../../Components/RubberWord";
//-------------------------------------------------------------
import img1 from "../../assets/imgs/gallery/products/img01.jpg";
import img2 from "../../assets/imgs/gallery/products/2.jpg";
import img3 from "../../assets/imgs/gallery/products/3.jpg";
import img4 from "../../assets/imgs/gallery/products/4.jpg";
import img5 from "../../assets/imgs/gallery/products/5.jpg";
import img6 from "../../assets/imgs/gallery/products/6.jpg";
import img7 from "../../assets/imgs/gallery/products/7.jpg";
import img8 from "../../assets/imgs/gallery/products/8.jpg";
import img9 from "../../assets/imgs/gallery/products/9.jpg";
//-------------------------------------------------------------
import InfinityScrollbar from "../../Components/InfinityScrollbar";
import { infinityScroll } from "./LandingPageContent";
import { Fragment } from "react";
import { motion } from "framer-motion";
//-------------------------------------------------------------
const laCollar = [
  "M 0.001 130.003 Q 0.001 134.603 2.601 138.203 Q 4.003 140.144 5.927 141.038 A 8.613 8.613 0 0 0 9.601 141.803 L 71.201 141.803 A 2.582 2.582 0 0 0 72.447 141.484 Q 75.093 140.054 76.401 132.203 Q 77.001 127.203 77.001 122.403 Q 77.001 117.603 76.401 113.003 A 46.458 46.458 0 0 0 76.221 111.887 Q 74.781 103.603 71.401 103.603 L 40.601 103.603 L 40.601 5.603 A 1.733 1.733 0 0 0 40.205 4.512 Q 38.208 1.968 26.149 1.506 A 153.552 153.552 0 0 0 20.301 1.403 A 180.589 180.589 0 0 0 18.147 1.416 Q 4.987 1.573 1.371 3.705 A 2.279 2.279 0 0 0 0.001 5.603 L 0.001 130.003 Z",
  "M 164.201 136.603 L 157.601 110.803 L 125.801 110.803 L 120.001 135.603 Q 118.925 141.162 104.345 141.737 A 90.099 90.099 0 0 1 100.801 141.803 Q 91.201 141.803 86.601 140.703 A 60.428 60.428 0 0 1 85.276 140.372 Q 82.001 139.509 82.001 139.003 L 117.401 3.603 Q 117.401 2.211 138.132 2.03 A 765.963 765.963 0 0 1 144.801 2.003 Q 172.201 2.003 172.201 3.603 L 206.801 139.203 A 0.767 0.767 0 0 1 206.345 139.797 Q 204.96 140.653 199.37 141.235 A 104.794 104.794 0 0 1 197.601 141.403 Q 188.401 142.203 183.001 142.203 Q 169.154 142.203 165.44 138.657 A 4.24 4.24 0 0 1 164.201 136.603 Z M 141.601 44.003 L 130.801 85.403 L 151.801 85.403 L 142.801 44.003 L 141.601 44.003 Z",
  "M 327.618 0.889 A 63.917 63.917 0 0 1 340.501 4.103 Q 351.601 8.203 351.601 15.203 A 23.895 23.895 0 0 1 350.975 20.406 Q 349.779 25.744 346.301 32.503 A 65.162 65.162 0 0 1 344.374 36.004 Q 340.326 42.803 337.401 42.803 A 2.273 2.273 0 0 1 336.618 42.652 Q 335.919 42.395 335.101 41.703 A 4.911 4.911 0 0 0 334.272 41.159 Q 332.663 40.288 329.101 39.303 A 43.458 43.458 0 0 0 325.767 38.513 Q 323.13 38.003 321.001 38.003 A 26.587 26.587 0 0 0 312.015 39.463 A 22.864 22.864 0 0 0 302.301 46.203 Q 297.086 52.226 295.702 62.942 A 65.399 65.399 0 0 0 295.201 71.303 A 62.182 62.182 0 0 0 295.836 80.515 Q 297.354 90.622 302.501 96.403 A 23.53 23.53 0 0 0 319.616 104.571 A 29.634 29.634 0 0 0 321.001 104.603 A 38.789 38.789 0 0 0 325.716 104.298 Q 328.031 104.014 330.571 103.465 A 65.343 65.343 0 0 0 331.301 103.303 A 30.371 30.371 0 0 0 334.246 102.485 Q 337.227 101.48 338.92 100.046 A 7.919 7.919 0 0 0 339.401 99.603 A 1.019 1.019 0 0 1 339.729 99.392 Q 340.054 99.255 340.578 99.217 A 5.935 5.935 0 0 1 341.001 99.203 Q 342.201 99.203 345.501 103.703 A 37.468 37.468 0 0 1 348.1 107.822 Q 349.249 109.914 350.33 112.391 A 74.875 74.875 0 0 1 351.601 115.503 Q 354.401 122.803 354.401 126.803 Q 354.401 134.453 342.858 139.025 A 44.341 44.341 0 0 1 342.401 139.203 Q 330.401 143.803 314.001 143.803 A 61.112 61.112 0 0 1 291.489 139.784 A 55.632 55.632 0 0 1 270.601 125.203 A 60.865 60.865 0 0 1 257.337 101.123 Q 254.542 91.75 253.838 80.497 A 124.858 124.858 0 0 1 253.601 72.703 A 106.04 106.04 0 0 1 255.669 51.11 Q 258.445 37.768 264.947 27.513 A 60.237 60.237 0 0 1 271.101 19.403 A 56.14 56.14 0 0 1 311.56 0.079 A 68.651 68.651 0 0 1 314.801 0.003 A 88.231 88.231 0 0 1 327.618 0.889 Z",
  "M 407.443 140.528 A 57.711 57.711 0 0 1 383.501 125.403 A 58.819 58.819 0 0 1 369.954 101.935 Q 367.099 92.906 366.207 82.003 A 126.349 126.349 0 0 1 365.801 71.703 A 111.244 111.244 0 0 1 367.549 51.311 Q 369.697 39.806 374.486 30.824 A 54.309 54.309 0 0 1 383.701 18.203 A 60.143 60.143 0 0 1 422.148 0.363 A 81.66 81.66 0 0 1 429.901 0.003 A 72.713 72.713 0 0 1 450.722 2.845 A 56.704 56.704 0 0 1 475.601 17.903 A 55.64 55.64 0 0 1 488.09 38.727 Q 491.121 47.424 492.282 58.1 A 129.746 129.746 0 0 1 493.001 72.103 A 117.909 117.909 0 0 1 491.432 92.017 Q 489.575 102.837 485.517 111.359 A 52.258 52.258 0 0 1 475.201 126.103 A 60.136 60.136 0 0 1 438.038 143.349 A 81.967 81.967 0 0 1 429.301 143.803 A 69.907 69.907 0 0 1 407.443 140.528 Z M 429.401 38.403 A 18.514 18.514 0 0 0 415.627 44.438 A 27.513 27.513 0 0 0 413.301 47.203 A 29.856 29.856 0 0 0 408.858 56.262 Q 407.589 60.396 407.103 65.385 A 67.315 67.315 0 0 0 406.801 71.903 Q 406.801 82.338 409.471 89.585 A 27.399 27.399 0 0 0 413.001 96.303 Q 419.201 104.803 429.301 104.803 Q 439.401 104.803 445.701 96.203 A 28.865 28.865 0 0 0 449.888 87.653 Q 451.11 83.731 451.625 78.979 A 68.519 68.519 0 0 0 452.001 71.603 A 63.34 63.34 0 0 0 451.366 62.326 Q 449.97 52.916 445.501 47.003 A 24.173 24.173 0 0 0 440.429 41.933 A 18.347 18.347 0 0 0 429.401 38.403 Z",
  "M 507.001 130.003 Q 507.001 134.603 509.601 138.203 Q 511.003 140.144 512.927 141.038 A 8.613 8.613 0 0 0 516.601 141.803 L 578.201 141.803 A 2.582 2.582 0 0 0 579.447 141.484 Q 582.093 140.054 583.401 132.203 Q 584.001 127.203 584.001 122.403 Q 584.001 117.603 583.401 113.003 A 46.458 46.458 0 0 0 583.221 111.887 Q 581.781 103.603 578.401 103.603 L 547.601 103.603 L 547.601 5.603 A 1.733 1.733 0 0 0 547.205 4.512 Q 545.208 1.968 533.149 1.506 A 153.552 153.552 0 0 0 527.301 1.403 A 180.589 180.589 0 0 0 525.147 1.416 Q 511.987 1.573 508.371 3.705 A 2.279 2.279 0 0 0 507.001 5.603 L 507.001 130.003 Z",
  "M 594.001 130.003 Q 594.001 134.603 596.601 138.203 Q 598.003 140.144 599.927 141.038 A 8.613 8.613 0 0 0 603.601 141.803 L 665.201 141.803 A 2.582 2.582 0 0 0 666.447 141.484 Q 669.093 140.054 670.401 132.203 Q 671.001 127.203 671.001 122.403 Q 671.001 117.603 670.401 113.003 A 46.458 46.458 0 0 0 670.221 111.887 Q 668.781 103.603 665.401 103.603 L 634.601 103.603 L 634.601 5.603 A 1.733 1.733 0 0 0 634.205 4.512 Q 632.208 1.968 620.149 1.506 A 153.552 153.552 0 0 0 614.301 1.403 A 180.589 180.589 0 0 0 612.147 1.416 Q 598.987 1.573 595.371 3.705 A 2.279 2.279 0 0 0 594.001 5.603 L 594.001 130.003 Z",
  "M 758.201 136.603 L 751.601 110.803 L 719.801 110.803 L 714.001 135.603 Q 712.925 141.162 698.345 141.737 A 90.099 90.099 0 0 1 694.801 141.803 Q 685.201 141.803 680.601 140.703 A 60.428 60.428 0 0 1 679.276 140.372 Q 676.001 139.509 676.001 139.003 L 711.401 3.603 Q 711.401 2.211 732.132 2.03 A 765.963 765.963 0 0 1 738.801 2.003 Q 766.201 2.003 766.201 3.603 L 800.801 139.203 A 0.767 0.767 0 0 1 800.345 139.797 Q 798.96 140.653 793.37 141.235 A 104.794 104.794 0 0 1 791.601 141.403 Q 782.401 142.203 777.001 142.203 Q 763.154 142.203 759.44 138.657 A 4.24 4.24 0 0 1 758.201 136.603 Z M 735.601 44.003 L 724.801 85.403 L 745.801 85.403 L 736.801 44.003 L 735.601 44.003 Z",
  "M 871.201 141.803 L 824.001 141.803 A 8.213 8.213 0 0 1 821.166 141.331 A 7.214 7.214 0 0 1 818.401 139.503 A 7.759 7.759 0 0 1 816.395 135.527 A 11.107 11.107 0 0 1 816.201 133.403 L 816.201 5.403 Q 816.201 3.791 816.577 2.985 A 1.67 1.67 0 0 1 816.901 2.503 A 1.731 1.731 0 0 1 817.449 2.149 Q 818.013 1.907 818.939 1.834 A 11.062 11.062 0 0 1 819.801 1.803 L 865.401 1.803 A 88.73 88.73 0 0 1 882.483 3.297 Q 912.201 9.156 912.201 38.003 A 37.875 37.875 0 0 1 909.372 52.925 Q 905.065 63.085 894.201 69.603 A 35.461 35.461 0 0 1 910.394 81.729 A 42.404 42.404 0 0 1 910.601 82.003 A 29.604 29.604 0 0 1 915.113 91.1 Q 917.201 97.847 917.201 106.903 A 35.012 35.012 0 0 1 915.237 118.879 A 30.053 30.053 0 0 1 905.301 132.403 A 39.124 39.124 0 0 1 892.917 138.829 Q 887.438 140.595 880.809 141.312 A 89.402 89.402 0 0 1 871.201 141.803 Z M 858.801 84.003 L 854.601 84.003 L 854.601 110.003 L 858.201 110.003 Q 866.17 110.003 870.19 107.255 A 10.132 10.132 0 0 0 870.801 106.803 Q 874.309 103.997 874.741 98.268 A 22.172 22.172 0 0 0 874.801 96.603 A 20.828 20.828 0 0 0 874.54 93.181 Q 874.236 91.358 873.576 89.938 A 8.155 8.155 0 0 0 871.101 86.803 Q 867.401 84.003 858.801 84.003 Z M 858.801 34.203 L 854.601 34.203 L 854.601 60.403 L 855.601 60.403 A 42.606 42.606 0 0 0 862.369 59.915 Q 874.801 57.903 874.801 47.603 Q 874.801 40.603 871.101 37.403 A 10.756 10.756 0 0 0 867.809 35.516 Q 864.782 34.38 860.25 34.227 A 42.911 42.911 0 0 0 858.801 34.203 Z",
];
import { useRef } from "react";
import Clouds from "../../Components/Clouds.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
//---------------------------------------------
export default function LaColiarSection() {
  const laCollarRef = useRef(null);
  useGSAP(
    () => {
      gsap.from(".rubber-char", {
        stagger: 0.2,
        opacity: 0.05,
        ease: "power2.inout",
        scrollTrigger: {
          trigger: ".parent",
          start: "25% center",
          end: "bottom bottom",
          scrub: 1,
        },
      });
      gsap.to(".img-1", {
        y: "-15%",
        scrollTrigger: {
          trigger: ".sec-1",
          start: "top 75%",
          end: "bottom bottom",
          scrub: 1,
        },
      });
      gsap.to(".img-2", {
        y: "-20%",
        scrollTrigger: {
          trigger: ".sec-1",
          start: "top center",
          end: "bottom bottom",
          scrub: 2,
        },
      });
      gsap.to(".img-3", {
        y: "-5%",
        scrollTrigger: {
          trigger: ".sec-2",
          start: "65% 75%",
          end: "bottom bottom",
          scrub: 1,
        },
      });
      gsap.to(".img-4", {
        y: "-15%",
        scrollTrigger: {
          trigger: ".sec-2",
          start: "25% center",
          end: "bottom bottom",
          scrub: 2,
        },
      });

      gsap.from(".img-5", {
        y: "100%",
        scrollTrigger: {
          trigger: ".sec-3",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
      gsap.from(".img-6", {
        y: "50%",
        scrollTrigger: {
          trigger: ".sec-3",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
      gsap.from(".img-7", {
        y: "25%",
        scrollTrigger: {
          trigger: ".sec-3",
          start: "center center",
          end: "bottom bottom",
          scrub: 2,
        },
      });

      gsap.to(".img-8", {
        y: "-75%",
        scrollTrigger: {
          trigger: ".sec-4",
          start: "top 75%",
          end: "bottom bottom",
          scrub: 2,
        },
      });
      gsap.to(".pinkCard", {
        rotate: 6,
        scrollTrigger: {
          trigger: ".sec-5",
          start: "center 75%",
          end: "bottom bottom",
          scrub: 1,
        },
      });
      gsap.to(".orangeCard", {
        rotate: 12,
        scrollTrigger: {
          trigger: ".sec-5",
          start: "center 75%",
          end: "bottom bottom",
          scrub: 2,
        },
      });
    },
    { scope: laCollarRef }
  );
  return (
    <div className="" ref={laCollarRef}>
      <div className="parent relative w-full h-[75vh]">
        <div className="flex justify-center items-center gap-2 sm:gap-12 w-3/4 sm:w-auto mx-auto pt-16 relative logo z-10">
          {[decathlonLogo, cross, wellesLogo].map((imgSrc, index) => {
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
        <div className="z-10 mt-8 relative w-11/12 sm:w-3/4 mx-auto h-auto flex justify-center items-center">
          <RubberWord
            className="overflow-visible cursor-grab  w-full"
            config={{
              width: "919.001",
              height: "143.807",
              viewBox: "0 0 919.001 143.807",
              style: {
                stroke: "black",
                strokeWidth: "2px",
                color: "#a564a8",
              },
            }}
          >
            {laCollar}
          </RubberWord>
          <div className="w-10 md:w-auto  absolute bottom-0 right-0 translate-x-1/4  translate-y-1/4">
            <img
              src={smilyBlueDuo}
              className="size-full object-cover object-center"
            />
          </div>
          <div className="w-10 md:w-auto absolute top-0 left-0 -translate-y-full rotate-12 md:-translate-x-full">
            <img src={star} className="size-full object-cover object-center" />
          </div>
        </div>

        <div className="relative z-10 mx-auto w-28 md:w-32 xl:w-52  -mt-8 xl:-mt-14">
          <img
            loading="lazy"
            src={bottleMan}
            className="size-full object-cover"
          />
        </div>
        <Clouds count={2} />
        {/* emojis  */}
        <div className="absolute inset-0">
          <div className="absolute -top-4 left-1/4 w-10 md:w-20">
            <img
              src={smilyBlueDuo}
              className="size-full object-cover object-center"
            />
          </div>
          <div className="w-10 md:w-20 absolute bottom-32 right-1/3 rotate-12">
            <img
              src={smilyBlueDuo}
              className="size-full object-cover object-center"
            />
          </div>
          <div className="w-10 md:w-20 absolute bottom-5 right-80 -rotate-12">
            <img src={star} className="size-full object-cover object-center" />
          </div>
        </div>
      </div>

      <div>
        <div className="mx-4 flex justify-center items-center gap-24 sec-1 relative">
          <div className="w-[30rem] -rotate-6 img-1">
            <img src={img1} className="size-full object-cover object-center" />
          </div>
          <div className="w-[25rem] rotate-6 relative img-2">
            <img src={img2} className="size-full object-cover object-center" />
          </div>
          <div className="absolute inset-0">
            <div className="w-10 md:w-20 absolute top-1/2 right-80 -rotate-12">
              <img
                src={star}
                className="size-full object-cover object-center"
              />
            </div>
            <div className="w-10 md:w-20 absolute top-1/4 left-1/4 -rotate-12">
              <img
                src={smilyBlueDuo}
                className="size-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        <div className="px-16 sm:pt-96 pt-44  sec-2 relative flex">
          <Clouds count={2} />
          <div className="w-[40rem] -rotate-1 img-3 relative ">
            <img src={img4} className="size-full object-cover object-center" />
            <div className="lg:w-64 rotate-6  img-4 absolute lg:left-full bottom-full translate-y-1/4 lg:-translate-x-1/4 left-1/2 -translate-x-1/2 w-auto">
              <img
                src={img3}
                className="size-full object-cover object-center"
              />
            </div>
          </div>

          <div className="absolute inset-0">
            <div className="w-10 md:w-20 absolute left-1/2 bottom-0 -rotate-12">
              <img
                src={star}
                className="size-full object-cover object-center"
              />
            </div>
            <div className="w-10 md:w-20 absolute top-1/4 left-1/4 -rotate-12">
              <img
                src={smilePurple}
                className="size-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        <div className="sec-3 relative flex flex-col gap-24 items-center justify-items-center">
          <Clouds count={4} />
          <div className="w-40 md:w-64 rotate-12  img-5 md:translate-x-1/2 lg:translate-x-full">
            <img src={img5} className="size-full object-cover object-center" />
          </div>
          <div className=" w-44 md:w-96  img-6  -rotate-6 md:-translate-x-1/4 lg:-translate-x-1/2 -translate-y-1/4">
            <img src={img6} className="size-full object-cover object-center" />
          </div>
          <div className="w-48 md:w-[30rem] rotate-6  img-7 lg:translate-x-1/4 -translate-y-3/4 flex-1">
            <img src={img7} className="size-full object-cover object-center" />
          </div>
        </div>

        <div className="flex flex-col gap-24 justify-center items-center sec-4">
          <div className="w-48 md:w-72 self-end lg:self-center px-4">
            <img
              src={findCube}
              className="szie-full object-cover object-center"
            />
          </div>
          <div className="relative ">
            <div className=" mx-4 md:max-w-[50rem]">
              <img
                src={img9}
                className="szie-full object-cover object-center"
              />
            </div>
            <div className="img-8 w-32 md:w-60 -rotate-6 absolute bottom-full lg:-left-20 left-8 sm:left-20  md:bottom-1/2 ">
              <img
                src={img8}
                className="szie-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16 h-screen  relative sec-5">
        <div className="absolute inset-0 flex flex-col items-center justify-center ">
          <InfinityScrollbar time={50} direction="rtl" className="rotate-6">
            <div
              className="w-full flex justify-around items-center bg-custom_blue border-y-2 border-black py-2 text-nowrap gap-4 font-extrabold 
          uppercase 
          "
              style={{
                fontSize: `calc(22px * (clamp(0,${
                  innerWidth * 1.25
                },640) / 640))`,
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
          <div className="absolute max-w-[35rem] mx-10">
            <div className="absolute bottom-3/4 left-1/2 -translate-x-1/2 z-10 w-52 md:w-96">
              <img
                loading="lazy"
                src={mascotMain}
                className="w-full h-full object-cover"
              />
            </div>
            <img
              src={pinkTicket}
              className="pinkCard size-full object-cover object-center -rotate-6"
            />
            <div className="orangeCard absolute inset-0  -rotate-6">
              <img
                src={orangeTicket}
                className="size-full object-cover object-center"
              />
            </div>
          </div>
          <InfinityScrollbar
            time={50}
            direction="rtl"
            className="absolute origin-bottom-right -rotate-6 translate-y-[200%] "
          >
            <div
              className="w-full flex justify-around items-center bg-[#a564a8] border-y-2 border-black py-2 text-nowrap gap-4 font-extrabold 
          uppercase 
          "
              style={{
                fontSize: `calc(22px * (clamp(0,${
                  innerWidth * 1.25
                },640) / 640))`,
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
        </div>
      </div>
    </div>
  );
}
