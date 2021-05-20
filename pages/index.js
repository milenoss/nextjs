import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>Serverless-yogi|Home</title>
        <meta name="keywords" content="home"/>
      </Head>
      <div className={styles.title}>
        <h1 className={styles.text}>Namaste</h1>
        <Link href ="/blogs">
          <a className={styles.btn}>See my work</a>
        </Link>
      </div>
    </>
  )
}
