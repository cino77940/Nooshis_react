import Container from '../components/Container'
import Banner from '../sections/Banner'
import NavbarSection from '../sections/NavbarSection'
import Footer from '../sections/Footer'
import Head from 'next/head'
import styles from '../styles/Contact.module.css'
import { AiFillPhone } from 'react-icons/ai'
import { HiLocationMarker } from 'react-icons/hi'
import { FaEnvelope } from 'react-icons/fa'
import { TextAreaInputLabel, TextInputLabel } from '../components/Input'
import { PrimaryButton } from '../components/Button'

export default function About() {
    return (
        <div id={styles.contact}>
            <Head>
                <title>Nooshi's</title>
                <meta name="description" content="NextJs restaurant template" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container>
                <NavbarSection />
            </Container>
            <Banner id={styles.banner} background="/restaurant-bg.png" text="Nous contacter"/>
            <Container id={styles.form}>
                <div className={styles.subheader}>
                    <h2>Nous contacter</h2>
                    <p>Contactez-nous pour les réservations et demandes de renseignements</p>
                </div>

                <div className={styles.info}>
                    <div className={styles.cell}>
                        <HiLocationMarker size={28} />
                        <p>5 Rue du Dr Arthur Petit, 77130 Montereau-Fault-Yonne</p>
                    </div>
                </div>

                <div className={styles.info}>
                    <div className={styles.cell}>
                        <AiFillPhone size={28} />
                        <a href="tel:0175158084">01 75 15 80 84</a>
                    </div>

                    <div className={styles.cell}>
                        <FaEnvelope size={28} />
                        <a href="mailto:nooshis.adm@gmail.com">nooshis.adm@gmail.com</a>
                    </div>
                </div>

                <form>
                    <div className={styles.row}>
                        <div className={styles.left}>
                            <TextInputLabel type="text" label="Nom" />
                            <TextInputLabel type="email" label="Email" />
                            <TextInputLabel type="text" label="Numero" />
                        </div>
                        <div className={styles.right}>
                            <TextAreaInputLabel label="Message" rows="6">
                            </TextAreaInputLabel>
                        </div>
                    </div>
                    <PrimaryButton>Envoyer</PrimaryButton>
                </form>
                <Footer />
            </Container>
        </div>
    )
}
