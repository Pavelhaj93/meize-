import Link from "next/link";
import {useRef, useState} from "react";

export default function PreviewTile({title, client, slug, thumbnail, video}) {
    const videoRef = useRef();
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    }


    return (
        <Link href={`/projects/${slug}`}>
            <a className="relative text-white title-shadow group mouse-hover:text-white aspect-video inline-flex items-center justify-center transition-colors duration-200"
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}
            >
                {/* THUMBNAIL */}
                <div className="absolute top-0 left-0 w-full h-full 2object-cover"
                     style={{backgroundImage: `url(${thumbnail})`, backgroundSize: 'cover'}}
                />
                {/* VIDEO ON HOVER */}
                <video src={video}
                       className={`absolute top-0 left-0 w-full h-full bg-blue-600/60 ${hovered ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-200`}/>

                <div className="relative font-sans-alt uppercase font-bold tracking-tight text-2xl group-hover:hidden p-4 text-center">
                    {title}
                </div>

                <div className="relative w-full text-center justify-center flex-wrap uppercase text-2xl leading-none hidden group-hover:flex gap-2 items-center p-4">
                    {client.split(' ').map((part, key) => {
                        return (
                            <span key={`part:${key}`}
                                  className={(key === 0) ? 'font-serif font-medium tracking-wide' : 'font-sans-alt font-extrabold tracking-tighter'}
                            >
                                {part}
                            </span>
                        )
                    })}
                </div>
            </a>
        </Link>
    )
}