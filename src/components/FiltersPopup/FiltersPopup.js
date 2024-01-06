import React, { useEffect, useRef } from "react";
import styles from "./FiltersPopup.module.css";

const FiltersPopup = ({ close, labels }) => {
  const myRef = useRef();

  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      close(false);
    }
  };
  const handleClickInside = () => close(true);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });
  return (
    <div className={styles.main}>
      <div ref={myRef} onClick={handleClickInside} className={styles.inner}>
        <div className={styles.body}>
          <div className={styles.filterHead}>Filters</div>
          {labels.map((row, rowIndex) => (
            <div className={styles.filter}>
              <input type="checkbox" />
              <div className={styles.filterFields}>{row}</div>
            </div>
          ))}

          <button className={styles.buttonFilter}>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default FiltersPopup;
