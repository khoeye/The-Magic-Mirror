import React from "react";
import styles from "../hero/hero.module.css";
import { Outlet, Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className={styles.navContainer}>
        <span className={styles.left}>
          <button className={styles.left}>
            <Link to="/">MTG Magic Mirror</Link>
          </button>
        </span>
        <span className={styles.right}>
          <button className={styles.right}>
            <Link to="/advancedSearch">Advanced Search</Link>
          </button>
        </span>
      </div>
      <Outlet />
    </>
  );
};

export default Hero;
