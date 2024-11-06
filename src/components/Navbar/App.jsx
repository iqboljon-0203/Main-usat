import React from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
} from '@nextui-org/react';
import { HashLink as Link } from 'react-router-hash-link'
import UsatLogo from '../../assets/logos/usatLogo.webp';
import LanguageSelector from '../LanguageSelector/App';
import './Navbar.css';
import { useTranslation } from 'react-i18next';
export default function App({child}) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { t } = useTranslation();

    const scrollToSection = sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false); // Menu yopish
        }
    };

    const menuItems = [
        { label: t('universitet'), section: 'university' },
        { label: t('qulaylik'), section: 'qulayliklar' },
        { label: t('bakalavr'), section: 'bachelor' },
        { label: t('magistratura'), section: 'magistr' },
        { label: t('yangiliklar'), section: 'news' },
        { label: t('library'), section: 'library' },
        { label: t("bog'lanish"), section: 'contact' },
    ]

    return (
        <Navbar
            className="navbar"
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            style={
                child
                    ? { backgroundColor: '#21466D' }
                    : { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
            }
        >
            <NavbarContent justify="end">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                />
            </NavbarContent>
            <NavbarContent justify="start">
                <NavbarBrand>
                    <Link to={"/"}>
                    <img
                        loading="lazy"
                        src={UsatLogo}
                        
                        
                        alt="Usat logo"
                    ></img>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex" justify="center">
                {menuItems.map((item, index) => (
                    <NavbarItem key={index}>
                        <Link
                            to={
                                child ? `/#${item.section}`
                                    : `${item.section==="library"?"https://kutubxona.usat.uz/":``}`
                            }
                            onClick={() => scrollToSection(item.section)}
                            className="text-2xl font-inter font-medium leading-[1.82rem]  hover:cursor-pointer text-white  text-center"
                            color="foreground"
                        >
                            {item.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="ml-4">
                    <LanguageSelector />
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu className="pt-12">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.label}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2
                                    ? 'warning'
                                    : index === menuItems.length - 1
                                      ? 'danger'
                                      : 'foreground'
                            }
                            href="#"
                            size="lg"
                            onClick={() => scrollToSection(item.section)}
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}
