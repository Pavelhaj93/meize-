import Container from "./Container";
import Button from "./Button";
import Input from "./Input";
import {socials} from "../helpers/contacts";
import {getLocaleStrings} from "../helpers/languages";
import {useRouter} from "next/router";

export default function Footer() {
    const lang = getLocaleStrings(useRouter().locale, 'common');

    return (
        <footer className="pt-24 pb-6">
            <Container className="flex flex-col lg:flex-row lg:justify-between items-center gap-10 lg:gap-20">
                <div
                    className="w-full flex flex-col md:flex-row lg:flex-col xl:flex-row justify-between items-center md:items-stretch lg:items-center xl:items-stretch gap-4">
                    <Button href="/contact"
                            theme="primary"
                            size="custom"
                            textSize="big"
                            padding="custom"
                            className="p-2.5 md:p-0 lg:p-2.5 xl:p-0 max-w-none md:max-w-[300px] lg:max-w-none xl:max-w-[300px]"
                    >
                        {lang.ctaButton}
                    </Button>
                    <div className="flex-1 w-full">
                        <form action="" className="w-full flex items-stretch h-full">
                            <Input type="email" placeholder={lang.yourEmail} className="flex-1"/>
                            <Button type="submit"
                                    theme="secondary"
                                    size="small"
                                    textSize="tiny"
                                    className="max-w-[150px]"
                                    padding="none"
                            >
                                {lang.subscribe}
                            </Button>
                        </form>
                    </div>
                </div>

                <div
                    className="flex flex-wrap lg:flex-nowrap justify-center sm:justify-start items-center gap-y-4 gap-x-10 md:gap-4 xl:gap-10">
                    {socials.map(({href, title}, key) => {
                        return (
                            <a href={href}
                               target="_blank"
                               rel="nofollow noreferrer"
                               className="uppercase font-extrabold tracking-tight2 text-lg mouse-hover:text-blue-600 transition-colors duration-300"
                               key={`FooterSocial: ${key}`}
                            >
                                {title}
                            </a>
                        )
                    })}
                </div>
            </Container>
        </footer>
    )
}