import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/gallery.module.scss'

import HeaderArrow from '../public/grid-long-arrow.svg'

export default function WorkGallery() {
  return (
    <div className={styles.mainGallery}>
    {/* Main Gallery Container ⬇︎ */}

      {/* Meta Head Component ⬇︎ */}
      <Head>
        <title>gridbase® studio | Work Gallery</title>
        <meta name="description" content="We&apos;re helping you define your brand&apos;s identity, and build an immersive experience around it. We provide a seamless flow of ideas in the fields of web design, creative direction, photography and videography." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Meta Head Component ⬆︎ */}

      {/* Gallery Header Class ⬇︎ */}
      <div className={styles.galleryHeader}>
        <div className={styles.HeadingContainer}>
          <h1 className={styles.galleryHeading}>The work that moves us froward and defines our creative vision.</h1>
        </div>
        <div className={styles.DescriptionContainer}>
          <p className={styles.galleryDescription}>Looking at a new project as an opportunity to try a fresh perspective. We have a great time finding new ways to end the same problem, in a better more creative and expressive statement.</p>
        </div>
        <div className={styles.HeaderArrowContainer}>
          <a href="#GalleryTop" className={styles.HeaderArrowLink}>
            <Image src={HeaderArrow} alt='Header Arrow' className={styles.HeaderArrow} width={75}/>
          </a>
        </div>
      </div>
      {/* Gallery Header Class ⬆︎ */}

    {/* Main Gallery Container ⬆︎ */}
    </div>
  )
}