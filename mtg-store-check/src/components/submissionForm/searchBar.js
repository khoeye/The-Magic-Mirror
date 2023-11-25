import React, { Fragment, useState } from "react";
import sleep from "sleep-promise";

const SearchBar = ({setResults}) => {
    const [cardImport, setCardImport] = useState("");
    const [submitClicked, setSubmitClicked] = useState(false);
  
    const handleSubmit = (event) => {
      setSubmitClicked(true);
      event.preventDefault();
    };
  
    const inputHandler = (value) => {
      setCardImport(value);
      fetchData(value);
    }
  
    const fetchData = (value) => {
      setCardImport(value);
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
          const results = json.filter((user) =>
          {return value && user && user.name && user.name.toLowerCase().includes(value)}
          ) 
          setResults(results)
        })
        .then(sleep(300))
    };

    return (
    <Fragment>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="deckList"
            name="deckList"
            onChange={(event) => {
              inputHandler(event.target.value);
            }}
          />
          <button>Submit</button>
        </form>
      </Fragment>);
}
 
export default SearchBar;