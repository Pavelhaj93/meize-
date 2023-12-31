import MainLayout from "../../components/layouts/MainLayout";
import Container from "../../components/Container";
import {
  getAllProjects,
  getProjectById,
  getProjectBySlug,
} from "../../helpers/projects";
import ScreenGrabs from "../../components/ScreenGrabs";
import ProjectButtons from "../../components/ProjectButtons";
import { getLocaleStrings } from "../../helpers/languages";
import { useRouter } from "next/router";
import Vimeo from "@u-wave/react-vimeo";

export async function getStaticPaths() {
  let paths = [];

  getAllProjects().forEach(({ slug }) => {
    for (const locale of ["cs", "en"]) {
      paths.push({
        params: {
          slug,
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
  const project = getProjectBySlug(context.params.slug);

  const prevProject = getProjectById(project.id - 1) || null;
  const nextProject = getProjectById(project.id + 1) || null;

  return {
    props: {
      project,
      prevProject,
      nextProject,
    },
  };
}

export default function ProjectDetail({ project, prevProject, nextProject }) {
  const lang = getLocaleStrings(useRouter().locale);

  return (
    <MainLayout
      theme="black"
      paddingTop={true}
      title={project.title + " - " + lang.common.project}
    >
      <article>
        <Container className="first-container flex flex-col gap-4">
          {/*<div className="text-center">*/}
          {/*    {project.categories.map((slug, key) => {*/}
          {/*        return (*/}
          {/*            <>*/}
          {/*                <Link href={`/projects/category/${slug}`}*/}
          {/*                      key={`Category: ${key}`}*/}
          {/*                >*/}
          {/*                    <a className="uppercase font-bold text-sm mouse-hover:text-primary transition-colors duration-300">*/}
          {/*                        {lang.categories[slug]}*/}
          {/*                    </a>*/}
          {/*                </Link>*/}
          {/*                {key < project.categories.length - 1 && ', '}*/}
          {/*            </>*/}
          {/*        )*/}
          {/*    })}*/}
          {/*</div>*/}

          <header className="text-center">
            <h1 className="title-big">{project.title}</h1>
          </header>

          <p className="text-2xl uppercase font-bold text-center">
            {project.client}
          </p>
        </Container>

        <Container className="md:px-14 px-4">
          {project.videos.vimeoId && (
            <Vimeo
              video={project.videos.vimeoId}
              playsInline={true}
              muted={true}
              responsive={true}
              loop={true}
              autoplay={true}
              className="mx-auto"
              onError={(err) => console.log(err)}
            />
          )}

          <div className="pt-20 gap-12 flex flex-col">
            <ScreenGrabs images={project.screens} />
            <ProjectButtons
              prevProject={prevProject}
              nextProject={nextProject}
            />
          </div>
        </Container>
      </article>
    </MainLayout>
  );
}
