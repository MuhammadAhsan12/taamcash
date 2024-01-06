import React from 'react';
import styles from "./forgetEmail.module.css";

const ForgotEmail = () => {
  return (
    <>

      <div className={styles.forgot_password_container}>
      <div className={styles.mask_group}>
        <img src="/Images/Auth/Mask group.png" alt="Mask Group" />
      </div>
        <div className={styles.forgot_password_card}>        
          <form>
            <div>Forgot password</div>
            <div>Enter your email for the verification processed will send 4 digits code to your email.</div>
            <div className={styles.input_group}>
              <label style={{alignSelf:'flex-start'}}>Email</label>
              <input type="email" id="Email" placeholder='Enter your email' required />
            </div>
            <button className={styles.button} type="submit">Continue</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotEmail;
