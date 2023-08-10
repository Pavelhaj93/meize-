import MainLayout from "../../components/layouts/MainLayout";
import {getAllProjects} from "../../helpers/projects";
import ProjectsGrid from "../../components/ProjectsGrid";
import Container from "../../components/Container";
import {getLocaleStrings} from "../../helpers/languages";
import {useRouter} from "next/router";
import {useMemo} from "react";

export default function Projects() {
    const lang = getLocaleStrings(useRouter().locale, 'projects');

    const items = useMemo(() => {
        return getAllProjects();
    }, []);

    return (
        <MainLayout theme="black"
                    paddingTop={true}
                    title={lang.title}
        >
            <h1 className="text-0">{lang.title}</h1>

            {/*<Container className="first-container text-center">*/}
            {/*<Categories active="all"/>*/}
            {/*</Container>*/}

            <Container className="first-container">
                <ProjectsGrid items={items} className="pb-4"/>
            </Container>
        </MainLayout>
    )
}
