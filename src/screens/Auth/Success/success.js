import React from 'react';
import styles from'./success.module.css'; 

const SuccessPage = () => {
  return (
    <div className={styles.success_page_wrapper}>
      <div className={styles.logo_container}>
        <img src="/Images/Auth/Mask group.png" alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.success_page_container}>
        <img src="/Images/Auth/success.svg" alt="Success" className={styles.success_image} />
        <div className={styles.success_message_container}>
          <div>Successfully</div>
          <p>Your password has been reset successfully</p>
          <ConfirmButton />
        </div>
      </div>
    </div>
  );
};
const ConfirmButton = () => {
  return (
    <button className={styles.confirm_button}>
      Confirm
    </button>
  );
};

export default SuccessPage;
