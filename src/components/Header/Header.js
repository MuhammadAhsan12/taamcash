import React,{useState} from 'react'
import styles from "./Header.module.css";
import { Container } from 'react-bootstrap'
import { Link,useLocation } from "react-router-dom";

const Header = ({setCloseState}) => {
  const [close,setClose]=useState(true);
  const [closeVal,setCloseVal]=useState(true);
  const location = useLocation();

  const handleClose=()=>{
    setClose(close => !close);
    setCloseVal(close);
    setCloseState(close);
  };
  return (
    <Container style={{ padding: "0px" }} fluid>
      <div className={styles.main}>
        <div className={styles.inner}>
          <div className={styles.menu}>
          <img alt="" src='/Icons/menu-toggle.svg' onClick={handleClose} />
            
            <h4 className="h4_main">Menu </h4>
          </div>
          <h2 className="h2_main"><img alt="" src='/Images/logo.svg' /></h2>
          <div className={styles.pills}>
            <div className={styles.dash} />
            <Link to={"/dashboard/profile?closeVal="+JSON.parse(closeVal)}><img alt="" src="/Images/profile.svg" /></Link>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Header;