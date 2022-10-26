import Arrow from "./Arrow";

export default function Alert({className = '', active = false, theme, children, ...rest}) {
    let themeClasses;
    let arrowClasses;

    switch (theme) {
        case 'error':
            themeClasses = 'bg-red-600';
            arrowClasses = 'text-red-600';
            break;
        case 'success':
            themeClasses = 'bg-blue-600';
            arrowClasses = 'text-blue-600';
            break;
        default:
            themeClasses = 'bg-black';
            arrowClasses = 'text-black';
            break;
    }

    return (
        <div
            className={`w-full max-w-[400px] p-2 text-center z-10 text-white font-bold transition-all duration-300 ${!active ? 'opacity-0 translate-y-1.5 pointer-events-none' : ''} ${themeClasses} ${className}`}
            {...rest}
        >
            {children}
            <Arrow className={`absolute top-full left-1/2 -translate-x-1/2 ${arrowClasses}`}/>
        </div>
    )
}