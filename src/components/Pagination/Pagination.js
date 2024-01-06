import React, { useState } from "react";
import styles from "./Pagination.module.css";

const Pagination = () => {
  const [pageNo, setPageNo] = useState(20);

  const handlePageValue = (e) => {
    setPageNo(e.target.value);
  };
  // Pagination functionality to be added according to the APIs
  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <div>Row per page</div>
        <div>
          <select name="pages" onChange={handlePageValue}>
            <option>10</option>
            <option selected>20</option>
            <option>30</option>
            <option>40</option>
            <option>50</option>
          </select>
        </div>
        <img src="/Icons/chevronLeft.svg" />
        <div className={styles.list}>
          <div>1-{pageNo}</div>
          <div>of</div>
          <div>100</div>
        </div>
        <img src="/Icons/chevronRight.svg" />
      </div>
    </div>
  );
};

export default Pagination;
