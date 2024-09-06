import { WordNoun } from "./WordNoun/WordNoun";
import { WordVerb } from "./WordVerb/WordVerb";

export const Words = (words) => {
  //   console.log(words.words);

  {
    words.words[1] ? console.log("Gay Object", words.words[1]) : null;
  }
  {
    words.words[2] ? console.log("Gay 2 Object", words.words[2]) : null;
  }
  return (
    <>
      <WordNoun word={words.words[0].meanings} headerText="Synonyms:" />
      {words.words[1] || words.words[2] ? (
        <WordVerb
          words={words.words[1].meanings[0] || words.words[2].meanings[0]}
        />
      ) : (
        <WordVerb
          words={words.words[0].meanings[1] || words.words[0].meanings[0]}
        />
      )}
    </>
  );
};
