import style from "./WordNoun.module.scss";

export const WordNoun = ({ word, headerText }) => {
  // console.log(word);
  return (
    <>
      <section className={style.wordWrapper}>
        <span>
          {word[0].partOfSpeech ? <h4>{word[0].partOfSpeech}:</h4> : null}
          {word[0].definitions.map((def, index) => {
            return (
              <>
                <p key={index}>
                  {index + 1}. {def.definition}
                </p>
              </>
            );
          })}
        </span>
        <span className={style.wordStyling}>
          {word[0].synonyms ? <h5>{headerText}</h5> : null}
          {word[0].synonyms.map((syn, index) => {
            return <>{syn ? <p key={index}>{syn}</p> : <p>Not found</p>}</>;
          })}
          {word.antonyms ? <h5>Antonyms</h5> : null}
          {word[0].antonyms.map((ant) => {
            return <>{ant ? <p key={ant}>{ant}</p> : null}</>;
          })}
        </span>
      </section>
    </>
  );
};
