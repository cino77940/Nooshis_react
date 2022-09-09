import { useRouter } from 'next/router'
import Container from '../components/Container'
import NavbarSection from './NavbarSection'
import { PrimaryButton } from '../components/Button'
import { motion } from 'framer-motion'
import styles from './Hero.module.css'
import { FaRegClock } from 'react-icons/fa'

export default function Hero() {

    const router = useRouter()

    return (
        <Container id={styles.hero}>
            <NavbarSection />

            <motion.div 
                variants={variants}
                initial="initial"
                animate="animate"
                transition={{ stiffness: 10000, delayChildren: .1, staggerChildren: .25 }}
                className={styles.showcase}
            >
            
                <motion.div className={styles.text} variants={variants}>
                
                    <h1>Noodles & Sushis</h1>
                    <p>SERVICE DE LIVRAISON & RETRAIT À EMPORTER</p>
                    <p>  
                        <ul>
                            <li className={styles.clock}><FaRegClock style={{ color: "var(--text-gray)" }} size={28} /></li>
                            <li>Lundi : Fermé</li>
                            <li>Mardi à Jeudi : 11h00 - 14h30 | 18h30 - 23h</li>
                            <li>Vendredi: 18h30 - 23h</li>
                            <li>Week-end: 11h - 14h30 | 18h30 - 23h</li>
                        </ul>
                    </p>
                    <div className={styles.button}>
                    <PrimaryButton onClick={() => router.push("https://nooshisst.hiboutik.com/food/")}>Commander</PrimaryButton>
                    <PrimaryButton onClick={() => router.push("https://drive.google.com/file/d/13-QxSLOg5ZJeF4dToUiTfusFcTBk5HP-/view")}>Télécharger le menu</PrimaryButton>
                    </div>
                </motion.div>
                <motion.div className={styles.images} variants={variants}>
                    <div className={styles.image1}></div>
                </motion.div>
            </motion.div>
        </Container>
    )
}

const variants= {
    initial: { opacity: 0, transform: "translateY(-50px)" },
    animate: { opacity: 1, transform: "translateY(0px)",  }
}