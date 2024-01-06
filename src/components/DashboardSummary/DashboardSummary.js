import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./DashboardSummary.module.css";

const DashboardSummary = ({ data }) => {
  // props will be used when data is provided through API's

  return (
    // <Container>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "40px"}}>
        <div style={{ maxWidth: "280px", maxHeight: "160px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className={styles.box}>
            <div className={styles.boxHead}>Registered Users</div>
            <div style={{ display: "flex", justifyContent:"space-between", alignItems:"center" }}>
              <div className={styles.text1}>721K</div>
              <div className={styles.text2}>+15.03%</div>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: "280px", maxHeight: "160px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className={styles.box}>
            <div className={styles.boxHead}>Total Transactions</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div className={styles.text1}>100K</div>
              <div className={styles.text2}>+15.03%</div>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: "280px", maxHeight: "160px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className={styles.box}>
            <div className={styles.boxHead}>Total Platform Balance</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div className={styles.text1}>1,156</div>
              <div className={styles.text2}>+15.03%</div>
            </div>
          </div>
        </div>
      </div >
    // </Container >
  );
};

export default DashboardSummary;
