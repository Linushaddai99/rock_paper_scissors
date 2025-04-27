import React from "react";
import { useStateContext } from "../utils/useContext";


type FooterProp = {
  setShowRules: React.Dispatch<React.SetStateAction<boolean>>
}
const Footer: React.FC<FooterProp> = ({setShowRules}) => {
  const contextData = useStateContext();
  const dispatch = contextData.dispatch;
  const state = contextData.state;

  const setLevelAction = {
    type: "setLevel",
    payload: { level: state.level === "basic" ? "advanced" : "basic" },
  };

  const btnClass =
    "border-1 border-[#f2f2f2]  h-[50px]  w-full font-semibold border-[#606e85] cursor-pointer flex justify-center items-center gap-1";

  return (
    <div className="w-[100%] text-[#f2f2f2] flex justify-between">
      <div className={btnClass} onClick={() => setShowRules(true)}>
        <h2>RULES</h2>
      </div>

      <div className={btnClass} onClick={() => dispatch(setLevelAction)}>
        <h2>{state.level === "basic" ? "ADVANCED" : "BASIC"}</h2>
      </div>
    </div>
  );
};

export default Footer;
