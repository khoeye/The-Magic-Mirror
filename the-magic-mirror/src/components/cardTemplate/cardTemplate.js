/* eslint-disable no-unused-vars */
import React from "react";
import sleep from "sleep-promise";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Hero from "../hero/hero";
import styles from "./cardTemplate.module.css";
import CardDetailsObject from "./cardDetailsObject";
import { parseSpaceFunction } from "./helper/textFormater";
import { Highlightable } from "highlightable";
import { createPortal } from 'react-dom';

const CardTemplate = () => {
  const { state } = useLocation();
  const [passedHomeCard, setPassedHomeCard] = useState({
    selectedCard: "The Meep",
  });
  const [cardDetails, setCardDetails] = useState(CardDetailsObject);
  const [extractedText, setExtractedText] = useState({})
  const [textSelected, setTextSelected] = useState(false)
  const [extractPosition, setExtractPostion] = useState({top: '0',bottom: '0', right:'0', left:'0'})

  async function getResponse(value) {
    const url = `https://api.scryfall.com/cards/named?exact=${value}`;
    const response = await fetch(url);
    const data = await response.json();
    sleep(500);
    console.log(data);
    return data;
  }
const cancelSelection = () =>{
  setTextSelected(false)

}
  const handleSelection = () => {
    let selectedText = window.getSelection().toString();
    let selectedTextCategory = window.getSelection().baseNode.parentNode.id.toString()
    console.log(window.getSelection())
    setExtractedText({...extractedText,
      [selectedTextCategory]: selectedText})
    setTextSelected(true)
    const oRect = window.getSelection().getRangeAt(0).getBoundingClientRect();
    setExtractPostion({  top: oRect.top,
      bottom: oRect.bottom,
      right: oRect.right,
      left: oRect.left,})
}
const handleDeselection = () => {
  setTextSelected(false)
}
const extractButtonStyle = (selected, positionObject) => ({
  top: positionObject.top,
  bottom: positionObject.bottom,
  right: positionObject.right,
  left: positionObject.left,
  visibility: selected && extractedText != "" ? 'visible' : 'hidden',
});


  return (
    <>
      <div className={styles.header} onMouseDown={cancelSelection}>
      {createPortal(
   <button className={styles.extractButton} style={extractButtonStyle(textSelected, extractPosition)}>Extract</button>,
    document.body
  )}
        <div className={styles.headerText}>
          Highlight text and select &quot;Extract&quot; for it to be added to
          the search.
        </div>
      </div>
      <div className={styles.dataContainer}>
        <div className={styles.leftContainer} onMouseDown={cancelSelection}>
        <div className={styles.leftContainer.cardName} onMouseUp={handleSelection} onDoubleClick={handleSelection} >
          <p>Card Name: </p>
          <p id={'name'} className={styles.textContatiner}>{cardDetails.name}</p>
        </div>

        <div className={styles.color} onMouseUp={handleSelection}onDoubleClick={handleSelection}>
          <p>Color: </p>
          <p id={'color'} className={styles.textContatiner}>{cardDetails.colors}</p>
        </div>

        <div className={styles.manaCost} onMouseUp={handleSelection} onDoubleClick={handleSelection}>
          <p>Mana Cost: </p>
          <p id={'manaCost'} className={styles.textContatiner}>{cardDetails.mana_cost}</p>
        </div>

        <div className={styles.cmc} onMouseUp={handleSelection} onDoubleClick={handleSelection}>
          <p>CMC: </p>
          <p id={'cmc'} className={styles.textContatiner}>{cardDetails.cmc}</p>
        </div>

        <div className={styles.cardType} onMouseUp={handleSelection} onDoubleClick={handleSelection}>
          <p>Card Type: </p>
          <p id={'type'} className={styles.textContatiner}>{cardDetails.type_line}</p>
        </div>

        <div className={styles.set} onMouseUp={handleSelection} onDoubleClick={handleSelection}>
          <p>Set: </p>
          <p id={'set'} className={styles.textContatiner}>{cardDetails.set.toLocaleUpperCase()}</p>
        </div>

        <div className={styles.text} onMouseUp={handleSelection} onDoubleClick={handleSelection}>
          <p>Text: </p>
          <p id={'oracle'} className={styles.textContatiner}>{parseSpaceFunction(cardDetails.oracle_text)}</p>
      </div>
 </div>
        <div className={styles.rightContainer} onMouseDown={cancelSelection}>
        <div className={styles.imageContainer}>
          <img src={cardDetails.image_uris.normal}></img>
        </div>
     </div>
      </div>
    </>
  );
};

export default CardTemplate;
