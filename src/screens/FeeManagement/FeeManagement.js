import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { Container } from "react-bootstrap";
import { Link,useLocation } from 'react-router-dom';
import styles from "./FeeManagement.module.css";
import Pagination from "../../components/Pagination/Pagination";
import DynamicTable from "../../components/DynamicTable/DynamicTable";
import FiltersPopup from "../../components/FiltersPopup/FiltersPopup";
import CalendarPopup from "../../components/CalendarPopup/CalendarPopup";
const Data = [
  {
    "Transaction Id": "ID#4411000",
    Money: "send",
    "Transaction Name": "Wallet To Wallet Transfer",
    Fee: "$ 5",
    Status: "Completed",
    Date: "07-11-2023",
  },
  {
    "Transaction Id": "ID#4411000",
    Money: "received",
    "Transaction Name": "Wallet To Wallet Transfer",
    Fee: "$ 5",
    Status: "Completed",
    Date: "07-11-2023",
  },
  {
    "Transaction Id": "ID#4411000",
    Money: "send",
    "Transaction Name": "Wallet To Wallet Transfer",
    Fee: "$ 5",
    Status: "Incompleted",
    Date: "07-11-2023",
  },
  {
    "Transaction Id": "ID#4411000",
    Money: "send",
    "Transaction Name": "Wallet To Wallet Transfer",
    Fee: "$ 5",
    Status: "Completed",
    Date: "07-11-2023",
  },
  {
    "Transaction Id": "ID#4411000",
    Money: "received",
    "Transaction Name": "Wallet To Wallet Transfer",
    Fee: "$ 5",
    Status: "Completed",
    Date: "07-11-2023",
  },
  {
    "Transaction Id": "ID#4411000",
    Money: "send",
    "Transaction Name": "Wallet To Wallet Transfer",
    Fee: "$ 5",
    Status: "Incompleted",
    Date: "07-11-2023",
  },
  // Add more rows as needed
];

const FeeManagement = () => {
  const location = useLocation();
  let val = new URLSearchParams(location.search).get('closeVal');
  let CloseVal = val === "true" ? true : false;
  const [closeMenu,setCloseMenu]=useState(CloseVal);
  const [calendar, setCalendar] = useState(false);
  const [filters, setFilters] = useState(false);
  return (
    <>
    <Header setCloseState={setCloseMenu} />
      <div className="main_div">
      <Sidebar setCloseState={closeMenu} />
        <div className={styles.main}>
          <Container className={styles.maindiv}>
            <h1 className={styles.title}>Fee Management</h1>
            <h2 className={styles.title2}>Set Commission</h2>
            <div
              style={{ width: "100%", marginTop: "10px", marginBottom: "10px" }}
            >
              <div className={styles.head}>
                <form className={styles.search}>
                  <input
                    placeholder="Enter commission amount   eg: $10"
                    type="text"
                  />
                  <span
                    style={{
                      borderLeft: "1px solid black",
                      paddingLeft: "10px",
                    }}
                  >
                    Amount
                  </span>
                  <img src="/Icons/chevron_down.svg" />
                </form>
                <button type="submit" className={styles.saveButton}>Save</button>
              </div>
            </div>

            <h2 className={styles.title2}>Total Commission</h2>

            <div className={styles.mainBox}>
              <div
                style={{
                  maxWidth: "250px",
                  maxHeight: "160px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className={styles.box}>
                  <div className={styles.timeZone}>Last 30 Days</div>
                  <div className={styles.amount}>$ 15,000</div>
                </div>
              </div>
              <div
                style={{
                  maxWidth: "250px",
                  maxHeight: "160px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className={styles.box}>
                  <div className={styles.timeZone}>Last 7 Days</div>
                  <div className={styles.amount}>$ 7,000</div>
                </div>
              </div>
              <div
                style={{
                  maxWidth: "250px",
                  maxHeight: "160px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className={styles.box}>
                  <div className={styles.timeZone}>Last 24 Hours</div>
                  <div className={styles.amount}>$ 70</div>
                </div>
              </div>
            </div>

            <div className={styles.title}>Transaction History</div>
            <div
              style={{ width: "100%", marginTop: "30px", marginBottom: "10px" }}
            >
              <div className={styles.head}>
                <form className={styles.search2}>
                  <input placeholder="Search With Transaction Id" type="text" />
                  <img src="/Icons/search.svg" />
                </form>
                <div          
                    onClick={() => setCalendar(true)}
                    className={styles.headButton}
                  >
                   Week <img src="../../Icons/dropdownIcon.svg" />
                  </div>
              </div>
            </div>
            <div className={styles.body}>
              <DynamicTable
                data={Data}
                viewLink={"/dashboard/feemanagementview"}
                view={true}
              />
            </div>
            <Pagination />
          </Container>
        </div>
        {calendar && <CalendarPopup close={(e) => setCalendar(e)} />}
      </div>
    </>
  );
};

export default FeeManagement;
