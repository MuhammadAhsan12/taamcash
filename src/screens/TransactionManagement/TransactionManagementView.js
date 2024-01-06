import React,{useState} from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { Container,Button } from "react-bootstrap";
import styles from "./TransactionManagement.module.css";
import CalendarPopup from '../../components/CalendarPopup/CalendarPopup';
import DynamicTable from '../../components/DynamicTable/DynamicTable';
import PersonData from '../../components/PersonData/personData';
import { Link,useLocation } from 'react-router-dom';
const Data = [
    { "Receipt Id": "ID#4411000","Money": "received", "Transaction Name": "Wallet To Bank Transfer", "Bank": "HBL Bank","Amount": "$50,000", "Date and Time": " 10:50 PM 07-11-2023" },
    // Add more rows as needed
  ];
const TransactionManagementView = () => {
  const location = useLocation();
  let val = new URLSearchParams(location.search).get('closeVal');
  let CloseVal = val === "true" ? true : false;
  const [closeMenu,setCloseMenu]=useState(CloseVal);
  const [calendar, setCalendar] = useState(false);
  return (
    <>
      <Header setCloseState={setCloseMenu} />
      <div className="main_div">
        
      <Sidebar setCloseState={closeMenu} />
        <div className={styles.main}>
          <Container className={styles.maindiv}>
            <div className={styles.pageTitle}>
            <Link to="/dashboard/transactionmanagement"><img src='../../Icons/arrow.svg'/></Link>
              <div>Transaction</div>

            </div>
            <div className={styles.userActivity}>
              <div >
                <div>Sender</div>
              </div>
            </div> 
            <PersonData subDate="false" complainId="false" activeBtn="false" nameInSection="false" name="David Alex" location="Sydney, Australia" joined="07/11/2023" transactionId="ID#4411000" ph="9999123 - 4567" accNo="9558222111222114" status="Complete" balance="none"/>
            <div className={styles.userActivity}>
              <div >
                <div>Receiver</div>
              </div>
            </div> 
            <PersonData subDate="false" complainId="false" activeBtn="false" nameInSection="false" name="Robert J" location="Sydney, Australia" joined="07/11/2023" transactionId="ID#4411000" ph="9999123 - 4567" accNo="9558222111222114" status="none" balance="none"/>
            <div className={styles.userActivity}>
              <div >
                <div>Transaction Detail</div>
              </div>
            </div> 
            <div className={styles.body}>
              <DynamicTable data={Data} view={false} />
            </div>
          </Container>
          
        </div>
        {calendar && (
          <CalendarPopup
            marginTop="130px"
            marginRight="30px"
            close={(e) => setCalendar(e)}
          />
        )}
      </div>
    </>
  )
}

export default TransactionManagementView