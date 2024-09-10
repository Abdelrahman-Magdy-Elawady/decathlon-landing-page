import { useEffect, useState } from "react";

export default function InfinityScrollbar({
  children,
  time = 100,
  direction = "ltr",
  className,
}) {
  const [translateX, setTranslateX] = useState(direction === "ltr" ? -50 : 0);
  useEffect(() => {
    const ref = setInterval(() => {
      if (direction === "ltr") {
        setTranslateX((translateX) => {
          if (translateX < 0) {
            return (translateX += 0.2);
          } else {
            return -50;
          }
        });
      } else {
        setTranslateX((translateX) => {
          if (translateX > -50) {
            return (translateX -= 0.2);
          } else {
            return 0;
          }
        });
      }
    }, time);
    return () => clearInterval(ref);
  }, [time, direction]);

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div
        className="grid grid-cols-2 md:w-[250%] w-[400%]"
        style={{
          transform: `translate(${translateX}%,0%)`,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
