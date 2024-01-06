import React from 'react';
// import logo from "/Images/Auth/Mask group.png";
import styles from "./forgotPhone.module.css";

const ForgotPhone = () => {
  return (
    <div className={styles.forgot_password_container}>
      <div className={styles.mask_group}>
        <img src="/Images/Auth/Mask group.png" alt="TaamCash Logo" />
      </div>
      <div className={styles.forgot_password_card}>        
        <form>
          <div>Forgot password</div>
          <div>Enter your phone number for the verification process. We will send a 4-digit code to your email.</div>
          <div className={styles.input_group}>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder='Enter your phone number' required />
          </div>
          <button type="submit">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPhone;
