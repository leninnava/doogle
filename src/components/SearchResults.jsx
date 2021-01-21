import * as React from "react";



/* This component renders conditionally, if there's text in the
inpuf search field and when there are search results.  */

const SearchResults = (props) => {
    return (
        <ul>
         {props.children}
        </ul>
    )
}

export default SearchResults;