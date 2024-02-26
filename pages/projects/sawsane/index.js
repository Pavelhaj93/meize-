// angus-farm.js

import { useRouter } from "next/router";
import Container from "../../../components/Container";
import ProjectButtons from "../../../components/ProjectButtons";
import ScreenGrabs from "../../../components/ScreenGrabs";
import MainLayout from "../../../components/layouts/MainLayout";
import { getLocaleStrings } from "../../../helpers/languages";
import { getProjectById, getProjectBySlug } from "../../../helpers/projects";

export async function getStaticProps() {
  // Fetch the "angus-farm" project directly by its ID or any unique identifier
  const project = getProjectBySlug("sawsane"); // Adjust this according to your project data structure

  const prevProject = getProjectById(project.id - 1) || null;
  const nextProject = getProjectById(project.id + 1) || null;
  return {
    props: {
      project,
      prevProject: prevProject,
      nextProject: nextProject,
    },
  };
}

export default function AngusFarm({ project, prevProject, nextProject }) {
  const lang = getLocaleStrings(useRouter().locale);

  return (
    <MainLayout
      theme="black"
      paddingTop={true}
      title={project.title + " - " + lang.common.project}
    >
      <article>
        <Container className="first-container flex flex-col gap-4">
          <header className="text-center">
            <h1 className="title-big">{project.title}</h1>
          </header>

          <p className="text-2xl uppercase font-bold text-center">
            {project.client}
          </p>
        </Container>

        <Container className="md:px-14 px-4 mx-0 my-auto flex flex-col justify-center items-center">
          <div className="w-full h-[500px] 2xl:h-[700px]">
            <iframe
              height="100%"
              width="100%"
              src="https://www.youtube.com/embed/NHLzTpb8DeM?si=SZplCsBb5X0Y_cDt"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

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
