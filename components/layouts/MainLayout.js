import Nav from "../Nav";
import Footer from "../Footer";
import Head from "next/head";

export default function MainLayout({children, theme = 'black', className = '', paddingTop = true, ...rest}) {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Mulish:wght@400;900&family=Work+Sans:wght@800;900&display=swap"
                    rel="stylesheet"/>
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