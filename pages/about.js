import Container from '../components/Container'
import Banner from '../sections/Banner'
import ImageText from '../sections/ImageText'
import NavbarSection from '../sections/NavbarSection'
// import Staff from '../sections/Staff'
import Footer from '../sections/Footer'
import Head from 'next/head'
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div id={styles.about}>
            <Head>
                <title>Nooshi's</title>
                <meta name="description" content="NextJs restaurant template" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container>
                <NavbarSection />
            </Container>
            <Banner id={styles.banner} background="/restaurant-bg.png" text="A Propos De Nous"/>
            <Container className={styles.spacing}>
                <ImageText variant="ltr" background="/about-bg.jpg">
                    <h3>Qualité</h3>
                    <h1>Notre standard</h1>
                    <p>Les plats chez Nooshi's, ce sont avant tout des produits de qualité sélectionnés avec soin.</p>
                </ImageText>
                <ImageText variant="rtl" background="/about-bg.jpg">
                    <h3>Frais</h3>
                    <h1>Cuisine à la demande</h1>
                    <p>Des plats élaborés avec des produits frais et cuisiné à la demande</p>
                </ImageText>
                {/* <Staff /> */}
                <Footer />
            </Container>
        </div>
    )
}