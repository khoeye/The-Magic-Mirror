import React from "react"
import styles from "./cardTemplate.module.css";


// eslint-disable-next-line react/prop-types
const SelectedTextBox = ({position}) => {
    return (
        <p className={styles.selectedTextButton} 
            style={{
                // eslint-disable-next-line react/prop-types
                transform: `translate3d(${position.x}px, ${position.y}px, 0)`
            }}>
            <button>Extract</button>
        </p>
    )
}

export default SelectedTextBox