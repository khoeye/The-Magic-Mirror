/* eslint-disable react/prop-types */
import React from "react";
import styles from "../hero/hero.module.css";
import { Outlet, Link } from "react-router-dom";

const Hero = ({home, advancedSearch}) => {
  return (
    <>
      <div className={styles.navContainer}>
        {home && (
          <span className={styles.navRow.left}>
            <button className={styles.left}>
              <Link to="/">MTG Magic Mirror</Link>
            </button>
          </span>
        )}
        {advancedSearch && (
          <span className={styles.navRow.right}>
            <button className={styles.right}>
              <Link to="/advancedSearch">Advanced Search</Link>
            </button>
          </span>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default Hero;
