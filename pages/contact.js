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
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2649.7227273072094!2d2.9538750513157686!3d48.38506237914199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ef42cbec38e755%3A0x112078c3c2aff3c1!2s5%20Rue%20du%20Dr%20Arthur%20Petit%2C%2077130%20Montereau-Fault-Yonne!5e0!3m2!1sfr!2sfr!4v1662707007715!5m2!1sfr!2sfr"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        />
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
