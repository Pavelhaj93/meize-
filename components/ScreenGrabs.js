export default function ScreenGrabs({slug = '', className = '', ...rest}) {
    const images = [];

    for (let i = 1; i <= 9; i++) {
        images.push(`/images/projects/${slug}/screengrab-${i}.jpg`);
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {images.map((image, key) => {
                return (
                    <div className={`w-full aspect-video bg-gradient-to-b ${key % 2 === 0 ? 'from-blue-600 to-black/50' : 'from-black to-blue-600/50'} will-change-transform`}
                         key={`ScreenGrab: ${slug}-${key}`}
                    />
                )
            })}
        </div>
    )
}