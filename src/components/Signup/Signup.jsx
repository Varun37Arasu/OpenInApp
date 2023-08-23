import React, { useState } from "react";
import styles from "../signup.module.css";
import Fields from "./Fields";
// import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";

import { Link } from "react-router-dom";

const client_id =
  "723821405767-ji0ev0f7vltr5ki6gohl8uh9ii31n6b8.apps.googleusercontent.com";

const GoogleLoginButton = () => {
  const button = (
    <button className={styles.google}>
      <img src="google.png" alt="" />
      <p>Sign in with Google</p>
    </button>
  );

  return button;
};

const Signup = () => {
  const [verified, setVerified] = useState(false);
  const logo = "google.png";

  if (verified) {
    window.location.href = "https://open-in-app-three.vercel.app/dashboard";
  }

  return (
    <>
      <div className={styles.signupContainer}>
        <div className={styles.leftboard}>Board.</div>
        <div className={styles.rightboard}>
          <div className={styles.box}>
            <h2>Sign In</h2>
            <h5>Sign in to your account</h5>
            <div className={styles.auth}>
              <LoginSocialGoogle
                hideLogo={true}
                client_id={client_id}
                scope="openid profile email"
                discoveryDocs="claims_supported"
                access_type="offline"
                onResolve={({ provider, data }) => {
                  console.log(provider, data);
                  console.log(data.email_verified);
                  setVerified(data.email_verified);
                }}
                onReject={(err) => {
                  console.log(err);
                }}
              >
                <GoogleLoginButton />
              </LoginSocialGoogle>
              <button className={styles.google}>
                <img src="apple.png" alt="" />
                <p>Sign in with Apple</p>
              </button>
              {verified}
            </div>

            <div
              id="signup-form"
              className={styles.signup_form}
              action="/dashboard"
              // method="POST"
            >
              <Fields
                label="Email address"
                placeholder="johndoe@gmail.com"
                type="email"
              />

              <Fields label="Password" placeholder="password" type="password" />

              <a className={styles.forgot} href="#">
                {" "}
                Forgot password?{" "}
              </a>
              <Link to="/dashboard" className={styles.submit}>
                <span className={styles.span}>Sign In</span>
              </Link>
            </div>
            <p className={styles.noaccount}>
              Don't have an account?{" "}
              <span>
                <Link
                  to="#
                "
                >
                  Register here
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
