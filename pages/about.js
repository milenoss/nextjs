import Head from 'next/head'
import Image from 'next/image';

const About = () => { 
    return ( 
        <>
        <Head>
            <title>M.K|about</title>
            <meta name="keywords" content="about"/>
        </Head>
        <div> 
            <h1>About</h1>
            <p>Its your boy milen</p>
        <Image
          src="/millyz.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        </div>


        </>
    )
}
export default About; 