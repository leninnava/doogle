import * as React from "react";

const SearchResult = (props) => {
  /* It receives a dog breed, and should be able to set the global
  dog state and stop rendering the search result list. 
  Additionally, it should be able to set the head of the page
  to the dog breed - doogle */
  return <li onClick={props.setSearch}>{props.result}</li>;
};

export default SearchResult;
