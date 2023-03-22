import Link from "next/link";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <Link
        className={styles.navLink}
        style={{ textDecoration: "none" }}
        href="/login"
      >
        Login
      </Link>
      <Link
        className={styles.navLink}
        style={{ textDecoration: "none" }}
        href="/profile"
      >
        Profile
      </Link>
      <Link
        className={styles.navLink}
        style={{ textDecoration: "none" }}
        href="/settings"
      >
        Settings
      </Link>
    </nav>
  );
};

export default Navbar;
