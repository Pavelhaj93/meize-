import Link from "next/link";
import {useRouter} from "next/router";
import {getLocaleStrings} from "../helpers/languages";

function ButtonArrowBody({direction, label}) {
    if (direction === 'previous') {
        return (
            <>
                <span>[svg]</span>
                <span>{label}</span>
            </>
        );
    }

    return (
        <>
            <span>{label}</span>
            <span>[svg]</span>
        </>
    );
}

export default function ButtonArrow({href, direction = 'next', className = '', ...rest}) {
    const lang = getLocaleStrings(useRouter().locale, 'common');
    const buttonClasses = `uppercase font-bold text-xl inline-flex gap-4 mouse-hover:text-blue-600 transition-colors duration-300 rounded-none ${className}`;

    if (href) {
        return (
            <Link href={href}>
                <a className={buttonClasses}>
                    <ButtonArrowBody direction={direction} label={lang[direction]}/>
                </a>
            </Link>
        )
    }

    return (
        <button {...rest} className={buttonClasses}>
            <ButtonArrowBody direction={direction}/>
        </button>
    )
}