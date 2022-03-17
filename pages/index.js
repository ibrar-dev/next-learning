import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../component/Navbar'
import Footer from '../component/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja list | Home</title>
      <meta name='keywords' content='ninjas' />
    </Head>
    <div >
      <h1 className={styles.title}>
        Home Page
      </h1>
      <p className={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
         <p className={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
         readable content of a page when looking at its layout. </p>
        <Link  href="/ninjas"> 
          <a className={styles.btn}>
            See Ninja Listing
          </a>
         </Link>
    </div>
    </>
  )
}
