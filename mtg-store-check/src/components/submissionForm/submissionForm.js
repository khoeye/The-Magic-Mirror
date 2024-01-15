import React, { useState } from "react";
import SearchBar from "./searchBar";

const SubmissionForm = () => {
  const [results, setResults] = useState([])

  return (
<div>
    <SearchBar setResults={setResults} />
</div>
  );
};

export default SubmissionForm;
