import style from "./AboutText.module.scss";

export const AboutText = ({
  headerText,
  textOne,
  textTwo,
  listTextOne,
  listTextTwo,
  listTextThree,
  footerText,
  footerLink,
}) => {
  return (
    <>
      {headerText ? (
        <header>
          <h4 className={style.headerStyling}>{headerText}</h4>
        </header>
      ) : null}
      <span className={style.textStyling}>
        {textOne ? <p>{textOne}</p> : null}
        {textTwo ? <p>{textTwo}</p> : null}
        {listTextOne ? <li>{listTextOne}</li> : null}
        {listTextTwo ? <li>{listTextTwo}</li> : null}
        {listTextThree ? <li>{listTextThree}</li> : null}
        {footerText ? (
          <p>
            {footerText}{" "}
            <span className={style.footerText}>
              <p>{footerLink}</p>
            </span>
          </p>
        ) : null}
      </span>
    </>
  );
};
