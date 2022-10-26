import SvgLogoVault from "./svg/SvgLogoVault";

const partners = [
    <SvgLogoVault/>,
    <SvgLogoVault/>,
    <SvgLogoVault/>,
    <SvgLogoVault/>,
    <SvgLogoVault/>,
    <SvgLogoVault/>,
    <SvgLogoVault/>,
    <SvgLogoVault/>,
    <SvgLogoVault/>,
    <SvgLogoVault/>,
    <SvgLogoVault/>,
    <SvgLogoVault/>,
    <SvgLogoVault/>,
    <SvgLogoVault/>,
    <SvgLogoVault/>,
    <SvgLogoVault/>,
    <SvgLogoVault/>,
    <SvgLogoVault/>,
    <SvgLogoVault/>,
    <SvgLogoVault/>,
];

export default function PartnersGrid({className = '', ...rest}) {
    return (
        <div className={`grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-10 ${className}`}>
            {partners.map((partner, key) => {
                return (
                    <div className="w-full flex justify-center items-center" key={`Partner: ${key}`}>
                        {partner}
                    </div>
                )
            })}
        </div>
    )
}