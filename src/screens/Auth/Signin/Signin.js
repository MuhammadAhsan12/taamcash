import React from "react";

import styles from "./SignIn.module.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <div className={styles.login_container}>
        <div className={styles.login}>
          <div className={styles.mask_group}>
            <img src="/Images/Auth/Mask group.png" alt="Mask Group" />
            <div className={styles.welcome}>Welcome!</div>
          </div>
          <div className={styles.login_form}>
            <div className={styles.signInText} >
              Sign In
            </div>
            <form>
              <div className={styles.input_group}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="@ Admin123" />
              </div>
              <div className={styles.input_group}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="|***" />
                <img src="/Images/Auth/Icon eye.png" alt="Show Password" className={styles.eye_icon} />
              </div>
              <div className={styles.actions}>
                <div className={styles.checkbox}>
                  <input type="checkbox" id="remember-me" />
                  <label htmlFor="remember-me">Remember Me</label>
                </div>
                <Link to="/forgetpassword" className={styles.forgetText}>
                  Forgot Password?
                </Link>
              </div>
              <Link to={"/dashboard"}>
                <button className={styles.button} type="submit">Sign In</button>
              </Link>
            </form>
          </div>
        </div>
        <div className={styles.illustration}>
          <img src="/Images/Auth/taamcashbg.svg" alt="TaamCash Demo" />
        </div>
      </div>
    </>
  );
};

export default SignIn;
