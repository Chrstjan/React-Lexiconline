import style from "./HeaderCircle.module.scss";

export const HeaderCircle = ({ children }) => {
  return (
    <>
      <div className={style.logoStyling}>{children}</div>
    </>
  );
};
