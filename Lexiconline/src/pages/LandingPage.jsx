import { useEffect, useState } from "react";
import { Paper } from "../components/Main/Paper/Paper";
import { MainHeader } from "../components/Main/MainHeader/MainHeader";
import { Searchbar } from "../components/Main/Searchbar/Searchbar";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { PaperHeader } from "../components/Main/Paper/PaperHeader/PaperHeader";
import { PaperBody } from "../components/Main/Paper/PaperBody/PaperBody";
import { Words } from "../components/Main/Paper/PaperBody/Word/Words";

export const LandingPage = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Wrapper>
        <MainHeader headerText="Enter a word to search for">
          <Searchbar wordObject={setData} />
        </MainHeader>
      </Wrapper>
      <Wrapper>
        <Paper>
          {data ? <PaperHeader word={data[0]} /> : null}
          {data ? (
            <PaperBody>
              {data && data.title != "No Definitions Found" ? (
                <Words words={data} />
              ) : null}
            </PaperBody>
          ) : null}
        </Paper>
      </Wrapper>
    </>
  );
};
