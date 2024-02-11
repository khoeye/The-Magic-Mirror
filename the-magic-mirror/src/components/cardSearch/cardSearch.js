import React, { Fragment, useState } from "react";
import sleep from "sleep-promise";
import styles from "./cardSearch.module.css"
import { useNavigate } from "react-router-dom";

const CardSearch = () => {
    const [cardImport, setCardImport] = useState("");
    const [cardResult, setCardResult] = useState("")

const inputHandler = (value) => {
  getResponse(value.toLowerCase()).then(x => {
    setCardImport(x)
  })
  filterFunc(cardImport);
    }
    
 const navigate = useNavigate()
const filterFunc = async (Arr) => {
if (Arr.data){
  const mapArr = Arr.data.map((data, id) => <li key={id} onClick={(event) => cardResultHandler(event)}>{data}</li> )
  setCardResult(mapArr)
}}

const cardResultHandler = async (event) => {
  navigate('/template', {state: {selectedCard: event.target.textContent}})
}

async function getResponse(value) {
  const url = `https://api.scryfall.com/cards/autocomplete?q=${value}`
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
            autoComplete="off"
            onChange={(event) => {
              inputHandler(event.target.value);
            }}
          />{cardResult.length > 0 ? <ul>{cardResult}</ul> : null}
          </div>

        </form>
      </>);
}
 
export default CardSearch;