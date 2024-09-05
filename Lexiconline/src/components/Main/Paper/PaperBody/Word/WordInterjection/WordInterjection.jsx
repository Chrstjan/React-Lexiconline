import style from "./WordInterjection.module.scss";

export const WordInterjection = ({word}) => {
    return (
        <>
            <span className={style.interStyling}>
                <h4>{word[2].partOfSpeech}</h4>
                {word[2].definitions.map((def, index) => {
                    return (
                        <>
                            <span>
                                <p>{index + 1}. {def.definition}</p>
                            </span>
                        </>
                    )
                })}
                <h4>Example</h4>
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
        </>
    )
}