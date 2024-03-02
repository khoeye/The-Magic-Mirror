/* eslint-disable no-unused-vars */
import React from "react";
import sleep from "sleep-promise";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Hero from "../hero/hero";
import styles from "./cardTemplate.module.css";
import CardDetailsObject from "./cardDetailsObject";
import { parseSpaceFunction } from "./helper/textFormater";

const CardTemplate = () => {
  const { state } = useLocation();
  const [passedHomeCard, setPassedHomeCard] = useState({
    selectedCard: "The Meep",
  });
  const [cardDetails, setCardDetails] = useState(CardDetailsObject);
  console.log(passedHomeCard.selectedCard);
  async function getResponse(value) {
    const url = `https://api.scryfall.com/cards/named?exact=${value}`;
    const response = await fetch(url);
    const data = await response.json();
    sleep(500);
    console.log(data);
    return data;
  }

  return (
    <>
      <div className={styles.header}>
        <Hero />
        <div className={styles.headerText}>
          Highlight text and select &quot;Extract&quot; for it to be added to
          the search.
        </div>
      </div>
      <div className={styles.dataContainer}>
        <div className={styles.leftContainer}>
        <div className={styles.leftContainer.cardName}>
          <p>Card Name: </p>
          <p className={styles.textContatiner}>{cardDetails.name}</p>
        </div>

        <div className={styles.color}>
          <p>Color: </p>
          <p className={styles.textContatiner}>{cardDetails.colors}</p>
        </div>

        <div className={styles.manaCost}>
          <p>Mana Cost: </p>
          <p className={styles.textContatiner}>{cardDetails.mana_cost}</p>
        </div>

        <div className={styles.cmc}>
          <p>CMC: </p>
          <p className={styles.textContatiner}>{cardDetails.cmc}</p>
        </div>

        <div className={styles.cardType}>
          <p>Card Type: </p>
          <p className={styles.textContatiner}>{cardDetails.type_line}</p>
        </div>

        <div className={styles.set}>
          <p>Set: </p>
          <p className={styles.textContatiner}>{cardDetails.set.toLocaleUpperCase()}</p>
        </div>

        <div className={styles.text}>
          <p>Text: </p>
          <p className={styles.textContatiner}>{parseSpaceFunction(cardDetails.oracle_text)}</p>
        </div>
 </div>
        <div className={styles.rightContainer}>
        <div className={styles.imageContainer}>
          <img src={cardDetails.image_uris.normal}></img>
        </div>
     </div>
      </div>
      {/* <button
        className={styles.buttonTemp}
        onClick={() => {
          getResponse(passedHomeCard.selectedCard);
        }}
      ></button> */}
    </>
  );
};

export default CardTemplate;
