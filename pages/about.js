import Head from 'next/head'
import styles from '../styles/Home.module.css'

const About = () => {
    return (
        <>
            <Head>
                <title>Ninja list | About</title>
                <meta name='keywords' content='ninjas' />
            </Head>
            <div>
                <h1 className={styles.title}>
                    About
                </h1>
                <p className={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
         <p className={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
         readable content of a page when looking at its layout. </p>

            </div>
        </>

    );
}

export default About;