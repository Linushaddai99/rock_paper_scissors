// import React from "react";
import { useStateContext } from "../utils/useContext";
import { easeInOut, motion } from "framer-motion";

const ScoreHeader = () => {
  const contextData = useStateContext();
  const { state } = contextData;

  return (
    <div className="border-3 rounded-md border-[#606e85] p-3 flex justify-between items-center">
      <div className="flex flex-col gap-0 text-[#f2f2f2] md:text-3xl md:leading-6 leading-4 text-xl font-bold">
        <h1 className="">ROCK</h1>
        <h1 className="">PAPER</h1>
        <h1 className="">SCISSORS</h1>
        {state.level === "advanced" && <h2 className="">LIZARD</h2>}
        {state.level === "advanced" && <h2 className="">SPROCK</h2>}
      </div>
      <div className="flex flex-col items-center w-[90px] md:w-[120px] bg-[#f2f2f2] rounded-md p-2">
        <h1 className="text-[#2a46c0] text-xl font-semibold">SCORE</h1>
        <motion.h1 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ease: easeInOut, delay: .9}}
        className="text-[#606e85] text-4xl font-bold"
        >
          {state.score}
        </motion.h1>
      </div>
    </div>
  );
};

export default ScoreHeader;
