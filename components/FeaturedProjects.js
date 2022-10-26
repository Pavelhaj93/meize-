import Container from "./Container";
import {getFeaturedProjects} from "../helpers/projects";
import Button from "./Button";
import ProjectsGrid from "./ProjectsGrid";
import {getLocaleStrings} from "../helpers/languages";
import {useRouter} from "next/router";

export default function FeaturedProjects({className = '', ...rest}) {
    const lang = getLocaleStrings(useRouter().locale, 'common');

    return (
        <Container mobileFull={true} className={className} {...rest}>
            <ProjectsGrid items={getFeaturedProjects()}/>

            <div className="text-center mt-10">
                <Button theme="ghost" size="big" padding="big" href="/projects">
                    {lang.seeAllWork}
                </Button>
            </div>
        </Container>
    )
}