import Link from "next/link";
import { getLocaleStrings } from "../helpers/languages";
import { useRouter } from "next/router";
import { setLocaleCookies } from "../helpers/cookies";

export default function LanguageSwitcher({ className = "", ...rest }) {
  const { locale, locales, asPath } = useRouter();
  const lang = getLocaleStrings(locale);

  return (
    <div
      className={`relative cursor-pointer transition-all uppercase font-bold 
       `}
    >
      {locales.map((localeItem, index) => {
        return (
          <Link
            href={asPath}
            locale={localeItem}
            key={`NavLang: ${localeItem}`}
          >
            <a
              className={`${className}`}
              onClick={() => setLocaleCookies(localeItem)}
            >
              <span className="hover:text-primary transition-colors duration-200">
                {lang.common[localeItem]}
              </span>
              {index < 1 && <span className="mx-1"> / </span>}
            </a>
          </Link>
        );
      })}
    </div>
  );
}
