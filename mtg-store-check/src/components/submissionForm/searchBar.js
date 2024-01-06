import React, { Fragment, useState, useEffect } from "react";
import sleep from "sleep-promise";
import axios from "axios";

const SearchBar = ({setResults}) => {
    const [cardImport, setCardImport] = useState("");
    const [submitClicked, setSubmitClicked] = useState(false);
  
    const handleSubmit = (event) => {
      setSubmitClicked(true);
      event.preventDefault();
    };

    const inputHandler = (value) => {
      const params = {
        q: value,
    };
    console.log(getData(value))
      setCardImport(value);
      // fetchData(value);
    }

async function getData(value) {
  
  const response = await fetch('https://api.scryfall.com/cards/search?' + new URLSearchParams({
    q: value.toString(),
}))
sleep(2000)
return response.json(); // parses JSON response into native JavaScript objects
  
};


    // const fetchData = (value) => {
    //   setCardImport(value);
    //   axios.get('https://api.scryfall.com/cards/search', {
    //     params: {
    //       q: cardImport
    //     }
    //   }, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json',
    //       'Host': 'http://localhost:3000/'
    //     }
    // })
    //     .then((response) => response.json())
    //     .then((json) => {
    //       const results = json.data((name) =>
    //       {return results}
    //       ) 
    //       setResults(results)
    //     })
    //     .then(sleep(300))
    // };

    // async function logMovies() {
    //   const response = await fetch("https://api.scryfall.com/cards/search?q=magic");
    //   const movies = await response.json();
    //   console.log(movies);
    // }
    

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