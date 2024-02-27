// angus-farm.js

import Vimeo from "@u-wave/react-vimeo";
import { useRouter } from "next/router";
import Container from "../../../components/Container";
import ProjectButtons from "../../../components/ProjectButtons";
import ScreenGrabs from "../../../components/ScreenGrabs";
import MainLayout from "../../../components/layouts/MainLayout";
import { getLocaleStrings } from "../../../helpers/languages";
import { getProjectById, getProjectBySlug } from "../../../helpers/projects";

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

const GridComponent = ({ gifs }) => {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 gap-2 sm:gap-5 lg:gap-10">
      {gifs.map((gif, index) => (
        <div
          key={gif.src}
          className={`relative ${index === 1 ? "sm:mt-20" : ""} ${
            index === 2 ? "sm:-mt-20" : ""
          }`}
        >
          <img src={gif.src} alt="Gif" />
        </div>
      ))}
    </div>
  );
};

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

        <Container className="md:px-14 px-4 gap-5 sm:gap-10">
          {project.videos.vimeoId && (
            <div className="w-[320px] md:w-[550px] 2xl:w-[800px] mx-auto my-0 mb-10">
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

          <GridComponent gifs={project.gifs} />

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
