import MainLayout from "../../../components/layouts/MainLayout";
import Container from "../../../components/Container";
import Categories from "../../../components/Categories";
import ProjectsGrid from "../../../components/ProjectsGrid";
import {getProjectsByCategory} from "../../../helpers/projects";
import {useRouter} from "next/router";

export default function CategoryDetail() {
    const router = useRouter();
    const {slug} = router.query;

    return (
        <MainLayout theme="black" paddingTop={true}>
            <Container className="first-container text-center">
                <Categories active={slug}/>
            </Container>
            <Container>
                <ProjectsGrid items={getProjectsByCategory(slug)} className="py-4"/>
            </Container>
        </MainLayout>
    )
}