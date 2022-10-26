import Nav from "../Nav";
import Footer from "../Footer";

export default function MainLayout({children, theme = 'black', className = '', paddingTop = true, ...rest}) {
    return (
        <div
            className={`min-h-screen flex flex-col ${paddingTop ? 'pt-[56px] sm:pt-[72px]' : ''} ${className}`} {...rest}>
            <Nav theme={theme}/>
            <main className="flex-1">
                {children}
            </main>
            <Footer/>
        </div>
    )
}