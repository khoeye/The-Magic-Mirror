import React from "react"
import styles from "./home.module.css"
import Hero from "../hero/hero"
import CardSearch from "../cardSearch/cardSearch"

const HomePage = () => {
    return [
        <>
        <div className={styles.headerContainer}>
            <Hero home={true} advancedSearch={true}/>
            <div className={styles.headerText}>
            Magic Mirror lets you choose a card to use as a template for <br></br>
searches or to build your own advanced search.
</div>
        </div>
        <div className={styles.searchContainer}>
            <CardSearch></CardSearch>
        </div>
            
            
        </>
    ]
}

export default HomePage