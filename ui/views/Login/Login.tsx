'use client';
import React from "react";
import styles from "./Login.module.scss";

import TextInput from "../../components/TextInput";
import Button from "../../components/Button";

const Login = () => {
  const handleSubmit = () => {
    // handle form submission here
    console.log("Login");
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h1 className={styles.loginHeading}>Login</h1>
        <TextInput
          label="Email"
          value=""
          type="email"
          placeholder="Email"
          onChange={() => {
            console.log("Email input changed");
          }}
        />
        <TextInput
          label="Password"
          value=""
          type="password"
          placeholder="Password"
          onChange={() => {
            console.log("Email input changed");
          }}
        />
        <div className={styles.buttonWrapper}>
          <Button>Login</Button>
          <Button>Sign up</Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
