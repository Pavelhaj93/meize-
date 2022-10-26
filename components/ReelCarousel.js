import Image from "next/image";
import {useCallback, useEffect, useState} from "react";
import CarouselDots from "./CarouselDots";

let carouselInterval;

export default function ReelCarousel({images, reels, className = '', ...rest}) {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleIndexChange = useCallback(() => {
        setActiveIndex((activeIndex + 1) % reels.length);
    }, [activeIndex, reels.length]);

    const resetInterval = useCallback(() => {
        clearInterval(carouselInterval);
        carouselInterval = setInterval(handleIndexChange, 5000);
    }, [handleIndexChange]);

    useEffect(() => {
        resetInterval();

        return () => clearInterval(carouselInterval);
    }, [resetInterval]);

    return (
        <section className="h-[80vh] bg-black relative overflow-hidden">
            {images.map((image, key) => {
                return (
                    <div
                        className={`absolute top-0 left-0 w-full h-full bg-black overflow-hidden transition-opacity duration-500 ${key === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                        key={`Image: ${key}`}
                    >
                        <Image src={image} layout="fill" objectFit="cover" alt=""/>
                        <div className="absolute top-0 left-0 w-full h-full bg-black/50"/>
                    </div>
                )
            })}

            <CarouselDots items={images}
                          active={activeIndex}
                          onClick={(index) => {
                              setActiveIndex(index);
                              resetInterval();
                          }}
                          className="absolute bottom-[30px] left-1/2 -translate-x-1/2 z-10"
            />
        </section>
    )
}