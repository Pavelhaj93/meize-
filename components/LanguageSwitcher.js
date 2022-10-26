import Link from "next/link";
import {useState} from "react";
import {getLocaleStrings} from "../helpers/languages";
import {useRouter} from "next/router";
import {setLocaleCookies} from "../helpers/cookies";

export default function LanguageSwitcher({className = '', ...rest}) {
    const {locale, locales, asPath} = useRouter();
    const lang = getLocaleStrings(locale);
    const [active, setActive] = useState(false);

    const handleLanguageClick = () => setActive(!active);

    return (
        <div
            className={`relative cursor-pointer transition-all uppercase font-bold ${active ? 'text-white' : ''} ${className}`}
            onClick={handleLanguageClick}
            onMouseEnter={handleLanguageClick}
            onMouseLeave={() => setActive(false)}
        >
            <span className="relative z-10">{lang.common.language}</span>
            <div
                className={`absolute -top-[10px] -right-[10px] w-[calc(100%+20px)] bg-black p-2 text-right transition-all duration-200 ${active ? 'translate-y-0 opacity-100 pointer-events-auto pt-[40px]' : 'opacity-0 pointer-events-none translate-y-4'}`}>
                {locales.map((localeItem, key) => {
                    return (
                        <Link href={asPath} locale={localeItem} key={`NavLang: ${localeItem}`}>
                            <a className="block text-white hover:text-white/60 transition-colors duration-200"
                               onClick={() => setLocaleCookies(localeItem)}
                            >
                                {lang.languages[localeItem]}
                            </a>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}