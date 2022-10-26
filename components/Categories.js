import Link from "next/link";
import {getAllCategories} from "../helpers/projects";

export default function Categories({active = 'all', className = '', ...rest}) {
    return (
        <div className="flex items-center justify-center gap-10 flex-wrap">
            {getAllCategories().map(({title, slug}, key) => {
                return (
                    <Link href={slug === 'all' ? '/projects' : '/projects/category/' + slug} key={`Category: ${slug}`}>
                        <a className={`inline-flex font-extrabold uppercase border-b-2 ${active === slug ? 'border-current' : 'border-transparent mouse-hover:text-blue-600 transition-all duration-300'}`}>
                            {title}
                        </a>
                    </Link>
                )
            })}
        </div>
    )
}