import Container from "./Container";
import {useEffect, useState} from "react";
import {getScrolledFromTop} from "../helpers/scroll";
import Link from "next/link";
import LogoLink from "./LogoLink";
import BurgerButton from "./BurgerButton";
import BurgerMenu from "./BurgerMenu";
import {links} from "../helpers/nav";

let themeClasses;

export default function Nav({theme = 'black', className = ''}) {
    const [scrolled, setScrolled] = useState(false);
    const [burgerActive, setBurgerActive] = useState(false);

    switch (theme) {
        case 'white':
            themeClasses = 'text-white';
            break;
        case 'black':
        default:
            themeClasses = 'text-black';
            break;
    }

    const handleScroll = () => {
        setScrolled(getScrolledFromTop() > 100);
    };

    const handleBurgerClick = (e) => {
        setBurgerActive(!burgerActive);
    }

    const handleResize = () => {
        if (window.innerWidth >= 640 && burgerActive) {
            setBurgerActive(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-30 ${className}`}>
                <div
                    className={`absolute top-0 left-0 w-full h-full bg-white transition-all duration-500 ${(scrolled && !burgerActive) ? 'h-full' : 'h-0'}`}/>

                <Container className="relative flex items-center justify-between py-4 sm:py-6">
                    <div className="flex-1 hidden sm:flex  items-center gap-16">
                        {links.left.map(({href, title}, key) => {
                            return (
                                <Link href={href} key={`NavLinkLeft: ${key}`}>
                                    <a className={`font-sans-alt tracking-tight uppercase font-bold ${scrolled ? 'text-black' : themeClasses} mouse-hover:text-blue-600 transition-colors duration-200`}>{title}</a>
                                </Link>
                            )
                        })}
                    </div>
                    <div
                        className={`flex-1 sm:flex-none text-center sm:text-left ${(scrolled || burgerActive) ? 'text-black' : themeClasses} transition-colors duration-300`}>
                        <LogoLink/>
                    </div>
                    <div className="flex-1 hidden sm:flex  items-center gap-16 justify-end">
                        {links.right.map(({href, title}, key) => {
                            return (
                                <Link href={href} key={`NavLinkRight: ${key}`}>
                                    <a className={`font-sans-alt tracking-tight uppercase font-bold ${scrolled ? 'text-black' : themeClasses} mouse-hover:text-blue-600 transition-colors duration-200`}>{title}</a>
                                </Link>
                            )
                        })}
                    </div>
                    <div className="block sm:hidden text-right text-0">
                        <BurgerButton onClick={handleBurgerClick}
                                      active={burgerActive}
                                      theme={theme}
                        />
                    </div>
                </Container>
            </nav>
            <BurgerMenu active={burgerActive}/>
        </>
    )
}