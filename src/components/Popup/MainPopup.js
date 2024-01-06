import React, { useEffect, useRef, useState } from "react";
import styles from "./MainPopup.module.css";
import { Spinner } from "react-bootstrap";

const MainPopup = ({ close, _id }) => {
  const myRef = useRef();
  const [PasswordShown, setPasswordShown] = useState(false);
  const [newPasswordShown, setNewPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);


  const togglePasswordVisiblity = () => {
    setPasswordShown(PasswordShown => !PasswordShown);
  };

  const toggleNewPasswordVisiblity = () => {
    setNewPasswordShown(newPasswordShown => !newPasswordShown);
  };

  const toggleConfirmPasswordVisiblity = () => {
    setConfirmPasswordShown(confirmPasswordShown => !confirmPasswordShown);
  };
  
  return (

    <div className={styles.main}>
          {/* {popUpClose && ( */}
        <div
          className={styles.styledDiv}
        >
             <span onClick={close}>
            <img src="../../Icons/close.svg" />
          </span>
                 
          <div style={{ textTransform: "none", marginBottom:"15px" }} className= {`${styles.headerText} h1_main pb-2`}>
            Change Password
          </div>
          <p className="para_main pb-3">
            Set the new password for your account so you can login and access
            all features.
          </p>
          {/* {message ? ( */}
            <p className="text-center" style={{ color: "red" }}>
              {/* {message} */}
            </p>
          {/* ) : ( */}
            {/* error && ( */}
              <p className="text-center" style={{ color: "red" }}>
                {/* {error} */}
              </p>
            {/* )
          )}
          {loading && ( */}
            <div className="text-center">
              {/* <Spinner /> */}
            </div>
          {/* )} */}
          <div className={styles.body}>
            <form style={{padding:"15px 0px"}}>
              <div className={styles.inputCont}>
                <label>Enter Previous password</label>
                <div className={styles.input}>
                  <input
                    required
                    type={PasswordShown ? "text" : "password"}
                    placeholder="Enter Old Password"
                    name="old_password"

                  />
                    <img
                      src={PasswordShown ?  "../../Icons/eyeClose.svg" : "../../Icons/eye.svg"}
                      onClick={togglePasswordVisiblity} 
                    />
                </div>
              </div>
              <div className={styles.inputCont}>
                <label>Enter new password</label>
                <div className={styles.input}>
                  <input
                    required
                    type={newPasswordShown ? "text" : "password"}
                    placeholder="Enter New Password"
                    name="new_password"

                  />
                    <img
                      src={newPasswordShown ?  "../../Icons/eyeClose.svg" : "../../Icons/eye.svg"}
                      onClick={toggleNewPasswordVisiblity} 
                    />
                </div>
              </div>
              <div className={styles.inputCont}>
                <label>Confirm password</label>
                <div className={styles.input}>
                  <input
                    required
                    placeholder="Confirm Password"
                    name="confirm_password"
                    type={confirmPasswordShown ? "text" : "password"}
                  />
                    <img
                      src={confirmPasswordShown ?  "../../Icons/eyeClose.svg" : "../../Icons/eye.svg"}
                      onClick={toggleConfirmPasswordVisiblity} 
                    />
                </div>
              </div>

            </form>
            <div className={styles.footer}>
                <button style={{padding:'15px 0px'}} type="submit">Update Password</button>
              </div>
          </div>
        </div>
        {/* )}; */}
    </div>
    
  );
};

export default MainPopup;
