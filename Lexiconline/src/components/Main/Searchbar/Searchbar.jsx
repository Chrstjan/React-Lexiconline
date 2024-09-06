import { useState } from "react";
import { SearchButton } from "./SearchButton/SearchButton";
import style from "./Searchbar.module.scss";

export const Searchbar = ({ wordObject }) => {
  const [searchedWord, setSearchedWord] = useState("");

  const handleUserSearch = (e) => {
    let userSearchedWord = e.target.value;
    setSearchedWord(userSearchedWord);
  };

  const getSearchedWord = async (word) => {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const res = await fetch(url);
    const data = await res.json();
    wordObject(data);
  };

  return (
    <>
      <div className={style.searchStyling}>
        <input
          onChange={(e) => handleUserSearch(e)}
          type="text"
          name="searchtext"
          placeholder="Farmer"
        />
        <SearchButton action={getSearchedWord} word={searchedWord} />
      </div>
    </>
  );
};
