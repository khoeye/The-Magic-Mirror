import React from "react";
import styles from "../hero/hero.module.css";
import { Outlet, Link } from "react-router-dom";

const Hero = (props) => {
  return (
    <>
      <div className={styles.}>
        <button>
          <Link to="/cardSearch">Card Search</Link>
        </button>

        <button>
          <Link to="/">⌂</Link>
        </button>

        <button>
          <Link to="/advancedSearch">Advanced Search</Link>
        </button>
      </div>
      <Outlet />
    </>
  );
};

export default Hero;
