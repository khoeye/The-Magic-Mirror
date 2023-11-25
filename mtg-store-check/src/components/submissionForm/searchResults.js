import React, { Fragment } from "react";
import "./searchResults.css"


const SearchResults = ({results}) => {
    

    return (
        <div className="search-results">
            {results.map((result, id) => {
        return <div key={id}>{result.name}</div>
    })}
        </div>
     );
}
 
export default SearchResults;