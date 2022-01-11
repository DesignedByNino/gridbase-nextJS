import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/index.module.scss'

export default function Home() {
  return (
    <div className={styles.mainHero}>
      <Head>
        <title>gridbase® studio | Home</title>
        <meta name="description" content="We&apos;re helping you define your brand&apos;s identity, and build an immersive experience around it. We provide a seamless flow of ideas in the fields of web design, creative direction, photography and videography." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.topInnerHero}>
        <div className={styles.leftInnerHero}>
          <h1 className={styles.titleLarge}>Well crafted</h1>
          <div className={styles.innerParagraphContainer}>
            <p className={styles.universalPAG}>We&apos;re helping you define your brand&apos;s identity, and build an immersive experience around it.</p>
            <p className={styles.universalPAG}>We provide a seamless flow of ideas in the fields of web design, creative direction, photography and videography.</p>
          </div>
        </div>
        <div className={styles.rightInnerHero}>
          <div className={styles.sphereContainer}>
            <h1 className={styles.brandTitle}>brands</h1>
            <img className={styles.brandSphere} src='/images/design/gradient-oval.png' alt='gradient sphere with brand content' />
          </div>
        </div>
      </div>
      <div className={styles.middleHeroBar}>
        <div className={styles.leftHeroBarText}>
          <h1 className={styles.titleMedium}>can sell anything</h1>
        </div>
        <div className={styles.rightHeroBar}>
          <a href="#workGallery" className={styles.heroButton}>see our work</a>
        </div>
      </div>
    </div>
  )
}
