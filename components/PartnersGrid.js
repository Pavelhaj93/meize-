import Image from "next/image";
import unibrick from "../public/logos/unibrick.png";
import tekstyl from "../public/logos/tekstyl.png";
import amos from "../public/logos/amos-academy.png";
import st from "../public/logos/srovnejto.png";
import skj from "../public/logos/slavnost-kralovny-johanky.png";
import pbs from "../public/logos/prague-breakin-school.png";
import pg from "../public/logos/parallel-garden.png";
import kt from "../public/logos/klaus-timber.png";
import jad from "../public/logos/jencik-a-dcery.png";
import fs from "../public/logos/fashion-show.png";
import avl from "../public/logos/anna-von-lipa.png";
import af from "../public/logos/angus-farm.png";
import Link from "next/link";


const partners = [
    {
        name: 'unibrick',
        link: 'https://',
        image: unibrick,
    },
    {
        name: 'tekstyl',
        link: 'https://',
        image: tekstyl,
    },
    {
        name: 'Amos Academy',
        link: 'https://www.amos.academy',
        image: amos,
    },
    {
        name: 'st',
        link: 'https://',
        image: st,
    },
    {
        name: 'skj',
        link: 'https://',
        image: skj,
    },
    {
        name: 'pbs',
        link: 'https://',
        image: pbs,
    },
    {
        name: 'pg',
        link: 'https://',
        image: pg,
    },
    {
        name: 'kt',
        link: 'https://',
        image: kt,
    },
    {
        name: 'jad',
        link: 'https://',
        image: jad,
    },
    {
        name: 'fs',
        link: 'https://',
        image: fs,
    },
    {
        name: 'avl',
        link: 'https://',
        image: avl,
    },
    {
        name: 'af',
        link: 'https://',
        image: af,
    },
];

export default function PartnersGrid({className = '', ...rest}) {
    return (
        <div className={`flex flex-wrap justify-center text-0 ${className}`}>
            {partners.map(({name, link, image}, key) => {
                return (
                    <Link href={link}
                          key={`Partner: ${key}`}
                    >
                        <a
                            target="_blank"
                            rel="nofollow noreferrer"
                            className="w-full max-w-[250px] p-5 sm:p-10 h-40 sm:h-52 sm:max-w-1/2 lg:max-w-1/3 xl:max-w-1/5 mouse-hover:scale-105 opacity-60 grayscale mouse-hover:grayscale-0 mouse-hover:opacity-100 transition-all duration-500 will-change-transform flex justify-center items-center"
                        >
                            <div className="relative w-full h-full max-h-32">
                                <Image src={image} layout="fill" objectFit="contain"/>
                            </div>
                        </a>
                    </Link>
                )
            })}
        </div>
    )
}