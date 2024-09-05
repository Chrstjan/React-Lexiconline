import style from "./SearchButton.module.scss"

export const SearchButton = ({action, word}) => {
    return (
        <>
            <button className={style.buttonStyling} onClick={() => action(word)}>Search</button>
        </>
    )
}