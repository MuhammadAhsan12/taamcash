import React from "react";
import styles from "./verification.module.css";
// import logo from "/Images/Auth/Mask group.png";

const VerificationPage = () => {
  return (
    <>

      <div className={styles.verification_container}>
      <div className={styles.mask_group}>
        <img src="/Images/Auth/Mask group.png" alt="Mask Group" />
      </div>
        <div className={styles.verification_card}>
          <form>
            <div>Verification</div>
            <p>
              Enter your 4 digits code 
              that you<br></br> received on your email.
            </p>
            <div className={styles.code_inputs}>
              <input /> <input /> <input /> <input />
            </div>
            <div className={styles.timer}>00:30</div>
            <button type="submit">Continue</button>

            <div className={styles.resend}>
              If you didn't receive a code?
              <button type="button">Resend</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default VerificationPage;
