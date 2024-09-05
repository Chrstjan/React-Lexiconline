import style from "./MainHeader.module.scss";

export const MainHeader = ({headerText, children}) => {
    return (
        <>
            <div className={style.headerStyling}>
                <h2>{headerText}</h2>
                {children}
            </div>
        </>
    )
}