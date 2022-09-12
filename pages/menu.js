import Image from 'next/image'
import Container from '../components/Container'
import NavbarSection from '../sections/NavbarSection'
import Banner from '../sections/Banner'
import Footer from '../sections/Footer'
import { MenuCard, MenuHeader, MenuItem } from '../components/MenuCard'
import styles from '../styles/Menu.module.css'

export default function Menu() {
    return (
        <div id={styles.menu}>
            <Container>
                <NavbarSection></NavbarSection>
            </Container>
            <Banner id={styles.banner} background="/restaurant-bg.png" text="La Carte" />
            <Container>
                <div id={styles.cards}>
                    <MenuCard className={styles.card}>
                        <MenuHeader>
                            <h2>Noodles</h2>
                            <Image alt="Noodles" src="/noodles.jpg" width="75px" height="85px"/>
                        </MenuHeader>
                        <MenuItem 
                            title="Poulet"
                            price="9.50"
                        />
                        <MenuItem 
                            title="Poulet Pané"
                            price="10.50"
                        />
                        <MenuItem 
                            title="Saumon"
                            price="9.90"
                        />
                        <MenuItem 
                            title="Spicy Saumon"
                            price="10.50"
                        />
                        <MenuItem 
                            title="Boeuf"
                            price="11.50"
                        />

                    </MenuCard>
                    
                    <MenuCard className={styles.card}>
                        <MenuHeader>
                            <h2>Donburi</h2>
                            <Image alt="Donburi" src="/donburi.jpg" width="75px" height="85px"/>
                        </MenuHeader>
                        <MenuItem 
                            title="Légumes"
                            price="9.90"
                        />
                        <MenuItem 
                            title="Poulet Pané"
                            price="11.90"
                        />
                        <MenuItem 
                            title="Saumon"
                            price="12.50"
                        />
                        <MenuItem 
                            title="Boeuf"
                            price="12.90"
                        />
                        <MenuItem 
                            title="Spécial Donburi"
                            price="13.50"
                        />
                    </MenuCard>
               
                    <MenuCard className={styles.card}>
                        <MenuHeader>
                            <h2>Pokebowl</h2>
                            <Image alt="Donburi" src="/donburi.jpg" width="75px" height="85px"/>
                        </MenuHeader>
                        <MenuItem 
                            title="Boeuf"
                            price="13.90"
                        />
                        <MenuItem 
                            title="Poulet"
                            price="11.90"
                        />
                        <MenuItem 
                            title="Saumon"
                            price="12.90"
                        />
                        <MenuItem 
                            title="Spicy Saumon"
                            price="13.50"
                        />
                        <MenuItem 
                            title="Thon"
                            price="14.90"
                        />
                        <MenuItem 
                            title="Thon Mayo"
                            price="10.90"
                        />
                        <MenuItem 
                            title="Veggie"
                            price="8.90"
                        />
                    </MenuCard>
                </div>

                <div id={styles.cards}>
                    <MenuCard className={styles.card}>
                        <MenuHeader>
                            <h2>Sashimi</h2>
                            <Image alt="Sashimi" src="/sashimi.jpg" width="80px" height="80px"/>
                            <h4>X6 X12</h4>

                        </MenuHeader>
                        <MenuItem 
                            title="Saumon"
                            price="6.00€ / 11.00"
                        />
                        <MenuItem 
                            title="Tataki Saumon"
                            price="6.50€ / 12.00"
                        />
                        <MenuItem 
                            title="Thon"
                            price="7.00€ / 13.50"
                        />
                        <MenuItem 
                            title="Tataki Thon"
                            price="7.50€ / 13.90"
                        />
                    </MenuCard>


                    <MenuCard className={styles.card}>
                        <MenuHeader>
                            <h2>SpecialRoll</h2>
                            <Image alt="Specialroll" src="/specialroll.png" width="80px" height="80px"/>

                        </MenuHeader>
                        <MenuItem 
                            title="W Dragon"
                            price="9.90"
                        />
                        <MenuItem 
                            title="W Tiger"
                            price="9.90"
                        />
                        <MenuItem 
                            title="Crispy Dragon"
                            price="9.90"
                        />
                    </MenuCard>
                    <MenuCard className={styles.card}>
                        <MenuHeader>
                            <h2>Boissons</h2>
                            <Image alt="pizza-icon" src="/soda.png" width="50px" height="60px"/>
                        </MenuHeader>
                        <MenuItem 
                            title="Soft 33cl"
                            description="Coca Cola, Coca Cherry, Fanta Orange, Fanta Citron, Orangina, Schweppes Agrumes, Ice Tea, Oasis Tropical, Perrier."
                            price="1.50"
                        />
            
                        <MenuItem 
                            title="Mangajo 25cl"            
                            description="Grenade & Thé Vert, Japanes Yuzu & Lemon"
                            price="0.99"
                        />
                        <MenuItem 
                            title="Eau"
                            description="Eau"
                            price="1"
                        />
                    
                    </MenuCard>
                </div>
                <Footer />
            </Container>
        </div>
    )
}