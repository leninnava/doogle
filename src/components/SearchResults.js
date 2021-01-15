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
          {props.searchResultsData[1] && (
            <ul>
              {prop.searchResultsData[1].map((subBreed, i) => (
                <li
                  key={i}
                  onClick={() => {
                    props.setInputValue(dogBreed);
                    props.setDogBreed(dogBreed);
                    props.toggleSearchResults(false);
                  }}
                ></li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
