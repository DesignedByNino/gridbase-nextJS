
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/navbar.module.scss"

import logoImage from "../public/images/gridbase-default-s.svg"
import langSwitch from "../public/images/lang-switch.svg"


export default function Navbar() {
  return (
    <div className={styles.mainNav}>
      <div className={styles.brandContainer}>
      <Link href="/">
        <a>
          <img className={styles.logoImage} src="/images/gridbase-default-s.svg" alt="Logo Image" />
        </a>
      </Link>
      </div>
      <div className={styles.innerNav}>
        <div className={styles.linkContainer}>
          <div className={styles.langSwitchWrap}>
            <Link href="/">
              <Image
                src={langSwitch}
                alt="Language switch button"
                className={styles.langSwitch}
              />
            </Link>
          </div>
          <div className={styles.servicesLink}>
            <Link href="/">
              <a className="linkText">services</a>
            </Link>
          </div>
          <div className={styles.galleryLink}>
            <Link href="/gallery">
              <a className="linkText">work</a>
            </Link>
          </div>
          <div className={styles.contactLink}>
            <Link href="/contact">
              <a className="linkText">contact</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}