import styles from "./Footer.module.scss";
import Socials from "../Socials/Socials";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <Socials />
      <p className={styles.copyright}>
        &copy; 2023 Sparsh Srivastava. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
