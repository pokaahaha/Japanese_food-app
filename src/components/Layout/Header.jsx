import React from "react";
import { HeaderCartButton } from './HeaderCartButton';
import sushiImage from "../../assets/sushi.jpg";
import styles from "./Header.module.css";

export const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Japan menu</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>

      <div className={styles["main-image"]}>
        <img src={sushiImage} alt="sushiImage" />
      </div>
    </>
  );
};
