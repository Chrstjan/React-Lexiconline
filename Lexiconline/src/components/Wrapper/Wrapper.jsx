import style from "./Wrapper.module.scss";

export const Wrapper = ({ children, display }) => {
  return (
    <>
      <section className={`${style.wrapperStyling} ${style[display]}`}>{children}</section>
    </>
  );
};
