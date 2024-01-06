import React, { useEffect, useState } from "react";
import Header from '../../components/Header/Header';
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./ProfileScreen.module.css";
import { Container } from "react-bootstrap";
import MainPopup from "../../components/Popup/MainPopup";
import { Link,useLocation } from 'react-router-dom';
const ProfileScreen = () => {
  const location = useLocation();
  let val = new URLSearchParams(location.search).get('closeVal');
  let CloseVal = val === "true" ? true : false;
  const [closeMenu,setCloseMenu]=useState(CloseVal);
  const [isPopupOpen, setIsPopupOpen] = useState(false);


  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <>
<Header setCloseState={setCloseMenu} />
      <div className="main_div">
      <Sidebar setCloseState={closeMenu} />
        <div className={styles.main}>
          <Container className={styles.maindiv}>
            <div className={styles.title}>ACCOUNT</div>
            <div className={styles.Profile}>
              <div
                style={{ backgroundImage: "url(../../Icons/admin.svg)" }}
                className={styles.profileImg}
              >
                <div className={styles.camera}>
                  <img alt="" src="../../Icons/profile_with_camera.svg" />
                </div>
              </div>
              <div className={styles.form}>
                <div className={styles.profileFields}>
                  <div className={`${styles.row} mb-4`}>
                    <div className={styles.formGroup}>
                      <label>First Name</label>
                      <input required
                        type="text"
                        placeholder="Enter Your First Name"
                        name="first_name" />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Last Name</label>
                      <input required
                        type="text"
                        placeholder="Enter Your Last Name"
                        name="last_name" />
                    </div>
                  </div>
                  <div className={`${styles.row} mb-4`}>
                    <div className={styles.formGroup}>
                      <label>Email</label>
                      <input required
                        type="email"
                        placeholder="Enter Your Email"
                        name="email" />
                    </div>
                    <div className={styles.formGroup}>

                      <label>Password</label>
                      <input required
                        type="password"
                        placeholder="x-x-x-x-x-x-x"
                        name="password"
                      />

                    </div>
                  </div>
                  <div className={`${styles.row} mb-4`} style={{ alignSelf: "flex-end" }}>
                    <div className={styles.formGroup}>
                      <div
                        className={styles.change}
                        onClick={() => setIsPopupOpen(true)}
                        type="button">Change

                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.footer}>
                <div className={styles.cancel}>Cancel</div>
                  <div className={styles.apply}>Save</div>
                </div>
              </div>
            </div>
          </Container>
          {isPopupOpen && (
            <MainPopup
              // _id={_id}
              close={closePopup}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileScreen;
