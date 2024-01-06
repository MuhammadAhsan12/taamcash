import React, { useState } from "react";
import styles from "./newpassword.module.css";

const NewPasswordForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown => !passwordShown);
  };
  const toggleConfirmPasswordVisiblity = () => {
    setConfirmPasswordShown(confirmPasswordShown => !confirmPasswordShown);
  };

  return (
    <>

      <div className={styles.new_password_container}>
      <div className={styles.mask_group}>
        <img src="/Images/Auth/Mask group.png" alt="Mask Group" />
      </div>
        <div className={styles.new_password_card}>
          <div>New Password</div>
          <div className={styles.tagLine}>
            Set the new password for your account<br></br> so you can login and access all features.
          </div>
          <form className={styles.form}>
            <div className={styles.input_group}>
              <div style={{alignSelf:'flex-start'}}>Password</div>
              <div className={styles.inputBox}>
              <input
                type={passwordShown ? "text" : "password"}
                id="password"
                placeholder="Enter your new password"
                required
              />
              <img
                src= {passwordShown ? "/Images/Auth/Icon eye.png" : "../../Icons/eye.svg"}
                alt="Show Password"
                className={styles.eye_icon}
                onClick={togglePasswordVisiblity} // Toggles the password visibility
                // Changes the cursor for better UX
              />
              </div>
              
            </div>
            <div className={styles.input_group}>
              <div style={{alignSelf:'flex-start'}}>Confirm Password</div>
              <div className={styles.inputBox}>
              <input
                type={confirmPasswordShown ? "text" : "password"}
                id="confirm-password"
                
                placeholder="Confirm your password"
                required
              />
              <img
                src= {confirmPasswordShown ? "/Images/Auth/Icon eye.png" : "../../Icons/eye.svg"}
                alt="Show Password"
                className={styles.eye_icon}
                onClick={toggleConfirmPasswordVisiblity} 
              />
              </div>
              
            </div>
            <button className={styles.button} type="submit">Confirm</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewPasswordForm;
