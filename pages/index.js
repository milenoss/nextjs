import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>Ho ho ho</p>
      <Link href ="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
    </div>
  )
}
