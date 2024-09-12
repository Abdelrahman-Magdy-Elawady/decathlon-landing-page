import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function useGsapConfig() {
  useEffect(() => {
    ScrollTrigger.config({
      ignoreMobileResize: true,
    });
  }, []);
}
