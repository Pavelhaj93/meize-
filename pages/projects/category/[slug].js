import MainLayout from "../../../components/layouts/MainLayout";
import Container from "../../../components/Container";
import Categories from "../../../components/Categories";
import ProjectsGrid from "../../../components/ProjectsGrid";
import {getAllCategories, getProjectsByCategory} from "../../../helpers/projects";
import {useRouter} from "next/router";
import {getLocaleStrings} from "../../../helpers/languages";

export async function getStaticPaths() {
    let paths = [];

    getAllCategories().forEach((categorySlug) => {
        console.log(categorySlug);
        for (const locale of ['cs', 'en']) {
            paths.push({
                params: {
                    slug: categorySlug
                },
                locale,
            });
        }

    });

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const categorySlug = context.params.slug;

    return {
        props: {
            categorySlug
        },
    }
}


export default function CategoryDetail({categorySlug}) {
    const router = useRouter();
    const lang = getLocaleStrings(router.locale);
    const title = `${lang.categories[categorySlug]} - ${lang.projects.title}`;

    return (
        <MainLayout theme="black"
                    paddingTop={true}
                    title={title}
        >
            <Container className="first-container text-center">
                <h1 className="text-0">{title}</h1>
                <Categories active={categorySlug}/>
            </Container>
            <Container>
                <ProjectsGrid items={getProjectsByCategory(categorySlug)} className="py-4"/>
            </Container>
        </MainLayout>
    )
}