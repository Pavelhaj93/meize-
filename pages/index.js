import Reel from "../components/Reel";
import MainLayout from "../components/layouts/MainLayout";
import FeaturedProjects from "../components/FeaturedProjects";
import ReelCarousel from "../components/ReelCarousel";

export default function Home() {
    return (
        <MainLayout theme="white" paddingTop={false}>
            <div className="block lg:hidden">
                <ReelCarousel/>
            </div>
            <div className="hidden lg:block">
                <Reel/>
            </div>

            <FeaturedProjects className="py-4"/>
        </MainLayout>
    )
}
