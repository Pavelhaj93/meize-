import Nav from "../Nav";
import Footer from "../Footer";
import Head from "next/head";
import {generateTitle} from "../../helpers/meta";
import {getLocaleStrings} from "../../helpers/languages";
import {useRouter} from "next/router";

export default function MainLayout({children, title, description, theme = 'black', className = '', paddingTop = true, ...rest}) {
    const lang = getLocaleStrings(useRouter().locale, 'og');

    return (
        <>
            <Head>
                <title>{generateTitle(title, lang.title)}</title>
            </Head>
            <div
                className={`min-h-screen flex flex-col ${paddingTop ? 'pt-[56px] sm:pt-[72px]' : ''} ${className}`} {...rest}>
                <Nav theme={theme}/>
                <main className="flex-1">
                    {children}
                </main>
                <Footer/>
            </div>
        </>
    )
}