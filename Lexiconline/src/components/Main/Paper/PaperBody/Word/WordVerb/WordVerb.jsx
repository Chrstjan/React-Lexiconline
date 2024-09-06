import style from "./WordVerb.module.scss";

export const WordVerb = ({ words }) => {
  console.log(words);
  return (
    <>
      <span className={style.verbStyling}>
        {words.partOfSpeech ? <h4>{words.partOfSpeech}:</h4> : null}
        {words.definitions.map((def, index) => {
          return (
            <>
              <p>
                {index + 1}. "{def.definition}"
              </p>
            </>
          );
        })}
      </span>
    </>
  );
};
