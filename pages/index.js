import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.title}>
      <h1 className={styles.text}>Homepage</h1>
      <p className={styles.text}>Ho ho ho</p>
      <Link href ="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  )
}
