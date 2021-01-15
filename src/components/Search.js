import React, { useEffect, useState } from "react";
import Fuse from "fuse.js";
import wiki from "wikijs";
import SearchResults from "./SearchResults";

const Search = (props) => {
  let [inputValue, setInputValue] = useState("");
  let [searchResultsData, setSearchResultsData] = useState({});
  let [showSearchResults, toggleSearchResults] = useState(false);

  useEffect(() => {
    if (props.dogBreed == inputValue) {
      toggleSearchResults(false);
    } else {
      toggleSearchResults(true);
      search();
    }
  }, [inputValue]);

  const search = () => {
    const options = {
      includeScore: true,
      keys: ["."],
    };
    let fuse = new Fuse(props.dogBreedList, options);
    console.log(fuse);
    let results = fuse.search(inputValue);
    console.log(results);
    setSearchResultsData(results.map((item) => item.item));
  };

  const handleInput = (e) => {
    setInputValue(e.target.value.trim());
  };

  const submitDogBreed = (e) => {
    e.preventDefault();
    props.setDogBreed("Placeholder");
  };

  // render

  return (
    <React.Fragment>
      <form onSubmit={submitDogBreed}>
        <input
          type="text"
          placeholder="hello there"
          value={inputValue}
          onChange={handleInput}
        ></input>
      </form>
      {showSearchResults && (
        <SearchResults
          searchResultsData={searchResultsData}
          setDogBreed={props.setDogBreed}
          setInputValue={setInputValue}
          toggleSearchResults={toggleSearchResults}
        />
      )}
    </React.Fragment>
  );
};

export default Search;
