import { useState } from 'react'
import { useRouter } from 'next/router'
import Container from '../components/Container'
import { PrimaryButton } from '../components/Button'
import { motion } from 'framer-motion'
import VisibilitySensor from 'react-visibility-sensor'
import styles from './About.module.css'

export default function About() {

    const [animated, setAnimated] = useState(false)

    const router = useRouter()

    return (
        <VisibilitySensor onChange={isVisible => isVisible&&setAnimated(true) }>
            {({isVisible}) =>
                <Container id={styles.about}>
                    <motion.div 
                        variants={variants1}
                        initial="initial"
                        animate={ animated ? "animate": "initial"}
                        transition={{ stiffness: 1000 }}
                        className={styles.image}
                    ></motion.div>
                    <motion.div 
                        variants={variants2}
                        initial="initial"
                        animate={ animated ? "animate": "initial"}
                        transition={{ stiffness: 1000 }}
                        className={styles.text}
                    >
                        <h3>A propos</h3>
                        <h1>Notre politique</h1>
                        <p>Nooshi's vous propose une large variété de sushis et des noodles uniquement à base de produits végétaux</p>
                        <strong><p>Depuis 2020</p></strong>
                        <PrimaryButton onClick={()=>router.push("/about")}>En savoir plus</PrimaryButton>
                    </motion.div>
                </Container>
            }
        </VisibilitySensor>
    )
}

const variants1 = {
    initial: { opacity: 0, transform: "translateX(-10px)" },
    animate: { opacity: 1, transform: "translateX(0px)" },
}

const variants2 = {
    initial: { opacity: 0, transform: "translateX(10px)" },
    animate: { opacity: 1, transform: "translateX(0px)" }
}