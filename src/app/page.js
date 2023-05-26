"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'

  export default function Home() {

    const [temp, setTemp] = useState(23);
    const [bgColor, setBgColor] = useState('cold')

    function handleClick(e) {
      const newTemp = (e.target.value === 'inc') ? temp + 1 : temp - 1;
      (newTemp >= 26) && setBgColor('hot');
      (newTemp < 26 && newTemp > 8) && setBgColor('cold');
      (newTemp <= 8) && setBgColor('freezing');
      setTemp(newTemp);
    }

    return (
      <div className={styles.main}>
        <div className={styles.screen}>
          <div className={`${styles.display} ${styles[`${bgColor}`]}`}>
            <h1>{temp}°C</h1>
          </div>
          <div className={styles.controls}>
            <button className={styles.button} value='inc' onClick={handleClick}>+</button>
            <button className={styles.button} value='dec' onClick={handleClick}>-</button>
          </div>
        </div>
      </div>
    )
  }

