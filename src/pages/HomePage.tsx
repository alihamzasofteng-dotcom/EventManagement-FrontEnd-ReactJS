import AchievementSection from "../components/AchievementSection";
import DarkBlueBox from "../components/DarkBlueBox";
import HeroSection from "../components/HeroSection";
import HomeAboutus from "../components/HomeAboutus";
import HomeCategories from "../components/HomeCategories";
import HomePageReview from "../components/HomePageReview";
import HomePageVideo from "../components/HomePageVideo";
import HomeTeam from "../components/HomeTeam";
import InfiniteBrandScroller from "../components/InfiniteBrandScroller";
import InfiniteImageScroller from "../components/InfiniteImageScroller";
import LatestProject from "../components/LatestProject";
import PricingSection from "../components/PricingSection";
import video from "../videos/homepage-video.mp4";
import InfiniteSoftwareScroll from "./../components/InfiniteSoftwareScroll";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <HomePageVideo videoSrc={video} />
      <InfiniteImageScroller />
      <HomeCategories />
      <AchievementSection />
      <DarkBlueBox />
      <HomeAboutus />
      <HomePageReview />
      <LatestProject />
      <HomeTeam />
      <InfiniteBrandScroller />
      <InfiniteSoftwareScroll />
      <PricingSection />
    </>
  );
};

export default HomePage;
