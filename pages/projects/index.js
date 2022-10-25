import MainLayout from "../../components/layouts/MainLayout";
import {getAllProjects} from "../../helpers/projects";
import ProjectsGrid from "../../components/ProjectsGrid";
import Container from "../../components/Container";
import Button from "../../components/Button";
import Link from "next/link";
import Categories from "../../components/Categories";

export default function Projects() {
    return (
        <MainLayout theme="black" paddingTop={true}>
            <Container className="first-container text-center">
                <Categories active="all"/>
            </Container>
            <Container>
                <ProjectsGrid items={getAllProjects()} className="py-4"/>
            </Container>
        </MainLayout>
    )
}
