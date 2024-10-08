import style from "./Logo.module.scss";

export const Logo = ({ text }) => {
  return (
    <>
      <div className={style.logoContainer}>
      <span className={style.logoStyling}>
        <img src="./src/assets/images/Book.svg" alt="Logo Image" />
      </span>
      {text ? <h3>{text}</h3> : null}
      </div>
    </>
  );
};
