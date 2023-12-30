import Link from "next/link";
import { useRef, useState } from "react";
import Image from "next/image";

export default function PreviewTile({
  title,
  client,
  slug,
  thumbnail,
  videos,
}) {
  const videoRef = useRef();
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    if (videoRef.current) videoRef.current.play();
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) videoRef.current.pause();
  };

  return (
    <Link href={`/projects/${slug}`}>
      <a
        className="relative overflow-hidden bg-red-100 group text-white title-shadow aspect-video flex items-center justify-center transition-colors"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* THUMBNAIL */}
        <div className="absolute top-0 left-0 w-full h-full flex">
          <Image
            src={thumbnail}
            className="w-full h-full object-cover"
            alt={title}
          />
        </div>

        {/* VIDEO ON HOVER */}
        {videos.short && (
          <video
            src={videos.short}
            className={`absolute top-0 left-0 w-full h-full bg-blue-600/60 ${
              hovered ? "opacity-100" : "opacity-0 pointer-events-none"
            } transition-opacity duration-300`}
            ref={videoRef}
            playsInline={true}
            muted={true}
            loop={true}
          />
        )}

        {!videos.short && (
          <div
            className={`absolute top-0 left-0 w-full h-full flex items-center justify-center bg-blue-600/60 font-sans-alt uppercase font-bold tracking-tight text-2xl p-4 text-center transition-opacity duration-300 ${
              hovered ? "" : "opacity-0"
            }`}
          >
            Coming soon
          </div>
        )}

        <div
          className={`absolute font-sans-alt uppercase font-bold tracking-tight text-2xl p-4 text-center transition-opacity duration-300 ${
            hovered ? "opacity-0" : ""
          }`}
        >
          {title}
        </div>

        {/*<div className="relative w-full text-center justify-center flex-wrap uppercase text-2xl leading-none hidden group-hover:flex gap-2 items-center p-4">*/}
        {/*    {client.split(' ').map((part, key) => {*/}
        {/*        return (*/}
        {/*            <span key={`part:${key}`}*/}
        {/*                  className={(key === 0) ? 'font-serif font-medium tracking-wide' : 'font-sans-alt font-extrabold tracking-tighter'}*/}
        {/*            >*/}
        {/*                {part}*/}
        {/*            </span>*/}
        {/*        )*/}
        {/*    })}*/}
        {/*</div>*/}
      </a>
    </Link>
  );
}
