import React from "react";
import styles from "../hero/hero.module.css";
import { Outlet, Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className={styles.navContainer}>
        <span>
          <button>
            <Link to="/">The Magic Mirror</Link>
          </button>
        </span>
        <span>
          <button>
            <Link to="/advancedSearch">Advanced Search</Link>
          </button>
        </span>
      </div>
      <Outlet />
    </>
  );
};

export default Hero;
