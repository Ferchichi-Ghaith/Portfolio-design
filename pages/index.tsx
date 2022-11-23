import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Frontend Developer</title>
        <link rel="icon" href="fg_icon.png" />
        <meta name="author" content="ferchichi ghaith" />
        <meta name="keywords" content="ReactJS, NextJS" />
        <meta name="description" content="I am a talented Front-End developer " />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#2D2E32" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:site_name" content="ferchichi- Frontend Developer" />
        <meta property="og:locale" content="en_GB" />
        <title data-rh="true">الفرشيشي</title>
        <meta data-rh="true" property="og:type" content="website"/>
        <meta data-rh="true" property="og:title" content="ferchichi - Frontend Developer"/>
        <meta data-rh="true" property="og:image" content="/images/ghaithlogo.png"/>
      </Head>

      {/* Header */}
      <Header />

      <main>
        {/* About */}
        <About />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home;