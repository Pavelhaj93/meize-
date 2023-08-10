import Image from "next/image";

export default function ScreenGrabs({images = [], className = '', ...rest}) {
    // padding top for 16/9


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {images.map((image, key) => {
                return (
                    <div className="w-full relative flex"
                         key={`ScreenGrab: ${key}`}
                    >
                        <Image src={image}
                               className="w-full"
                               alt={`Screen Grab: ${key}`}
                        />
                    </div>
                )
            })}
        </div>
    )
}