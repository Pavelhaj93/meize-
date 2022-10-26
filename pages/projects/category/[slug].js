import MainLayout from "../../../components/layouts/MainLayout";
import Container from "../../../components/Container";
import Categories from "../../../components/Categories";
import ProjectsGrid from "../../../components/ProjectsGrid";
import {getProjectsByCategory} from "../../../helpers/projects";
import {useRouter} from "next/router";
import {getLocaleStrings} from "../../../helpers/languages";

export default function CategoryDetail() {
    const router = useRouter();
    const {slug} = router.query;
    const lang = getLocaleStrings(router.locale);
    const title = `${lang.categories[slug]} - ${lang.projects.title}`;

    return (
        <MainLayout theme="black"
                    paddingTop={true}
                    title={title}
        >
            <Container className="first-container text-center">
                <h1 className="text-0">{title}</h1>
                <Categories active={slug}/>
            </Container>
            <Container>
                <ProjectsGrid items={getProjectsByCategory(slug)} className="py-4"/>
            </Container>
        </MainLayout>
    )
}