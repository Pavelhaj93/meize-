// angus-farm.js

import Vimeo from "@u-wave/react-vimeo";
import { useRouter } from "next/router";
import Container from "../../components/Container";
import ProjectButtons from "../../components/ProjectButtons";
import ScreenGrabs from "../../components/ScreenGrabs";
import MainLayout from "../../components/layouts/MainLayout";
import { getLocaleStrings } from "../../helpers/languages";
import { getProjectById, getProjectBySlug } from "../../helpers/projects"; // Import the necessary function

export async function getStaticProps() {
  // Fetch the "angus-farm" project directly by its ID or any unique identifier
  const project = getProjectBySlug("were-next"); // Adjust this according to your project data structure

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

        <Container className="md:px-14 px-4 flex flex-col gap-10">
          {project.videos.vimeoId && (
            <div className="w-auto md:w-[550px] 2xl:w-[800px] mx-auto my-0">
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
            </div>
          )}

          <div className="w-full flex flex-col gap-10">
            {project.gifs.map((gif) => (
              <div
                className="w-auto mx-auto md:w-[550px] 2xl:w-[800px]"
                key={gif.src}
              >
                <img src={gif.src} alt="Gif" />
              </div>
            ))}
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
