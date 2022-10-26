import MainLayout from "../../components/layouts/MainLayout";
import Container from "../../components/Container";
import {getAllProjects, getProjectById, getProjectBySlug} from "../../helpers/projects";
import Link from "next/link";
import Hero from "../../components/Hero";
import ScreenGrabs from "../../components/ScreenGrabs";
import ProjectButtons from "../../components/ProjectButtons";
import {getLocaleStrings} from "../../helpers/languages";
import {useRouter} from "next/router";

export async function getStaticPaths() {
    return {
        paths: getAllProjects().map(({slug}) => ({
            params: {
                slug
            }
        })),
        fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps(context) {
    const project = getProjectBySlug(context.params.slug);

    const prevProject = getProjectById(project.id - 1) || null;
    const nextProject = getProjectById(project.id + 1) || null;

    const projectWithDetails = {
        ...project,
        prevProject,
        nextProject
    };

    return {
        props: {project: projectWithDetails},
    }
}

export default function ProjectDetail({project}) {
    const lang = getLocaleStrings(useRouter().locale);

    return (
        <MainLayout theme="black"
                    paddingTop={true}
                    title={project.title + ' - Project'}
        >
            <article>
                <Container className="first-container flex flex-col gap-4">
                    <div className="text-center">
                        {project.categories.map((slug, key) => {
                            return (
                                <>
                                    <Link href={`/projects/category/${slug}`}
                                          key={`Category: ${key}`}
                                    >
                                        <a className="uppercase font-bold text-sm mouse-hover:text-blue-600 transition-colors duration-300">
                                            {lang.categories[slug]}
                                        </a>
                                    </Link>
                                    {key < project.categories.length - 1 && ', '}
                                </>
                            )
                        })}
                    </div>

                    <header className="text-center">
                        <h1 className="title-big">
                            {project.title}
                        </h1>
                    </header>

                    <p className="text-2xl uppercase font-bold text-center">
                        {project.client}
                    </p>
                </Container>

                <Hero/>

                <Container className="pt-20 pb-16 flex flex-col gap-12">
                    <ScreenGrabs slug={project.slug}/>
                    <ProjectButtons project={project}/>
                </Container>
            </article>
        </MainLayout>
    )
}