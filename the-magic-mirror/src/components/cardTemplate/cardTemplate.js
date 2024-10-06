/* eslint-disable no-unused-vars */
import React from "react";
import sleep from "sleep-promise";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import styles from "./cardTemplate.module.css";
import CardDetailsObject from "./cardDetailsObject";
import { parseSpaceFunction } from "./helper/textFormater";
import SelectedTextBox from "./selectedTextBox";

const CardTemplate = () => {
  const { state } = useLocation();
  const [passedHomeCard, setPassedHomeCard] = useState({
    selectedCard: "The Meep",
  });
  const [cardDetails, setCardDetails] = useState(CardDetailsObject);
  const [extractedText, setExtractedText] = useState({})
  const [isTextSelected, setIsTextSelected] = useState(false)
  const [extractedPosition, setExtractedPosition] = useState({})

  async function getResponse(value) {
    const url = `https://api.scryfall.com/cards/named?exact=${value}`;
    const response = await fetch(url);
    const data = await response.json();
    sleep(500);
    console.log(data);
    return data;
  }
const cancelSelection = () =>{
  setIsTextSelected(false)

}
  const handleSelection = () => {
    let selectedText = window.getSelection().toString();
    let selectedTextCategory = window.getSelection().baseNode.parentNode.id.toString()
    setExtractedText({...extractedText,
      [selectedTextCategory]: selectedText})
    setIsTextSelected(true)
    const oRect = window.getSelection().getRangeAt(0).getBoundingClientRect();
    console.log(oRect)
    setExtractedPosition({     
      x: oRect.x + (oRect.width / 2) - (80 / 2),
      y: oRect.y + (oRect.height / 2) - (30 * 4 ) ,
      width: oRect.width,
      height: oRect.height,
    })

  }
  return (
    <>
    <div className={styles.header} onMouseDown={cancelSelection}>
        <div className={styles.headerText}>
          Highlight text and select &quot;Extract&quot; for it to be added to
          the search.
        </div>
      </div>
      {isTextSelected && extractedPosition.x && extractedPosition.y && (
        <SelectedTextBox position={extractedPosition}/>
      )}
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
