import style from "./WordInterjection.module.scss";

export const WordInterjection = ({ word }) => {
  return (
    <>
      <section className={style.wordWrapper}>
        <header>
          {word.partOfSpeech ? <h4>{word.partOfSpeech}:</h4> : null}
          <p>Example:</p>
        </header>
        <div>
          <span className={style.defStyling}>
            {word.definitions.map((def, index) => {
              return (
                <>
                  <p>
                    {index + 1}. {def.definition}
                  </p>
                </>
              );
            })}
          </span>
          <span className={style.exampleStyling}>
            {word.definitions.map((def, index) => {
              return (
                <>
                  <p>
                    {index + 1}. "{def.example}"
                  </p>
                </>
              );
            })}
          </span>
        </div>
      </section>
    </>
  );
};
