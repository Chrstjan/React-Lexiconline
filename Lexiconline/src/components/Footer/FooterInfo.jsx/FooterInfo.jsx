import style from "./FooterInfo.module.scss";

export const FooterInfo = ({ header, textOne, textTwo }) => {
  return (
    <>
      <div className={style.infoStyling}>
        <header>
          <h4>{header}</h4>
        </header>
        <p>{textOne}</p>
        <p>{textTwo}</p>
      </div>
    </>
  );
};
