import { useEffect, useState } from "react";
import { Paper } from "../components/Main/Paper/Paper";
import { MainHeader } from "../components/Main/MainHeader/MainHeader";
import { Searchbar } from "../components/Main/Searchbar/Searchbar";
import { Wrapper } from "../components/Wrapper/Wrapper"
import { PaperHeader } from "../components/Main/Paper/PaperHeader/PaperHeader";
import { PaperBody } from "../components/Main/Paper/PaperBody/PaperBody";
import { WordNoun } from "../components/Main/Paper/PaperBody/Word/WordNoun/WordNoun";
import { WordVerb } from "../components/Main/Paper/PaperBody/Word/WordVerb/WordVerb";
import { WordInterjection } from "../components/Main/Paper/PaperBody/Word/WordInterjection/WordInterjection";

export const LandingPage = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    console.log("Landing", data);
  }, [data])

  return <>
    <Wrapper>
      <MainHeader headerText="Enter a word to search for">
        <Searchbar wordObject={setData}/>
      </MainHeader>
    </Wrapper>
    <Wrapper>
      <Paper>
        {data ? <PaperHeader word={data.word}/>: null}
        {data ? <PaperBody>
          <WordNoun word={data.meanings} headerText="Synonyms"/>
          {data.meanings[1] ? <WordVerb words={data.meanings}/> : null}
          {data.meanings[2] ? <WordInterjection word={data.meanings}/>: null}
        </PaperBody> : null}
      </Paper>
    </Wrapper>
  </>;
};
