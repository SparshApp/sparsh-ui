import React from "react";
import Link from "next/link";
import styles from "./Socials.module.scss";
import { SiTwitter, SiInstagram, SiLinkedin } from "react-icons/si";

const Socials = () => {
  return (
    <div className={styles.socialContainer}>
      <Link className={styles.socialLink} href="https://twitter.com">
        <SiTwitter size={24} />
      </Link>
      <Link className={styles.socialLink} href="https://instagram.com">
        <SiInstagram size={24} />
      </Link>
      <Link className={styles.socialLink} href="https://linkedin.com">
        <SiLinkedin size={24} />
      </Link>
    </div>
  );
};

export default Socials;
