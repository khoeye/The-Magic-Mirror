/* eslint-disable no-unused-vars */
import React from "react";
import sleep from "sleep-promise";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
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
  const [selectedText, setSelectedText] = useState(undefined)
  const [extractedValues, setExtractedValues] = useState([])
  const [isTextSelected, setIsTextSelected] = useState(false)
  const [extractedPosition, setExtractedPosition] = useState({})

  // This fetches the api data for the card
  async function getResponse(value) {
    const url = `https://api.scryfall.com/cards/named?exact=${value}`;
    const response = await fetch(url);
    const data = await response.json();
    //This is the recommended delay for calls into scryfall. 
    sleep(500);
    return data;
  }

  //Move the selected text state into the extracted state and return a promise
  const extractText = async () => {
    setExtractedValues(prevState => ([...prevState, selectedText]));
  }

  // Once the text is extracted we reset states
  const handleExtractClick = async () => {
    await extractText()
    setIsTextSelected(false);
    setSelectedText(undefined);
  }

  // Get the selected text in the window. If no text is available exit the function else we update state.
  const handleSelection = () => {
    let getText = window.getSelection().toString();
    let getTextCategory = window.getSelection().baseNode.parentNode.id.toString()


    if (!getText) {
      setIsTextSelected(false)
      return
    }

    setIsTextSelected(true)
    setSelectedText({...selectedText,
      [getTextCategory]: getText})
    const oRect = window.getSelection().getRangeAt(0).getBoundingClientRect();
    setExtractedPosition({     
      x: oRect.x + (oRect.width / 2) - (80 / 2),
      y: oRect.y + (oRect.height / 2) + (window.scrollY) - (30 * 4 ) ,
      width: oRect.width,
      height: oRect.height,
    })
  }

    //Listen for mouseup events indicating a user has begun selection. 
    useEffect(() => {
    document.addEventListener('mouseup', handleSelection);
    return () => {
      document.removeEventListener('mouseup', handleSelection);
    }
  }, []);


  return (
    <>
    <div className={styles.header}>
        <div className={styles.headerText}>
          Highlight text and select &quot;Extract&quot; for it to be added to
          the search.
        </div>
      </div>
      {isTextSelected && extractedPosition.x && extractedPosition.y && (
        <SelectedTextBox position={extractedPosition} clickHandler={handleExtractClick} />
      )}
      <div className={styles.dataContainer}>
        <div className={styles.leftContainer}>
        <div className={styles.leftContainer.cardName}>
          <p className={styles.unselectable}>Card Name: </p>
          <p id={'name'} className={styles.textContatiner}>{cardDetails.name}</p>
        </div>

        <div className={styles.color}>
          <p className={styles.unselectable}>Color: </p>
          <p id={'color'} className={styles.textContatiner}>{cardDetails.colors}</p>
        </div>

        <div className={styles.manaCost} >
          <p className={styles.unselectable}>Mana Cost: </p>
          <p id={'manaCost'} className={styles.textContatiner}>{cardDetails.mana_cost}</p>
        </div>

        <div className={styles.cmc} >
          <p className={styles.unselectable}>CMC: </p>
          <p id={'cmc'} className={styles.textContatiner}>{cardDetails.cmc}</p>
        </div>

        <div className={styles.cardType} >
          <p className={styles.unselectable}>Card Type: </p>
          <p id={'type'} className={styles.textContatiner}>{cardDetails.type_line}</p>
        </div>

        <div className={styles.set} >
          <p className={styles.unselectable}>Set: </p>
          <p id={'set'} className={styles.textContatiner}>{cardDetails.set.toLocaleUpperCase()}</p>
        </div>

        <div className={styles.text} >
          <p className={styles.unselectable}>Text: </p>
          <p id={'oracle'} className={styles.textContatiner}>{parseSpaceFunction(cardDetails.oracle_text)}</p>
      </div>
 </div>
        <div className={styles.rightContainer}>
        <div className={styles.imageContainer}>
          <img src={cardDetails.image_uris.normal}></img>
        </div>
     </div>
      </div>
    </>
  );
};

export default CardTemplate;
