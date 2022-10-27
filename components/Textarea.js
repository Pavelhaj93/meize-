import {forwardRef} from "react";

export default forwardRef(function Textarea({className = '', ...rest}, ref) {
    return (
        <textarea
            className={`block w-full border border-black rounded-none py-2 px-4 text-base resize-y block min-h-[150px] focus:outline-none focus:border-blue-600 transition-colors duration-300 ${className}`}
            {...rest}
            ref={ref}
        />
    )
});