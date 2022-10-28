import MainLayout from "../components/layouts/MainLayout";
import Container from "../components/Container";
import Typo from "../components/Typo";
import PartnersGrid from "../components/PartnersGrid";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import Image from "next/image";

import aboutImage from "../public/images/about1.jpg";
import aboutImage2 from "../public/images/about2.jpg";
import aboutImage3 from "../public/images/about3.jpg";
import {getLocaleStrings} from "../helpers/languages";
import {useRouter} from "next/router";

export default function About() {
    const lang = getLocaleStrings(useRouter().locale, 'about');

    return (
        <MainLayout theme="black"
                    paddingTop={true}
                    title={lang.title}
        >
            <Container className="first-container">
                <section className="flex flex-col gap-8">
                    <header className="text-center">
                        <h1 className="title-big md:max-w-[30ch] mx-auto">
                            <span className="font-sans font-normal"
                                  dangerouslySetInnerHTML={{__html: lang.headline}}
                            />
                        </h1>
                    </header>

                    <Typo className="text-center max-w-[65ch]">
                        {lang.intro}
                    </Typo>
                </section>
            </Container>

            {/*<Container className="py-16">*/}
            {/*    <header className="text-center flex flex-col gap-4">*/}
            {/*        <h2 className="title-medium">*/}
            {/*            Services*/}
            {/*        </h2>*/}
            {/*        <Typo className="max-w-[80ch]">*/}
            {/*            Our family of services gives brands and agencies the opportunity to create cinematic content at*/}
            {/*            scale and with incredible agility. We offer a highly individualized approach to commercial*/}
            {/*            production, creative services, and entertainment. Every project is different, and we tailor our*/}
            {/*            services to the needs of the project.*/}
            {/*        </Typo>*/}
            {/*    </header>*/}
            {/*    <ServicesGrid className="py-16"/>*/}
            {/*</Container>*/}

            <Container className="mb-32 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="relative aspect-video">
                    <Image src={aboutImage} layout="fill" objectFit="cover" alt=""/>
                </div>
                <div className="relative aspect-video">
                    <Image src={aboutImage2} layout="fill" objectFit="cover" alt=""/>
                </div>
                <div className="relative aspect-video">
                    <Image src={aboutImage3} layout="fill" objectFit="cover" alt=""/>
                </div>
            </Container>

            <Container className="mb-32 text-center">
                <section className="flex flex-col gap-8">
                    <header>
                        <h2 className="title-medium">
                            {lang.partners}
                        </h2>
                    </header>
                    <PartnersGrid/>
                </section>
            </Container>

            <Container className="pb-16 text-center">
                <section className="flex flex-col gap-8">
                    <header>
                        <h2 className="title-medium">
                            {lang.feedback}
                        </h2>
                    </header>

                    <TestimonialsCarousel/>
                </section>
            </Container>


        </MainLayout>
    )
}
