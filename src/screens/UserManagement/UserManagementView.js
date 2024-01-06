import React,{useState} from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { Container,Button } from "react-bootstrap";
import styles from "./UserManagement.module.css";
import CalendarPopup from '../../components/CalendarPopup/CalendarPopup';
import DynamicTable from '../../components/DynamicTable/DynamicTable';
import PersonData from '../../components/PersonData/personData';
import Pagination from '../../components/Pagination/Pagination';
import { Link,useLocation } from 'react-router-dom';
const Data = [
    { "Transaction Id": "ID#4411000","Money": "send", "Transaction Name": "Wallet To Wallet Transfer", "Amount": "$5,000", "Date": "07-11-2023" },
    { "Transaction Id": "ID#4411000","Money": "received", "Transaction Name": "Wallet To Wallet Transfer", "Amount": "$5,000", "Date": "07-11-2023" },
    { "Transaction Id": "ID#4411000","Money": "send", "Transaction Name": "Wallet To Wallet Transfer", "Amount": "$5,000", "Date": "07-11-2023" },
    { "Transaction Id": "ID#4411000","Money": "send", "Transaction Name": "Wallet To Wallet Transfer", "Amount": "$5,000", "Date": "07-11-2023" },
    { "Transaction Id": "ID#4411000","Money": "received", "Transaction Name": "Wallet To Wallet Transfer", "Amount": "$5,000", "Date": "07-11-2023" },
    { "Transaction Id": "ID#4411000","Money": "send", "Transaction Name": "Wallet To Wallet Transfer", "Amount": "$5,000", "Date": "07-11-2023" },
    // Add more rows as needed
  ];

const UserManagementView = () => {
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
            <Link to="/dashboard/usermanagement"><img src='../../Icons/arrow.svg'/></Link>
              <div>Registered Users</div>

            </div>
            <PersonData subDate="false" complainId="false" activeBtn="true" nameInSection="false" name="David Alex" location="Sydney, Australia" joined="07/11/2023" transactionId="none" ph="9999123 - 4567" accNo="9558222111222114" status="none" balance="$ 52,000"/>
            <div className={styles.userActivity}>
              <div className={styles.userActivityTitle}>
                <div>Users Activity</div>
                <div          
                    onClick={() => setCalendar(true)}
                    className={styles.headButton}
                  >
                    This Week <img src="../../Icons/dropdownIcon.svg" />
                  </div>
              </div>
              <div className={styles.userActivityData}>
                <div></div>
              </div>
          
            </div>
            <div className={styles.body}>
              <DynamicTable data={Data} view={false} />
            </div>
            <Pagination />
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

export default UserManagementView