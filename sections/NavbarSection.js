import Image from 'next/image'
import { useState } from 'react'
import { Navbar, NavHeader, NavMenu, NavItem, Toggle, MotionResponsiveNavMenu } from '../components/Navbar'
import { AnimatePresence } from 'framer-motion'

export default function NavbarSection () {

    const [hide, setHide] = useState(true)

    return (
        <Navbar>
            <NavHeader href="/">
                <Image alt="logo" src="/Nooshis.png" width="270" height="60"/>
            </NavHeader>
            <NavMenu>                
                <NavItem href="/menu">La Carte</NavItem>
                <NavItem href="/contact">Contact</NavItem>
                <NavItem href="/about">A Propos</NavItem>
            </NavMenu>
            <AnimatePresence>
                { !hide && (
                    <MotionResponsiveNavMenu
                        variants={{
                            collapse: { opacity: 0, top: "-100px" },
                            show: { opacity: 1, top: 0 }
                        }}
                        initial="collapse"
                        animate="show"
                        exit="collapse"
                        transition={{ stiffness: 1000 }}
                    >
                        <NavItem href="/about">A Propos</NavItem>
                        <NavItem href="/menu">La Carte</NavItem>
                        <NavItem href="/contact">Contact</NavItem>
                    </MotionResponsiveNavMenu>
                ) }
            </AnimatePresence>
            <Toggle hide={hide} onClick={()=>setHide(!hide)}/>
        </Navbar>
    )
}