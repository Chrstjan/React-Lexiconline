import { useEffect, useState } from "react";
import { Paper } from "../components/Main/Paper/Paper";
import { MainHeader } from "../components/Main/MainHeader/MainHeader";
import { Searchbar } from "../components/Main/Searchbar/Searchbar";
import { Wrapper } from "../components/Wrapper/Wrapper"
import { PaperHeader } from "../components/Main/Paper/PaperHeader/PaperHeader";

export const LandingPage = () => {
  const [word, setWord] = useState("");

  useEffect(() => {
    console.log("Landing", word);
  }, [word])

  return <>
    <Wrapper>
      <MainHeader headerText="Enter a word to search for">
        <Searchbar wordObject={setWord}/>
      </MainHeader>
    </Wrapper>
    <Wrapper>
      <Paper>
        <PaperHeader />
      </Paper>
    </Wrapper>
  </>;
};
