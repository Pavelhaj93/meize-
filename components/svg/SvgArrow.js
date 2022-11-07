export default function SvgArrow({direction = 'right', ...rest}) {
    if (direction === 'right') {
        return (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
                <path d="m15 6.3-1.4 1.5L17 11H3.3v2h13.6l-3.3 3.2 1.5 1.5 5.6-5.7L15 6.3Z" fill="currentColor"/>
            </svg>
        )
    }
    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path d="M20.3 11v2H7.5l3.2 3.2-1.4 1.5L3.7 12l5.6-5.7 1.4 1.5L7.5 11h12.8Z" fill="currentColor"/>
        </svg>
    )
}