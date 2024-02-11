import React from "react"
import sleep from "sleep-promise";
import { useLocation } from "react-router-dom";
import Hero from "../hero/hero";


const CardTemplate = () => {
    const { state } = useLocation()
    console.log(state)
    // eslint-disable-next-line no-unused-vars
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
        <Hero />
        <button></button>
        </>
    )
}

export default CardTemplate