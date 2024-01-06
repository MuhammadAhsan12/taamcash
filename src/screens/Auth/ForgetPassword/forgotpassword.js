import React from "react";
import styles from "./forgotpassword.module.css";
import { Link } from "react-router-dom";


const ForgotPassword = () => {
  return (
    // <>

      <div className={styles.forgot_password_container}>
      <div className={styles.mask_group}>
        <img src="/Images/Auth/Mask group.png" alt="Mask Group" />
      </div>
        <div className={styles.forgot_password_card}>
          <div className={styles.forgot_password_title}>Forgot password</div>
          <div className={styles.forgot_password_description}>
            Select how to forgot password
          </div>
          <Link to={'/forgetpassword/email'} style={{textDecoration:'none'}}>
            <button className={styles.option_button}  >
              <img src="/Images/Auth/email.svg" alt="Email" className={styles.icon_email} />
              Forgot with email
              <img src="/Images/Auth/arrowhead-up 1.png" alt="Arrow" className={styles.icon_arrow} />
            </button>
          </Link>
          <Link to={'/forgetpassword/phone'} style={{textDecoration:'none'}}>
            <button className={styles.option_button}  >
              <img src="/Images/Auth/phone.svg" alt="Phone" className={styles.icon_phone} />
              Forgot with phone number
              <img src="/Images/Auth/arrowhead-up 1.png" alt="Arrow" className={styles.icon_arrow} />
            </button>
          </Link>
        </div>
      </div >
    // </>
  );

};
export default ForgotPassword;
