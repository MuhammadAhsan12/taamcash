import React,{useState} from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { Container } from "react-bootstrap";
import styles from "./TransactionManagement.module.css";
import Pagination from "../../components/Pagination/Pagination";
import DynamicTable from "../../components/DynamicTable/DynamicTable";
import FiltersPopup from "../../components/FiltersPopup/FiltersPopup";
import { Link,useLocation } from 'react-router-dom';

const Data = [
  { "Transaction Id": "ID#4411000","Money": "send", "Transaction Name": "Wallet To Wallet Transfer", "Status": "Completed", "Date": "07-11-2023" },
  { "Transaction Id": "ID#4411000","Money": "received", "Transaction Name": "Wallet To Wallet Transfer", "Status": "Completed", "Date": "07-11-2023" },
  { "Transaction Id": "ID#4411000","Money": "send", "Transaction Name": "Wallet To Wallet Transfer", "Status": "Incompleted", "Date": "07-11-2023" },
  { "Transaction Id": "ID#4411000","Money": "send", "Transaction Name": "Wallet To Wallet Transfer", "Status": "Completed", "Date": "07-11-2023" },
  { "Transaction Id": "ID#4411000","Money": "received", "Transaction Name": "Wallet To Wallet Transfer", "Status": "Completed", "Date": "07-11-2023" },
  { "Transaction Id": "ID#4411000","Money": "send", "Transaction Name": "Wallet To Wallet Transfer", "Status": "Incompleted", "Date": "07-11-2023" },
  // Add more rows as needed
];

const TransactionManagement = () => {
  const location = useLocation();
  let val = new URLSearchParams(location.search).get('closeVal');
  let CloseVal = val === "true" ? true : false;
  const [closeMenu,setCloseMenu]=useState(CloseVal);
  const [filters, setFilters] = useState(false);
  return (
    <>
      <Header setCloseState={setCloseMenu} />
      <div className="main_div">
      <Sidebar setCloseState={closeMenu} />
        <div className={styles.main}>
          <Container className={styles.maindiv}>
            <h1 className={styles.title}>Transaction Management</h1>
            <div style={{ width: "100%", marginTop: "30px", marginBottom: "10px" }}>
              <div className={styles.head}>
                <form className={styles.search}>
                  <input
                    placeholder="Search With Transaction Id"
                    type="text"
                  />
                  <img
                    src="/Icons/search.svg"
                  />

                </form>
                <div className={styles.filter} onClick={() => setFilters(true)}>
                  <img
                    src="/Icons/filterIcon.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.body}>
              <DynamicTable data={Data} viewLink={"/dashboard/transactionmanagementview"} view={true}/>
            </div>
            <Pagination />
          </Container>
        </div>
        {filters && <FiltersPopup labels={['Wallet to Wallet','Wallet to Bank']} close={(e) => setFilters(e)} />}
      </div>

    </>
  );
}

export default TransactionManagement