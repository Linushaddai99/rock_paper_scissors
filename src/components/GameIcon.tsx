import React from "react";
import rock from "../assets/icon-rock.svg";
import paper from "../assets/icon-paper.svg";
import scissors from "../assets/icon-scissors.svg";
import lizard from "../assets/icon-lizard.svg";
import spock from "../assets/icon-spock.svg";
import { motion } from "framer-motion";
import { useStateContext } from "../utils/useContext";
import {
  getComputerChoice,
  checkBasicWinner,
  checkAdvancedWinner,
} from "../utils/rps";
import { Choice } from "../utils/type";
import useIsMdUp from "../utils/useIsMdUp";


type GameIconProps = {
  name: Choice;
};
const GameIcon: React.FC<GameIconProps> = ({ name }) => {
  const isMdUp = useIsMdUp();

  const contextData = useStateContext();
  const { dispatch, state } = contextData;

  const borderColor =
    name === "rock"
      ? "#dd405d"
      : name === "paper"
      ? "#5671f5"
      : name === "scissors"
      ? "#eca922"
      : name === "lizard"
      ? "#8c5de5"
      : name === 'spock'
      ?  "#52bed1"
      : '#141539';

  const style = {
    border: `${isMdUp ? "20px" : "15px"} solid ${borderColor}`,
    background:  "#f2f2f2",
    padding: "20px",
    boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
  };

  const icon =
    name === "rock"
      ? rock
      : name === "paper"
      ? paper
      : name === "scissors"
      ? scissors
      : name === "lizard"
      ? lizard
      : spock;

  function handlePlay() {
    const computersChoice = getComputerChoice(state.level);
    const result =
      state.level === "basic"
        ? checkBasicWinner(name, computersChoice)
        : checkAdvancedWinner(name, computersChoice);

    dispatch({
      type: "play",
      payload: {
        pChoice: name,
        cChoice: computersChoice,
        result: result,
      },
    });
  }

  return (
    <div>
      <motion.div
        className={`${
          state.playersChoice.length ? "cursor-not-allowed" : "cursor-pointer"
        } rounded-full flex justify-center items-center w-[120px] md:w-[150px] md:h-[150px] h-[120px]`}
        style={style}
        onClick={() => {
          state.playersChoice.length === 0 && handlePlay();
        }}
      >
        <img className="" src={icon} alt="" />
      </motion.div>
    </div>
  );
};

export default GameIcon;
