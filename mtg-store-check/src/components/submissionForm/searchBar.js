import React, { Fragment, useState, useEffect } from "react";
import sleep from "sleep-promise";

const SearchBar = ({setResults}) => {
    const [cardImport, setCardImport] = useState("");
    const [cardResult, setCardResult] = useState("")
    const [submitClicked, setSubmitClicked] = useState(false);
  
    const handleSubmit = (event) => {
      setSubmitClicked(true);
      event.preventDefault();
    };

const inputHandler = (value) => {

  getResponse(value).then(x => {
    setCardImport(x)
  })
  filterFunc(cardImport);
    }
    

const filterFunc = (Arr) => {
if (Arr.data){
  const mapArr = Arr.data.map((data, id) => <li key={id}>{data}</li> )
  setCardResult(mapArr)
}}
async function getResponse(value) {
  const url = `https://api.scryfall.com/cards/autocomplete?q=${value}`
  console.log(url)
	const response = await fetch(url);
	const data = await response.json();
  sleep(500)
  return data
}



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
          <ul>{cardResult}</ul>
          <button>Submit</button>
        </form>
      </Fragment>);
}
 
export default SearchBar;