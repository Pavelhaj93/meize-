import useScrollTo from "react-spring-scroll-to-hook";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment, useEffect } from "react";
import { getLocaleStrings } from "../helpers/languages";
import "../styles/globals.css";

const baseUrl = "https://www.meize.com";

function MyApp({ Component, pageProps }) {
  const { scrollTo } = useScrollTo();

  const { locales, locale, defaultLocale, asPath } = useRouter();
  const ogUrl = (
    locale === defaultLocale
      ? `${baseUrl}${asPath}`
      : `${baseUrl}${locale}${asPath}`
  ).split("?")[0];

  const router = useRouter();
  const lang = getLocaleStrings(useRouter().locale, "og");

  useEffect(() => {
    router.events.on("routeChangeStart", (url, { shallow }) => {
      scrollTo(0);
    });
    router.events.on("routeChangeComplete", (url, { shallow }) => {
      console.log(`App is Changed to ${url}`);
    });
  }, [router.events, scrollTo]);

  return (
    <>
      <Head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#222222" />
        <meta name="msapplication-TileColor" content="#222222" />
        <meta name="theme-color" content="#222222" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:image" content="/favicon/kelimek.ico " />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta property="og:title" content={lang.title} />

        <link rel="canonical" href={ogUrl} />
        {locales.map((lang) => {
          const path = asPath === "/" ? "" : asPath;
          const langPath = lang === defaultLocale ? "" : `/${lang}`;
          const url = `${baseUrl}${langPath}${path}`;

          return (
            <Fragment key={`LinkAlternate: ${lang}`}>
              {lang === defaultLocale && (
                <link rel="alternate" href={url} hrefLang="x-default" />
              )}
              <link rel="alternate" href={url} hrefLang={lang} />
            </Fragment>
          );
        })}
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
