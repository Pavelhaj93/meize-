import ButtonPrev from "./ButtonPrev";
import ButtonNext from "./ButtonNext";

export default function ProjectButtons({prevProject, nextProject}) {
    return (
        <div className="flex justify-between items-center text-0 flex-wrap gap-8">
            <div>
                {prevProject && (
                    <ButtonPrev href={`/projects/${prevProject.slug}`}/>
                )}
            </div>
            <div>
                {nextProject && (
                    <ButtonNext href={`/projects/${nextProject.slug}`}/>
                )}
            </div>
        </div>
    )
}