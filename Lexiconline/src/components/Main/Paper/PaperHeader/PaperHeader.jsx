import style from "./PaperHeader.module.scss";

export const PaperHeader = ({word}) => {
    return (
        <>
            <header className={style.headerStyling}>
                <img src="./src/assets/images/Audio.svg" alt="Audio Logo"/>
                <h2>{word}</h2>
            </header>
        </>
    )
}