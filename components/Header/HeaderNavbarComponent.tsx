import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
type Props = {};

const HeaderNavbarComponent = (props: Props) => {
  return (
    <ul className={styles.navbar_ul}>
      <li className={styles.navbar_li}>
        <Link href={"/upload"} className={styles.link}>
          Upload GIF
        </Link>
      </li>
      <li className={styles.navbar_li}>
        <Link href={"/contact"} className={styles.link}>
          Contact Us
        </Link>
      </li>
      <li className={styles.navbar_li}>
        <Link href={"/profile"} className={styles.link}>
          Profile
        </Link>
      </li>
    </ul>
  );
};

export default HeaderNavbarComponent;
