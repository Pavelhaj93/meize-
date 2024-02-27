// angus-farm.js

import Vimeo from "@u-wave/react-vimeo";
import { useRouter } from "next/router";
import Container from "../../../components/Container";
import ProjectButtons from "../../../components/ProjectButtons";
import ScreenGrabs from "../../../components/ScreenGrabs";
import MainLayout from "../../../components/layouts/MainLayout";

import GifGrid from "../../../components/GifGrid";
import { getLocaleStrings } from "../../../helpers/languages";
import { getProjectById, getProjectBySlug } from "../../../helpers/projects";

export async function getStaticProps() {
  // Fetch the "angus-farm" project directly by its ID or any unique identifier
  const project = getProjectBySlug("angus-farm"); // Adjust this according to your project data structure

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

        <Container className="md:px-14 px-4">
          {project.videos.vimeoId1 && (
            <Vimeo
              video={project.videos.vimeoId1}
              playsInline={true}
              muted={true}
              responsive={true}
              loop={true}
              autoplay={true}
              className="mx-auto"
              onError={(err) => console.log(err)}
            />
          )}

          <GifGrid gifs={project.gifs} bottom={0} top={2} />

          {project.videos.vimeoId2 && (
            <Vimeo
              video={project.videos.vimeoId2}
              playsInline={true}
              muted={true}
              responsive={true}
              loop={true}
              autoplay={true}
              className="mx-auto"
              onError={(err) => console.log(err)}
            />
          )}

          <GifGrid gifs={project.gifs} bottom={2} top={4} revert />

          {project.videos.vimeoId3 && (
            <Vimeo
              video={project.videos.vimeoId3}
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
