import Image from 'next/image'
import { CardImage } from '../components/Card'
import styles from './Staff.module.css'

export default function Staff() {
    return (
        <div id={styles.staff}>
            <h3>Notre équipe</h3>
            <h1>Membres</h1>
            <div className={styles.cards}>
                <CardImage>
                    <Image alt="Chef" src="/john-doe2.jpg" width="170" height="180"/>
                    <h1>Nom</h1>
                    <h3>Fonction</h3>
                </CardImage>
                <CardImage>
                    <Image alt="Chef" src="/john-doe3.jpg" width="170" height="180"/>
                    <h1>Nom</h1>
                    <h3>Fonction</h3>
                </CardImage>
                <CardImage>
                    <Image alt="Chef" src="/john-doe5.jpg" width="170" height="180"/>
                    <h1>Nom</h1>
                    <h3>Fonction</h3>
                </CardImage>
            </div>
        </div>
    )
}