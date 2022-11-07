import {config} from '@react-spring/web';
import useScrollTo from 'react-spring-scroll-to-hook';

import '../styles/globals.css';
import {Fragment, useEffect} from "react";
import Head from 'next/head';
import {useRouter} from "next/router";

const baseUrl = 'https://www.meize.com';


function MyApp({Component, pageProps}) {
    const {scrollTo} = useScrollTo();
    const {locales, locale, defaultLocale, asPath} = useRouter();
    const ogUrl = (locale === defaultLocale ? `${baseUrl}${asPath}` : `${baseUrl}${locale}${asPath}`).split('?')[0];

    const router = useRouter();


    useEffect(() => {

        router.events.on('routeChangeStart', (url, {shallow}) => {
            scrollTo(0);
        })
        router.events.on('routeChangeComplete', (url, {shallow}) => {
            console.log(`App is Changed to ${url}`)
        })
    }, []);

    return (
        <>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#222222"/>
                <meta name="msapplication-TileColor" content="#222222"/>
                <meta name="theme-color" content="#222222"/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content={ogUrl}/>

                <link rel="canonical" href={ogUrl}/>

                {locales.map((lang) => {
                    const path = asPath === '/' ? '' : asPath;
                    const langPath = lang === defaultLocale ? '' : `/${lang}`;
                    const url = `${baseUrl}${langPath}${path}`;

                    return (
                        <Fragment key={`LinkAlternate: ${lang}`}>
                            {lang === defaultLocale && (
                                <link rel="alternate" href={url} hrefLang="x-default"/>
                            )}
                            <link rel="alternate" href={url} hrefLang={lang}/>
                        </Fragment>
                    )
                })}
            </Head>

            <Component {...pageProps} />
        </>
    )
}

export default MyApp
