import React from 'react'
import CartIcon from '../Cart/CartIcon.js'
import styles from './HeaderCartButton.module.css'

export const HeaderCartButton = () => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={styles.badge}>4</span>
    </button>
  );
}
