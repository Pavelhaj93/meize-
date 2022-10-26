import Link from "next/link";

export default function LogoLink({className = '', ...rest}) {
    return (
        <Link href="/">
            <a className={`inline-flex font-sans font-extrabold uppercase tracking-tighter text-4xl ${className}`} {...rest}>
                Meize
            </a>
        </Link>
    )
}