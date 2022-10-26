import MainLayout from "../components/layouts/MainLayout";
import Container from "../components/Container";
import {contacts, socials} from "../helpers/contacts";
import imageHayden from "../public/images/hayden4.jpg";
import Image from "next/image";

export default function Contact() {
    return (
        <MainLayout theme="black" paddingTop={true}>
            <Container className="first-container">
                <section className="flex flex-col gap-8">
                    <header>
                        <h1 className="title-big font-[1000]">
                            Get in Touch
                        </h1>
                    </header>
                </section>
            </Container>

            <Container>
                <div className="relative w-full aspect-[5/2]">
                    <Image src={imageHayden} layout="fill" objectFit="cover"/>
                </div>
            </Container>

            <Container className="pt-20 flex flex-col gap-12 lg:gap-28">
                <section
                    className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-0 max-w-[1000px] mx-auto">
                    <header className="flex-1">
                        <h2 className="title-medium md:leading-none">
                            General Inquiries
                        </h2>
                    </header>
                    <div className="flex-1 flex flex-col items-center lg:items-start gap-2 lg:gap-4 lg:pt-6">
                        {contacts.map(({href, title}, key) => {
                            return (
                                <a href={href}
                                   className="inline-flex text-black mouse-hover:text-blue-600 transition-colors duration-300 border-b border-transparent mouse-hover:border-blue-600"
                                   key={`Contacts: ${key}`}
                                >
                                    {title}
                                </a>
                            )
                        })}
                    </div>
                </section>

                <section
                    className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-0 max-w-[1000px] mx-auto">
                    <header className="flex-1">
                        <h2 className="title-medium md:leading-none">
                            Follow Us
                        </h2>
                    </header>
                    <div className="flex-1 flex flex-col lg:flex-row items-center flex-wrap gap-4 lg:pt-6">
                        {socials.map(({href, title}, key) => {
                            return (
                                <>
                                    <a href={href}
                                       className="inline-flex text-black mouse-hover:text-blue-600 transition-colors duration-300 uppercase font-bold text-xl leading-none"
                                       key={`Contacts: ${key}`}
                                       target="_blank"
                                       rel="nofollow noreferrer"
                                    >
                                        {title}
                                    </a>
                                    {key !== socials.length - 1 && (
                                        <span
                                            className="hidden lg:inline-flex text-black/30 font-bold text-xl leading-none relative -top-0.5">|</span>
                                    )}
                                </>
                            )
                        })}
                    </div>
                </section>

                <section
                    className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-0 max-w-[1000px] mx-auto">
                    <header className="flex-1">
                        <h2 className="title-medium md:leading-none">
                            Message Us
                        </h2>
                    </header>
                    <div className="flex-1 lg:pt-6">
                        [form]
                    </div>
                </section>
            </Container>

        </MainLayout>
    )
}
