const partners = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
];

export default function PartnersGrid({className = '', ...rest}) {
    return (
        <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 ${className}`}>
            {partners.map((partner, key) => {
                return (
                    <div className="w-full aspect-[3/2] bg-blue-600" key={`Partner: ${key}`}>
                        {partner}
                    </div>
                )
            })}
        </div>
    )
}