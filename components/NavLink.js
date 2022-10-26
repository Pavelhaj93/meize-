import Link from "next/link";

export default function NavLink({href, children, className = '', ...rest}) {
    return (
        <Link href={href}>
            <a className={`uppercase font-bold mouse-hover:text-blue-600 transition-colors duration-200 ${className}`}
               {...rest}
            >
                {children}
            </a>
        </Link>
    )
}