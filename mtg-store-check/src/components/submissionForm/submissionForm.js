import React, { Fragment } from "react";
import { useState } from "react";
const submissionForm = () =>{
  const [CardImport,setCardImport] = useState("") 

  const handleSubmit = (event) => {
    event.preventDefault()
  }  
  
  return(
      
<Fragment>
    <form onSubmit={handleSubmit}>
      <input type="text" id="deckList" name="deckList" onChange={(event) => {
          setCardImport(event.target.value);
        }}/>
      <button>Submit</button>
      </form>
</Fragment>
    )
}

export default submissionForm