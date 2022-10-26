import {links} from "../helpers/nav";
import Link from "next/link";
import Button from "./Button";
import Container from "./Container";
import {getLocaleStrings} from "../helpers/languages";
import {useRouter} from "next/router";

const allLinks = [...links.left, ...links.right];

export default function BurgerMenu({className = '', active, ...rest}) {
    const lang = getLocaleStrings(useRouter().locale);

    return (
        <nav
            className={`sm:hidden fixed top-0 left-0 w-full h-full bg-white z-20 transition-all duration-500 ${active ? '' : '-translate-y-full'} ${className}`} {...rest}>
            <Container className="flex flex-col justify-center items-center gap-8 h-full">
                {allLinks.map(({href, title}, key) => {
                    return (
                        <Link href={href} key={`BurgerMenu: ${key}`}>
                            <a className={`uppercase font-bold text-3xl tracking-wider mouse-hover:text-blue-600 ${!active ? 'opacity-0 -translate-y-1/2' : ''}`}
                               style={{
                                   transition: active ? `opacity 0.3s ease ${(key + 1) * 0.15}s, transform 0.3s ease ${(key + 1) * 0.15}s, color 0.3s ease` : 'opacity 0.3s ease, transform 0s ease 0.3s',
                               }}
                            >
                                {title(lang)}
                            </a>
                        </Link>
                    )
                })}
                <div className="mt-10 w-full">
                    <Button href="/contact"
                            theme="primary"
                            size="custom"
                            textSize="big"
                            padding="custom"
                            className={`p-2.5 ${!active ? 'opacity-0 -translate-y-1/2' : ''}`}
                            style={{
                                transition: active ? `opacity 0.3s ease ${(allLinks.length + 1) * 0.15}s, transform 0.3s ease ${(allLinks.length + 1) * 0.15}s, color 0.3s ease, background 0.3s ease` : 'opacity 0.3s ease, transform 0s ease 0.3s',
                            }}
                    >
                        Get In Touch
                    </Button>
                </div>
            </Container>
        </nav>
    )
}