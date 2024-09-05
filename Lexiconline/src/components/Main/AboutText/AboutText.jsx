import style from "./AboutText.module.scss";

export const AboutText = ({ headerText, textOne, textTwo }) => {
  return (
    <>
      <header>
        <h3>{headerText}</h3>
      </header>
      <span>
        <p>{textOne}</p>
        <p>{textTwo}</p>
      </span>
    </>
  );
};
