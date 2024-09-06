import style from "./WordInterjection.module.scss";

export const WordInterjection = ({word}) => {
    return (
        <>
            <section className={style.wordWrapper}>
            <span className={style.interStyling}>
                {word[2].partOfSpeech ? <h4>{word[2].partOfSpeech}:</h4>: null}
                {word[2].definitions.map((def, index) => {
                    return (
                        <>
                            <span>
                                <p>{index + 1}. {def.definition}</p>
                            </span>
                        </>
                    )
                })}
                <p>Example:</p>
                {word[2].definitions.map((def, index) => {
                    return (
                        <>
                            <span>
                                <p>{index + 1}. "{def.example}"</p> 
                            </span>
                        </>
                    )
                })}
            </span>
            </section>
        </>
    )
}