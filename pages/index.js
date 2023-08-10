import Reel from "../components/Reel";
import MainLayout from "../components/layouts/MainLayout";
import FeaturedProjects from "../components/FeaturedProjects";
import ReelCarousel from "../components/ReelCarousel";
import haydenImage from "../public/images/hayden2.jpg";
import haydenImage2 from "../public/images/hayden3.jpg";
import haydenImage3 from "../public/images/hayden4.jpg";
import haydenImage4 from "../public/images/hayden.jpg";
import {getProjectsInReel} from "../helpers/projects";

const images = [
    haydenImage,
    haydenImage2,
    haydenImage3,
    haydenImage4,
];

const reels = getProjectsInReel();

export default function Home() {
    return (
        <MainLayout theme="white" paddingTop={false}>
            <div className="block lg:hidden">
                <ReelCarousel reels={reels}/>
            </div>
            <div className="hidden lg:block">
                <Reel reels={reels} images={images}/>
            </div>

            <FeaturedProjects className="py-4"/>
        </MainLayout>
    )
}
