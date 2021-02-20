import Head from 'next/head'
import Footer from '../comps/footer'
import Navbar from '../comps/Nav'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <h1>Homepage</h1>
      <p>Ho ho ho</p>
      <Footer/>
    </div>
  )
}
