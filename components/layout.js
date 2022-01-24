// components/layout.js

import Navbar from "./Navbar"
import Footer from "./Footer"
import Head from "next/head"

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Cormorant+Upright:wght@300;400;500;600;700&family=Darker+Grotesque:wght@300;400;500;600;700;800;900&family=Questrial&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
