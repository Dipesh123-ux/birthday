import { useState } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

export default function ConFetti({party,setParty}) {
  const { width, height } = useWindowSize();

  const colorsConfetti = [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFEB3B",
    "#FFC107",
    "#FF9800",
    "#FF5722",
    "#795548"
  ];


   return  <Confetti
      className="confetti"
      width={width}
      height={height}
      recycle={false}
      style={{ pointerEvents: "none" }}
      numberOfPieces={party ? 800 : 0}
      colors={colorsConfetti}
      onConfettiComplete={(confetti) => {
        setParty(false);
        confetti.reset();
      }}
    />
    }