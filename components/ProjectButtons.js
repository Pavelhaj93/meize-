import ButtonPrev from "./ButtonPrev";
import ButtonNext from "./ButtonNext";

export default function ProjectButtons({project}) {
    return (
        <div className="flex justify-between items-center">
            <div>
                {project.prevProject && (
                    <ButtonPrev href={`/projects/${project.prevProject.slug}`}/>
                )}
            </div>
            <div>
                {project.nextProject && (
                    <ButtonNext href={`/projects/${project.nextProject.slug}`}/>
                )}
            </div>
        </div>
    )
}