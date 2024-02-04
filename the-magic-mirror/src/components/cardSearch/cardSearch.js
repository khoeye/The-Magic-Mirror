import React, { Fragment, useState } from "react";
import sleep from "sleep-promise";
import styles from "./cardSearch.module.css"

const CardSearch = () => {
    const [cardImport, setCardImport] = useState("");
    const [cardResult, setCardResult] = useState("")

const inputHandler = (value) => {

  getResponse(value).then(x => {
    setCardImport(x)
  })
  filterFunc(cardImport);
    }
    

const filterFunc = async (Arr) => {
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
        <form>
          <div className={styles.searchBarContainer}>
          <input
            className={styles.searchBar}
            type="text"
            id="deckList"
            placeholder="Type a Card Name"
            name="deckList"
            onChange={(event) => {
              inputHandler(event.target.value);
            }}
          />{cardResult.length > 0 ? <ul>{cardResult}</ul> : null}
          </div>

        </form>
      </>);
}
 
export default CardSearch;