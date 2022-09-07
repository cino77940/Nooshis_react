import { PrimaryButton } from '../components/Button'
import Container from '../components/Container'
import { TextAreaInput, TextInput } from '../components/Input'
import styles from './Contact.module.css'

export default function ContactSection() {
    return (
        <Container id={styles['contact-us']}>
            <h1>Contact</h1>
            <div className={styles.fields}>
                <TextInput type="text" placeholder="Nom" />
                <TextInput type="email" placeholder="Email" />
                <TextAreaInput rows="6" placeholder="Message"></TextAreaInput>
                <PrimaryButton>Envoyer</PrimaryButton>
            </div>
        </Container>
    )
}