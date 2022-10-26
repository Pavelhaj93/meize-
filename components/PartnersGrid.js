import SvgLogoVault from "./svg/SvgLogoVault";

const partners = [];

export default function PartnersGrid({className = '', ...rest}) {
    return (
        <div className={`grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-10 ${className}`}>
            {Array.from({length: 20}).map((partner, key) => {
                return (
                    <div className="w-full opacity-60 flex justify-center items-center" key={`Partner: ${key}`}>
                        <SvgLogoVault/>
                    </div>
                )
            })}
        </div>
    )
}