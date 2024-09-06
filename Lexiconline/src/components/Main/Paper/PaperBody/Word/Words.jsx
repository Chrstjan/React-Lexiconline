import { WordNoun } from "./WordNoun/WordNoun";
import { WordVerb } from "./WordVerb/WordVerb";
import { WordInterjection } from "./WordInterjection/WordInterjection";

export const Words = (words) => {
  //   console.log(words.words);

  {
    words.words[1] ? console.log("Stupid Object", words.words[1]) : null;
  }
  {
    words.words[2] ? console.log("Stupid Object 2", words.words[2]) : null;
  }
  /* 
  Da det array man får tilbage er mega forvirrende
  har jeg lavet noget kode der checker om noun, verbs og interjections ligger i samme object
  eller i tre forskellige data objecter,
  og sender det rigtige object videre til det tilsvarende component :).

  */
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
      {words.words[0].meanings[2] || words.words[1].meanings[2] ? (
        <WordInterjection
          word={words.words[0].meanings[2] || words.words[1].meanings[2]}
        />
      ) : null}
    </>
  );
};
