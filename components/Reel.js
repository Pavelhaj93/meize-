import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import Container from "./Container";

let videoInterval;

export default function Reel({ reels, className = "", ...rest }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseEnter = (index) => {
    clearInterval(videoInterval);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => resetInterval();

  const handleIndexChange = useCallback(() => {
    setActiveIndex((activeIndex + 1) % reels.length);
  }, [activeIndex, reels.length]);

  const resetInterval = useCallback(() => {
    clearInterval(videoInterval);
    videoInterval = setInterval(handleIndexChange, 6000);
  }, [handleIndexChange]);

  useEffect(() => {
    resetInterval();
    return () => clearInterval(videoInterval);
  }, [resetInterval]);

  return (
    <section
      className={`relative w-full bg-cover ${
        activeIndex === 0
          ? 'bg-[url("/projects/anna-von-lipa/thumbnail.jpg")]'
          : activeIndex === 1
          ? 'bg-[url("/projects/trezor/reelScreenshot.png")]'
          : activeIndex === 2
          ? 'bg-[url("/projects/angus-farm/reelScreenshot.png")]'
          : ""
      } pt-[56.25%] ${className}`}
      {...rest}
    >
      <video
        src={reels[activeIndex].videos.short}
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        loop={true}
        playsInline={true}
        muted={true}
        autoPlay={true}
      />

      <Container className="absolute left-1/2 -translate-x-1/2 top-3/4 flex items-center justify-center gap-24">
        {reels.map(({ title, slug, client, href }, key) => {
          return (
            <Link key={key} href={`/projects/${slug}`}>
              <a
                className={`${
                  activeIndex === key ? "text-white" : "text-white/60"
                } mouse-hover:text-white inline-flex flex-col items-center text-center transition-colors duration-500 uppercase`}
                onMouseEnter={() => handleMouseEnter(key)}
                onMouseLeave={handleMouseLeave}
              >
                <span className="font-sans-alt text-2xl font-extrabold tracking-tighter">
                  {title}
                </span>
                <span className="font-serif text-base tracking-widest">
                  {client}
                </span>
              </a>
            </Link>
          );
        })}
      </Container>
    </section>
  );
}
