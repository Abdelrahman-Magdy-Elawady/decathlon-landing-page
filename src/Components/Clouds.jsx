import { motion } from "framer-motion";
import { heroContent } from "../Pages/LandingPage/LandingPageContent";
export default function Clouds({ count = 4 }) {
  return (
    <div className="absolute inset-0 flex flex-col justify-evenly overflow-hidden  pointer-events-none items-start">
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <motion.div
            key={index}
            initial={{
              x: index % 2 === 0 ? "-100%" : "100vw",
              opacity: 0.75,
            }}
            animate={{
              x: index % 2 === 0 ? "100vw" : "-100%",
              opacity: 1,
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
  );
}
