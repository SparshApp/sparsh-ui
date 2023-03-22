'use client';
import Head from "next/head";
import styles from "./Settings.module.scss";

import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import Socials from "../../components/Socials";

const SettingsPage = () => {
  return (
    <>
      <Head>
        <title>Settings - My App</title>
      </Head>
      <div className={styles.settingsPageContainer}>
        <h1 className={styles.settingsPageHeading}>Settings</h1>
        <form className={styles.settingsPageForm}>
          <label className={styles.settingsPageFormLabel} htmlFor="name-input">Name:</label>
          <TextInput
            label=""
            value=""
            type="text"
            onChange={() => {}}
            placeholder="Your Name"
          />
          <label className={styles.settingsPageFormLabel} htmlFor="email-input">Email:</label>
          <TextInput
            label=""
            value=""
            type="email"
            onChange={() => {}}
            placeholder="you@example.com"
          />
          <label className={styles.settingsPageFormLabel} htmlFor="password-input">
            Password:
          </label>
          <TextInput
            label=""
            value=""
            type="password"
            onChange={() => {}}
            placeholder="********"
          />
          <Button>Save</Button>
        </form>
        <Socials />
      </div>
    </>
  );
};

export default SettingsPage;
