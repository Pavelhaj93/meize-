import MainLayout from "../../components/layouts/MainLayout";
import {getAllProjects} from "../../helpers/projects";
import ProjectsGrid from "../../components/ProjectsGrid";
import Container from "../../components/Container";
import Categories from "../../components/Categories";
import {getLocaleStrings} from "../../helpers/languages";
import {useRouter} from "next/router";

export default function Projects() {
    const lang = getLocaleStrings(useRouter().locale, 'projects');

    return (
        <MainLayout theme="black"
                    paddingTop={true}
                    title={lang.title}
        >
            <Container className="first-container text-center">
                <h1 className="text-0">{lang.title}</h1>
                <Categories active="all"/>
            </Container>
            <Container>
                <ProjectsGrid items={getAllProjects()} className="py-4"/>
            </Container>
        </MainLayout>
    )
}
