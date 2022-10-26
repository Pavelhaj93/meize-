import Container from "./Container";
import {useCallback, useEffect, useState} from "react";
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
    const [languageActive, setLanguageActive] = useState(false);

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
        setScrolled(getScrolledFromTop() > 10);
    };

    const handleBurgerClick = (e) => {
        setBurgerActive(!burgerActive);
    }

    const handleResize = useCallback(() => {
        if (window.innerWidth >= 640 && burgerActive) {
            setBurgerActive(false);
        }
    }, [burgerActive]);

    const handleLanguageClick = (e) => {
        setLanguageActive(!languageActive);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        }
    }, [handleResize]);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-30 ${className}`}>
                <div
                    className={`absolute shadow-2xl top-0 left-0 w-full h-full bg-white transition-all duration-500 ${(scrolled && !burgerActive) ? 'h-full' : 'h-0'}`}/>

                <Container className="relative flex items-center justify-between py-4 sm:py-6">
                    <div className="flex-1 hidden sm:flex  items-center gap-16">
                        {links.left.map(({href, title}, key) => {
                            return (
                                <Link href={href} key={`NavLinkLeft: ${key}`}>
                                    <a className={`uppercase font-bold ${scrolled ? 'text-black' : themeClasses} mouse-hover:text-blue-600 transition-colors duration-200`}>{title}</a>
                                </Link>
                            )
                        })}
                    </div>
                    <div
                        className={`flex-1 sm:flex-none text-center sm:text-left ${(scrolled || burgerActive) ? 'text-black' : themeClasses} transition-colors duration-300`}>
                        <LogoLink/>
                    </div>
                    <div className="flex-1 hidden sm:flex  items-center gap-16 justify-end">
                        {links.right.map(({href, title, type, items}, key) => {
                            const classes = `uppercase font-bold ${scrolled ? 'text-black' : themeClasses} transition-colors duration-200`;
                            if (type !== 'dropdown') {
                                return (
                                    <Link href={href} key={`NavLinkRight: ${key}`}>
                                        <a className={`${classes} mouse-hover:text-blue-600`}>{title}</a>
                                    </Link>
                                )
                            }

                            return (
                                <div
                                    key={`NavLinkRight: ${key}`}
                                    className={`${classes} relative ${languageActive ? 'bg-black2 text-white 2px-2' : ''} cursor-pointer transition-all`}
                                    onClick={handleLanguageClick}
                                    onMouseEnter={handleLanguageClick}
                                    onMouseLeave={() => setLanguageActive(false)}
                                >
                                    <span className="relative z-10">{title}</span>
                                    <div
                                        className={`absolute -top-[10px] -right-[10px] w-[calc(100%+20px)] bg-black p-2 text-right transition-all duration-200 ${languageActive ? 'translate-y-0 opacity-100 pointer-events-auto pt-[40px]' : 'opacity-0 pointer-events-none translate-y-4'}`}>
                                        {items.map(({title, href, ...rest}) => {
                                            return (
                                                <Link href={href} key={`Lang: ${title}`} {...rest}>
                                                    <a className="block text-white hover:text-white/60 transition-colors duration-200">{title}</a>
                                                </Link>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
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