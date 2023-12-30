import { links } from "../helpers/nav";
import Link from "next/link";
import Button from "./Button";
import Container from "./Container";
import { getLocaleStrings } from "../helpers/languages";
import { useRouter } from "next/router";
import { setLocaleCookies } from "../helpers/cookies";
import SvgFlag from "./svg/SvgFlag";

const allLinks = [...links.left, ...links.right];

export default function BurgerMenu({
  className = "",
  active,
  setBurgerActive,
  ...rest
}) {
  const { locale, locales, asPath } = useRouter();
  const lang = getLocaleStrings(locale);

  const handleClickLink = () => setBurgerActive(false);

  return (
    <nav
      className={`sm:hidden fixed top-0 left-0 w-full h-full bg-white z-20 transition-all duration-500 ${
        active ? "" : "-translate-y-full"
      } ${className}`}
      {...rest}
    >
      <Container className="flex flex-col justify-center items-center gap-8 h-full">
        {allLinks.map(({ href, title }, key) => {
          return (
            <Link href={href} key={`BurgerMenu: ${key}`}>
              <a
                className={`uppercase font-bold text-3xl tracking-wider mouse-hover:text-primary ${
                  !active ? "opacity-0 -translate-y-1/2" : ""
                }`}
                style={{
                  transition: active
                    ? `opacity 0.3s ease ${
                        (key + 1) * 0.15
                      }s, transform 0.3s ease ${
                        (key + 1) * 0.15
                      }s, color 0.3s ease`
                    : "opacity 0.3s ease, transform 0s ease 0.3s",
                }}
                onClick={handleClickLink}
              >
                {title(lang)}
              </a>
            </Link>
          );
        })}
        <div className="mt-10 w-full">
          <Button
            href="/contact"
            theme="primary"
            size="custom"
            textSize="big"
            padding="custom"
            className={`p-2.5 ${!active ? "opacity-0 -translate-y-1/2" : ""}`}
            style={{
              transition: active
                ? `opacity 0.3s ease ${
                    (allLinks.length + 1) * 0.15
                  }s, transform 0.3s ease ${
                    (allLinks.length + 1) * 0.15
                  }s, color 0.3s ease, background 0.3s ease`
                : "opacity 0.3s ease, transform 0s ease 0.3s",
            }}
            onClick={handleClickLink}
          >
            Get In Touch
          </Button>
        </div>
        <div className={`mt-10 flex items-center gap-10`}>
          {locales.map((localeItem, key) => {
            return (
              <Link
                href={asPath}
                locale={localeItem}
                key={`NavLang: ${localeItem}`}
              >
                <a
                  className={`flex items-center gap-2 text-white hover:text-white/60 transition-colors duration-200 ${
                    !active ? "opacity-0 -translate-y-1/2" : ""
                  }`}
                  onClick={() => {
                    setLocaleCookies(localeItem);
                    handleClickLink();
                  }}
                  style={{
                    transition: active
                      ? `opacity 0.3s ease ${
                          (allLinks.length + 2 + key) * 0.15
                        }s, transform 0.3s ease ${
                          (allLinks.length + 2 + key) * 0.15
                        }s, color 0.3s ease, background 0.3s ease`
                      : "opacity 0.3s ease, transform 0s ease 0.3s",
                  }}
                >
                  <span className="w-12 rounded-full overflow-hidden">
                    <SvgFlag country={localeItem} />
                  </span>
                </a>
              </Link>
            );
          })}
        </div>
      </Container>
    </nav>
  );
}
