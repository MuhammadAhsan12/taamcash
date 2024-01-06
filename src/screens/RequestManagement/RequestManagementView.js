import React,{useState} from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { Container,Button } from "react-bootstrap";
import styles from "./RequestManagement.module.css";
import CalendarPopup from '../../components/CalendarPopup/CalendarPopup';
import DynamicTable from '../../components/DynamicTable/DynamicTable';
import PersonData from '../../components/PersonData/personData';
import { Link,useLocation } from 'react-router-dom';
const Data = [
    { "Request Id": "ID#4411000","User Name":"David Alex", "Status": "Pending", "Date": "07-11-2023" },
    // Add more rows as needed
  ];
const RequestManagementView = () => {
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
            <Link to="/dashboard/requestmanagement"><img src='../../Icons/arrow.svg'/></Link>
              <div>Card Requests</div>
            </div>
            <PersonData subDate="false" complainId="false" activeBtn="false" name="David Alex" nameInSection="true" location="Sydney, Australia" joined="07/11/2023" transactionId="none" ph="none" accNo="9558222111222114" status="none" balance="$5,000"/>
            <div className={styles.userActivity}>
              <div >
                <div>Request</div>
              </div>
            </div> 
            <div className={styles.body}>
              <DynamicTable data={Data} view={false} />
            </div>
            <div className={styles.footer}>
                <div className={styles.cancel}>Decline</div>
                  <div className={styles.apply}>Approve</div>
                </div>
          </Container>
          
        </div>
        
      </div>
    </>
  )
}

export default RequestManagementView