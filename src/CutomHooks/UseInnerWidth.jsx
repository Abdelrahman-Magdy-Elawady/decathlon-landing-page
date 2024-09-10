import { useEffect, useState } from "react";

export function useInnerWidth() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  useEffect(() => {
    const resizeFunc = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeFunc);
    return () => window.removeEventListener("resize", resizeFunc);
  }, []);

  return innerWidth;
}
