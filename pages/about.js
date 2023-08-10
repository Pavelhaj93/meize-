import MainLayout from "../components/layouts/MainLayout";
import Container from "../components/Container";
import Typo from "../components/Typo";
import PartnersGrid from "../components/PartnersGrid";
import Image from "next/image";

import aboutImage from "../public/images/about1.jpg";
import aboutImage2 from "../public/images/about2.jpg";
import aboutImage3 from "../public/images/about3.jpg";
import {getLocaleStrings} from "../helpers/languages";
import {useRouter} from "next/router";

export default function About() {
    const lang = getLocaleStrings(useRouter().locale, 'about');
    const {locale} = useRouter();

    return (
        <MainLayout theme="black"
                    paddingTop={true}
                    title={lang.title}
        >
            <Container className="first-container">
                <section className="flex flex-col gap-8 mb-24">
                    <header className="text-center">
                        <h1 className={`title-big max-w-[18ch] sm:max-w-[23ch] ${locale === 'en' ? 'md:max-w-[30ch]' : 'md:max-w-[27ch]'} mx-auto`}>
                            <span className="font-sans font-normal"
                                  dangerouslySetInnerHTML={{__html: lang.headline}}
                            />
                        </h1>
                    </header>

                    <Typo className="text-center max-w-[85ch]">
                        {lang.intro}
                    </Typo>
                </section>

                <section className="flex flex-col gap-8">
                    <header className="text-center">
                        <h2 className="title-medium max-w-[18ch] sm:max-w-[23ch] md:max-w-[30ch] mx-auto">
                            <span className="font-sans font-bold"
                                  dangerouslySetInnerHTML={{__html: lang.subheadline}}
                            />
                        </h2>
                    </header>

                    <Typo className="text-center max-w-[84ch]">
                        {lang.subintro}
                    </Typo>
                </section>
            </Container>

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

            <Container className="text-center">
                <section className="flex flex-col gap-8">
                    <header>
                        <h2 className="title-medium">
                            {lang.partners}
                        </h2>
                    </header>
                    <PartnersGrid/>
                </section>
            </Container>

            {/*<Container className="pb-16 text-center">*/}
            {/*    <section className="flex flex-col gap-8">*/}
            {/*        <header>*/}
            {/*            <h2 className="title-medium">*/}
            {/*                {lang.feedback}*/}
            {/*            </h2>*/}
            {/*        </header>*/}

            {/*        <TestimonialsCarousel/>*/}
            {/*    </section>*/}
            {/*</Container>*/}


        </MainLayout>
    )
}
