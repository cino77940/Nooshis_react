import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook} from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer id={styles.footer}>
            <Image alt="logo" src="/Nooshis.png" width="270" height="60"/>
            <ul>
                <li><Link href="/">Acceuil</Link></li>
                <li><Link href="/about">A Propos</Link></li>
                <li><Link href="/menu">Menu</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
            <div className={styles.social}>
                
            {/* <a href="#"><FaFacebook style={{ color: "var(--text-gray)" }} size={28} /></a> */}
            <a href="https://www.instagram.com/nooshis_ns"><AiFillInstagram style={{ color: "var(--text-gray)" }} size={28} /></a>
            {/* <a href="#"><FaYoutube style={{ color: "var(--text-gray)" }} size={28} /></a> */}
            </div>

            <p>Tout droit reservé © - 2022</p>
        </footer>
    )
}