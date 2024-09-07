import { useState } from "react";
import style from "./PaperHeader.module.scss";

export const PaperHeader = ({ word }) => {
  const playWord = () => {
    new Audio(word.phonetics[1].audio || word.phonetics[5].audio).play();
  };
  return (
    <>
      <header className={style.headerStyling}>
        <img
          onClick={playWord}
          src="./src/assets/images/Audio.svg"
          alt="Audio Logo"
        />
        <h2>{word.word}</h2>
      </header>
    </>
  );
};
