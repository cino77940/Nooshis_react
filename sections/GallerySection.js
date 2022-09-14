import Container from '../components/Container'
import Gallery from '../components/Gallery'
import styles from './GallerySection.module.css'
import { PrimaryButton } from '../components/Button'

export default function GallerySection() {
    return (
        <Container id={styles.gallery}>
            <h3>Album</h3>
            <h1>Nos plats</h1>
            <Gallery id={styles.images}/>
        </Container>
    )
}