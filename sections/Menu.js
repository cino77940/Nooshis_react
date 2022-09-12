import { useRouter } from 'next/router'
import Image from 'next/image'
import Container from '../components/Container'
import { PrimaryButton } from '../components/Button'
import { MenuCard, MenuHeader, MenuItem } from '../components/MenuCard'
import styles from './Menu.module.css'

export default function Menu() {


    const router = useRouter()

    return (
        <Container id={styles.menu}>
            <h3>Menu</h3>
            <h1>Un avant gout</h1>
            <MenuCard>
                <MenuHeader>
                    <h2>Bowls</h2>
                    <Image alt="Les Bowls" src="/noodles.jpg" width="75px" height="90px"/>
                </MenuHeader>
                <MenuItem 
                    title="Noodles Poulet"
                    description="Un mélange de nouilles, de légumes et de poulet"
                    price="9.50"
                />
                <MenuItem 
                    title="Pokebowl Thon"
                    description=" Un mélange de riz, de légumes et de thon frais"
                    price="14.90"
                />
                <MenuItem 
                    title="Donburi Boeuf"
                    description="Un mélange de riz, de légumes et de boeuf"
                    price="12.90"
                />
                <MenuItem 
                    title="Chirashi saumon"
                    description="Un mélange de riz, de légumes et de saumon"
                    price="11.90"
                />
            </MenuCard>
            <PrimaryButton onClick={()=>router.push("/menu")}>Vois plus</PrimaryButton>
        </Container>
    )
}