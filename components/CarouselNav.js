export default function CarouselNav({items, onClick, active, className= '', ...rest}) {
    return (
        <nav className={`flex items-center justify-center gap-6 ${className}`} {...rest}>
            {items.map((item, key) => {
                return (
                    <button onClick={() => onClick(key)}
                            key={`TestimonialNav: ${key}`}
                            className={`inline-flex w-12 rounded-full aspect-square bg-transparent inline-flex items-center justify-center leading-none border ${active === key ? 'border-blue-600 text-blue-600' : 'border-black/50 text-black/50 mouse-hover:border-blue-600 mouse-hover:text-blue-600'} transition-colors duration-300`}
                    >
                        {key + 1}
                    </button>
                )
            })}
        </nav>
    )
}