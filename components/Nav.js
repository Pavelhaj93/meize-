import Container from "./Container";
import {useCallback, useEffect, useState} from "react";
import {getScrolledFromTop} from "../helpers/scroll";
import LogoLink from "./LogoLink";
import BurgerButton from "./BurgerButton";
import BurgerMenu from "./BurgerMenu";
import {links} from "../helpers/nav";
import {useRouter} from "next/router";
import {getLocaleStrings} from "../helpers/languages";
import LanguageSwitcher from "./LanguageSwitcher";
import NavLink from "./NavLink";

export default function Nav({theme = 'black', className = ''}) {
    const lang = getLocaleStrings(useRouter().locale);

    const [scrolled, setScrolled] = useState(false);
    const [burgerActive, setBurgerActive] = useState(false);

    const themeClasses = theme === 'white' ? 'text-white' : 'text-black';

    const handleScroll = () => setScrolled(getScrolledFromTop() > 50);

    const handleBurgerClick = () => setBurgerActive(!burgerActive)

    const handleResize = useCallback(() => {
        if (window.innerWidth >= 640 && burgerActive) {
            setBurgerActive(false);
        }
    }, [burgerActive]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        }
    }, [handleResize]);

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-30 ${className}`}>
                <div
                    className={`absolute shadow-2xl top-0 left-0 w-full bg-white transition-all duration-500 ${(scrolled && !burgerActive) ? 'h-full' : 'h-0'}`}
                />

                <Container className="relative flex items-center justify-between py-4 sm:py-6">
                    <div className="flex-1 hidden sm:flex  items-center gap-16">
                        {links.left.map(({href, title}, key) => {
                            return (
                                <NavLink key={`NavLinksRight:${key}`}
                                         href={href}
                                         className={scrolled ? 'text-black' : themeClasses}
                                >
                                    {title(lang)}
                                </NavLink>
                            )
                        })}
                    </div>
                    <div
                        className={`flex-1 sm:flex-none text-center sm:text-left transition-colors duration-300 ${(scrolled || burgerActive) ? 'text-black' : themeClasses}`}
                    >
                        <LogoLink/>
                    </div>

                    <div className="flex-1 hidden sm:flex  items-center gap-16 justify-end">
                        {links.right.map(({href, title}, key) => {
                            return (
                                <NavLink key={`NavLinksRight:${key}`}
                                         href={href}
                                         className={scrolled ? 'text-black' : themeClasses}
                                >
                                    {title(lang)}
                                </NavLink>
                            )
                        })}

                        <LanguageSwitcher className={scrolled ? 'text-black' : themeClasses}/>
                    </div>

                    <div className="absolute top-1/2 -translate-y-1/2 right-4 block sm:hidden text-right text-0">
                        <BurgerButton onClick={handleBurgerClick}
                                      active={burgerActive}
                                      theme={theme}
                                      scrolled={scrolled}
                        />
                    </div>
                </Container>
            </nav>
            <BurgerMenu active={burgerActive}/>
        </>
    )
}