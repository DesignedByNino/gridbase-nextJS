import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/footer.module.scss"

export default function Footer() {
  return (
    <div className={styles.mainFooter}>
      <div className={styles.footerLeft}></div>
      <div className={styles.footerRight}></div>
    </div>
  )
}