import React, { Fragment, useState } from "react";
import sleep from "sleep-promise";
import styles from "./cardSearch.module.css"

const CardSearch = () => {
    const [cardImport, setCardImport] = useState("");
    const [cardResult, setCardResult] = useState("")
    // const [submitClicked, setSubmitClicked] = useState(false);
  
    const handleSubmit = (event) => {
      // setSubmitClicked(true);
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
    <>
        <form onSubmit={handleSubmit}>
          <div className={styles.searchBarExplain}>
          Look for a card below to use it as a template.
          </div>
          <input
            className={styles.searchBar}
            type="text"
            id="deckList"
            placeholder="Type a Card Name"
            name="deckList"
            onChange={(event) => {
              inputHandler(event.target.value);
            }}
          />{cardResult ? <ul>{cardResult}</ul> : null}
          

        </form>
      </>);
}
 
export default CardSearch;