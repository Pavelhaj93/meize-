import Link from "next/link";

function ButtonArrowBody({direction}) {
    if (direction === 'prev') {
        return (
            <>
                <span>[svg]</span>
                <span>Previous</span>
            </>
        );
    }

    return (
        <>
            <span>Next</span>
            <span>[svg]</span>
        </>
    );
}

export default function ButtonArrow({href, direction = 'prev', className = '', ...rest}) {
    const buttonClasses = `uppercase font-bold text-xl inline-flex gap-4 mouse-hover:text-blue-600 transition-colors duration-300 rounded-none ${className}`;

    if (href) {
        return (
            <Link href={href}>
                <a className={buttonClasses}>
                    <ButtonArrowBody direction={direction}/>
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