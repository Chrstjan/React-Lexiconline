import style from "./WordVerb.module.scss";

export const WordVerb = ({words}) => {
    return (
        <>
            <span className={style.verbStyling}>
                {words[1].partOfSpeech ? <h4>{words[1].partOfSpeech}:</h4> : null}
                {words[1].definitions.map((def, index) => {
                    return (
                        <>
                            <p>{def.definition}</p>
                        </>
                    )
                })}
            </span>
        </>
    )
}