import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import {useEffect, useState} from "react";
import {getProjectsInReel} from "../helpers/projects";

import haydenImage from "../public/images/hayden2.jpg";

let videoInterval;

const reels = getProjectsInReel();

export default function Reel({className = '', ...rest}) {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleMouseEnter = (index) => {
        clearInterval(videoInterval);
        setActiveIndex(index);
    }

    const handleMouseLeave = () => resetInterval();

    const handleIndexChange = () => setActiveIndex((activeIndex + 1) % reels.length);

    const resetInterval = () => {
        clearInterval(videoInterval);
        videoInterval = setInterval(handleIndexChange, 5000);
    };

    useEffect(() => {
        resetInterval();

        return () => clearInterval(videoInterval);
    }, [handleIndexChange]);

    return (
        <section className={`relative w-full bg-black aspect-video ${className}`} {...rest}>
            <div className="absolute top-0 left-0 w-full h-full bg-black overflow-hidden">
                <Image src={haydenImage} layout="responsive" objectFit="cover"/>
            </div>
            <video src={reels[activeIndex].reelVideo}
                   className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
                   loop={true}
                   playsInline={true}
                   muted={true}
                   autoPlay={true}
            />
            <span className="text-white">{activeIndex}</span>
            <Container className="absolute left-1/2 -translate-x-1/2 top-3/4 flex items-center justify-center gap-24">
                {reels.map(({title, slug, client, href}, key) => {
                    return (
                        <Link key={key} href={`/projects/${slug}`}>
                            <a className={`${activeIndex === key ? 'text-white' : 'text-white/60'} mouse-hover:text-white inline-flex flex-col items-center text-center transition-colors duration-500 uppercase`}
                               onMouseEnter={() => handleMouseEnter(key)}
                               onMouseLeave={handleMouseLeave}
                            >
                                <span className="font-sans-alt text-2xl font-extrabold tracking-tighter">{title}</span>
                                <span className="font-serif text-base tracking-widest">{client}</span>
                            </a>
                        </Link>
                    );
                })}
            </Container>
        </section>
    )
}