import Link from "next/link";

export default function LogoLink({className = '', ...rest}) {
    return (
        <Link href="/">
            <a className={`inline-flex ${className}`} {...rest}>
                logo
            </a>
        </Link>
    )
}