import { PrimaryButton } from '../components/Button'
import { TextInput } from '../components/Input'
import styles from './EmailList.module.css'

export default function EmailList() {
    return (
        <div id={styles.email}>
            <h2>Abonnez vous à notre newsletter</h2>
            <div className={styles['input-group']}>
                <TextInput placeholder="Enter your email" />
                <PrimaryButton>S'abonner</PrimaryButton>
            </div>
        </div>
    )
}