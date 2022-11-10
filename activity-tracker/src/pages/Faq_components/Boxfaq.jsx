import React from "react";
import styles from '../Faq.module.css'
export const Boxfaq = ({ Data }) => {
  return (
    <div >
      <div className={styles.maindiv}>
        {Data.ext &&
          Data.ext.map((e) => {
            return (
              <div className={styles.maincomp}>
                <h1>{e.title}</h1>
                <ul>
                  <li>{e.dec1}</li>
                  <li>{e.dec2}</li>
                  <li>{e.dec3}</li>
                </ul>
                <button className={styles.mainbutton}>{e.button}</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
