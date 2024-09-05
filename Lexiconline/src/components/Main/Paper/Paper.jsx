import style from "./Paper.module.scss";

export const Paper = ({children}) => {
    return (
        <>
            <article className={style.articleStyling}>
                {children}
            </article>
        </>
    )
}