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
        <h1 className={styles.text}>Home</h1>
        <p className={styles.text}>Ho ho ho</p>
        <Link href ="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
