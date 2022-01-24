import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import styles from "../styles/index.module.scss"

import buttonArrow from "../public/images/next-bl.svg"

export default function Home() {
  return (
    <div className={styles.mainHero}>
      {/* Meta Head Component ⬇︎ */}
      <Head>
        <title>gridbase® studio | Home</title>
        <meta
          name="description"
          content="We're helping you define your brand's identity, and build an
          immersive experience around it. We provide a seamless flow of ideas in the fields of web design, creative direction, photography and videography."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Meta Head Component ⬆︎ */}

      {/* Main Hero Grid ⬇︎ */}
      <div className={styles.mainHeroGrid}>
        <div className={styles.headingWrap}>
          <h1 className={styles.titleLarge}>Well crafted</h1>
        </div>
        <div className={styles.ParagraphContainer}>
          <p className="universalPAG">
            We&apos;re helping you define your brand&apos;s identity, and build
            an immersive experience around it.
          </p>
          <p className="universalPAG">
            We provide a seamless flow of ideas in the fields of web design,
            creative direction, photography and videography.
          </p>
        </div>
        <div className={styles.SphereContainer}>
          <h1 className={styles.brandTitle}>brands</h1>
          <img
            className={styles.brandSphere}
            src="/images/design/dark-shadow-sphere.png"
            alt="gradient sphere with brand content"
          />
        </div>
        <div className={styles.headingWrapBase}>
          <h1 className={styles.titleMedium}>can sell anything</h1>
        </div>
        <div className={styles.ButtonContainer}>
          <Link href="/gallery">
            <a className={styles.heroButton}>see our work</a>
          </Link>
          <img
            src="images/left-tri-arrow.png"
            alt="small button arrow"
            className={styles.buttonArrow}
          />
        </div>
      </div>
      {/* Main Hero Grid ⬆︎ */}

      {/* Black Brand Description Section ⬇︎ */}
      <div className={styles.blackBrandDesc}>
        <div className={styles.launchSection}>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
      </div>
      {/* Black Brand Description Section ⬆︎ */}
    </div>
  )
}
