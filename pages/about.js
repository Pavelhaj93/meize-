import MainLayout from "../components/layouts/MainLayout";
import Container from "../components/Container";
import Typo from "../components/Typo";
import PartnersGrid from "../components/PartnersGrid";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import Image from "next/image";

import haydenImage from "../public/images/hayden3.jpg";
import haydenImage2 from "../public/images/hayden2.jpg";
import haydenImage3 from "../public/images/hayden4.jpg";

export default function About() {
    return (
        <MainLayout theme="black" paddingTop={true}>
            <Container className="first-container">
                <section className="flex flex-col gap-8">
                    <header className="text-center">
                        <h1 className="title-big md:max-w-[30ch] mx-auto">
                            <span className="font-sans font-normal">
                                <b>Meize</b> je <b>kreativní produkční studio</b>.{' '}
                                Precizně dokážeme splnit jakýkoli požadavek a <b>máme rádi výzvy</b>.
                            </span>
                            {/*<span className="font-sans font-normal">Meize is an award-winning{' '}</span>*/}
                            {/*<b className="font-sans">creative and production studio</b>{' '}*/}
                            {/*<span className="font-sans font-normal">known for work that feels more like entertainment than advertising.</span>*/}
                        </h1>
                    </header>

                    <Typo className="text-center max-w-[65ch]">
                        We partner with brands, agencies, and platforms to create campaigns, commercials, and branded
                        content with authenticity at its core. Our award-winning roster of directors represents the next
                        generation of storytellers, working across commercial and documentary genres.
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
                    <Image src={haydenImage} layout="fill" objectFit="cover" alt=""/>
                </div>
                <div className="relative aspect-video">
                    <Image src={haydenImage2} layout="fill" objectFit="cover" alt=""/>
                </div>
                <div className="relative aspect-video">
                    <Image src={haydenImage3} layout="fill" objectFit="cover" alt=""/>
                </div>
            </Container>

            <Container className="mb-32 text-center">
                <section className="flex flex-col gap-8">
                    <header>
                        <h2 className="title-medium">
                            Select Partners
                        </h2>
                    </header>
                    <PartnersGrid/>
                </section>
            </Container>

            <Container className="pb-16 text-center">
                <section className="flex flex-col gap-8">
                    <header>
                        <h2 className="title-medium">
                            Real Feedback
                        </h2>
                    </header>

                    <TestimonialsCarousel/>
                </section>
            </Container>


        </MainLayout>
    )
}
