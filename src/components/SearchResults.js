import React from "react";

const SearchResults = (props) => {
  return (
    <ul>
      {props.searchResultsData.map((dogBreed, i) => (
        <li
          key={i}
          onClick={() => {
            props.setInputValue(dogBreed);
            props.setDogBreed(dogBreed);
            props.toggleSearchResults(false);
          }}
        >
          {dogBreed}
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
