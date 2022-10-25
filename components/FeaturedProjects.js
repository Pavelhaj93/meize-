import Container from "./Container";
import {getFeaturedProjects} from "../helpers/projects";
import Button from "./Button";
import ProjectsGrid from "./ProjectsGrid";

export default function FeaturedProjects({className = '', ...rest}) {
    return (
        <Container mobileFull={true} className={className} {...rest}>
            <ProjectsGrid items={getFeaturedProjects()}/>

            <div className="text-center mt-10">
                <Button theme="ghost" size="big" padding="big" href="/projects">
                    See All Work
                </Button>
            </div>
        </Container>
    )
}