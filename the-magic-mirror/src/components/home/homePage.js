import React from "react";
import styles from "./home.module.css";
import Hero from "../hero/hero";
import CardSearch from "../cardSearch/cardSearch";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
} from "features/counterSlice";

const HomePage = () => {

      const count = useSelector((state) => state.counter.value);
      const dispatch = useDispatch();


  return [
    <>
      <div className={styles.headerContainer}>
        <Hero home={true} advancedSearch={true} />
        <div className={styles.headerText}>
          Magic Mirror lets you choose a card to use as a template for <br></br>
          searches or to build your own advanced search.
        </div>
      </div>
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
      <div className={styles.searchContainer}>
        <CardSearch></CardSearch>
      </div>
    </>,
  ];
};

export default HomePage;
