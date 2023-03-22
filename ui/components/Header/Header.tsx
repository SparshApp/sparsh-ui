import styles from "./Header.module.scss";
import Link from "next/link";
import Navbar from "components/Navbar";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <Link className={styles.logo} href="/">Sparsh App</Link>
      <Navbar />
    </header>
  );
};

export default Header;
