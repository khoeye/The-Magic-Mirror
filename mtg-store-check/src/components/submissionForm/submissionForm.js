import React, { useState } from "react";
import SearchBar from "./searchBar";
import SearchResults from "./searchResults";

const SubmissionForm = () => {
  const [results, setResults] = useState([])

  return (
<div>
    <SearchBar setResults={setResults} />
    <SearchResults/>
</div>
  );
};

export default SubmissionForm;
