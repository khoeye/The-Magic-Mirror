import React, { Fragment, useState } from "react";

const SubmissionForm = () =>{
  
  const [cardImport,  setCardImport] = useState(0); 

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

export default SubmissionForm