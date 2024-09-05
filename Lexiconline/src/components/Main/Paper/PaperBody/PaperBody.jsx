import style from "./PaperBody.module.scss";

export const PaperBody = ({children}) => {
    return (
        <>
            <div className={style.wordStyling}>
                {children}
            </div>
        </>
    )
}