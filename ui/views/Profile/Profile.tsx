'use client';
import styles from "./Profile.module.scss";
import { FaUserCircle } from "react-icons/fa";

import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import Socials from "../../components/Socials";

const Profile = () => {
  const handleSubmit = () => {
    // handle form submission here
    console.log("Form submitted");
  };

  return (
    <div className={styles.profilePageContainer}>
      <form className={styles.profileFormContainer} onSubmit={handleSubmit}>
        <div className={styles.profilePictureWrapper}>
          <FaUserCircle className={styles.profilePicture} />
        </div>
        <TextInput
          label="Full Name"
          value=""
          type="text"
          placeholder="Full Name"
          onChange={() => {
            console.log("Name input changed");
          }}
        />
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
            console.log("Password input changed");
          }}
        />
        <TextInput
          label="Confirm"
          value=""
          type="password"
          placeholder="Confirm"
          onChange={() => {
            console.log("Confirm input changed");
          }}
        />
        <Button>Save</Button>
        <Socials />
      </form>
    </div>
  );
};

export default Profile;
