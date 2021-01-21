import { useEffect, useState, useRef } from "react";
import * as React from "react";
import Fuse from "fuse.js";
import wiki from "wikijs";
import SearchResult from "./SearchResult";
import SearchResults from "./SearchResults";

const Search = (props) => {
  let [inputValue, setInputValue] = useState("");
  let [searchResultsData, setSearchResultsData] = useState([]);
  let [showSearchResults, toggleSearchResults] = useState(false);

  /* 1. Dog breed data (for the search library to use and put out).

     2. control whether the search results show up or not
     3. creates a functions that assigns the dog breed and takes care of the
       housekeeping. Setting the input to the dog breed, and stop showing the search results component. */

  /* Combine the logic between the two above */

  useEffect(() => {
    if (props.dogBreed == inputValue) {
      toggleSearchResults(false);
    } else {
      toggleSearchResults(true);
      search();
    }
  }, [inputValue]);

  let searchInput = useRef();

  const assignDogBreed = (e) => {
    console.log(e.target.value);
    props.dogBreed = "test";
    searchInput.current = props.dogBreed;
  };

  const search = () => {
    let fuse = new Fuse(props.dogBreedData);
    let results = fuse.search(searchInput.current);
    setSearchResultsData(results.map((item) => item.item));
  };

  const handleInput = (e) => {
    setInputValue(searchInput.current);
  };

  // render

  return (
    <>
      <form>
        <input
          ref={searchInput}
          placeholder="hello there"
          value={inputValue}
          onChange={handleInput}
        ></input>
      </form>
      {searchResultsData && (
        <SearchResults>
          {searchResultsData.map((searchResult) => (
            <SearchResult
              key={SearchResult}
              result={searchResult}
              setSearch={assignDogBreed}
            />
          ))}
        </SearchResults>
      )}
    </>
  );
};

export default Search;
