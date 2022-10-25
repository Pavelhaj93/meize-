export default function Input({className = '', ...rest}) {
    return (
        <input className={`block w-full border border-r-0 border-black rounded-none py-2 px-4 text-base focus:outline-none focus:border-blue-600 ${className}`} {...rest}/>
    )
}