/* eslint-disable no-unused-vars */
import React from "react"
import sleep from "sleep-promise";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Hero from "../hero/hero";
import styles from "./cardTemplate.module.css"

const CardTemplate = () => {
    const { state } = useLocation()
    const [passedHomeCard, setPassedHomeCard] = useState({
        selectedCard: "The Meep"
    })
    console.log(passedHomeCard.selectedCard)
    async function getResponse(value) {
        const url = `https://api.scryfall.com/cards/named?exact=${value}`
          const response = await fetch(url);
          const data = await response.json();
        sleep(500)
        console.log(data)
        return data
      }

    return(
        <>
       
        <div className={styles.header}>
             <Hero />
             <div className={styles.headerText}>Highlight text and select &quot;Extract&quot; for it to be added to the search.</div>
        </div>
        <div className={styles.dataContainer}>
            <div className={styles.leftContainer}></div>
            <div className={styles.rightContainer}></div>
        </div>
        <button className={styles.buttonTemp} onClick={getResponse(passedHomeCard.selectedCard)}></button>
        </>
    )
}

export default CardTemplate