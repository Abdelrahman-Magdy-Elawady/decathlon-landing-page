import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

//----------------------------------------------
const RubberChar = ({ d }) => {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isUp, setIsUp] = useState(true);

  const bouncingEffect = () => {
    console.log("start");
    controls.start({
      transform: isUp
        ? ["matrix(1,0,0,1.3,0,-75)", "matrix(1,0,0,1,0,0)"]
        : ["matrix(1,0,0,1.2,0,75)", "matrix(1,0,0,1,0,0)"],
      transition: {
        times: [0.5, 0.9],
        type: "spring",
        duration: 2,
      },
    });
    setIsPlaying(true);
  };

  return (
    <motion.path
      d={d}
      fill="black"
      transform="matrix(1,0,0,1,0,0)"
      onMouseOver={() => {
        return !isPlaying ? bouncingEffect() : null;
      }}
      animate={controls}
      onAnimationComplete={() => {
        setIsPlaying(false);
        setIsUp(!isUp);
      }}
      className="rubber-char"
    ></motion.path>
  );
};

export default RubberChar;
