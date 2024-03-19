import Blogs from "../components/layout/Blogs";
import Dashbody from "../components/layout/Dashbody";
import HeroSection from "../components/layout/HeroSection";
import Services from "../components/layout/Services";
import BlogStory from "../components/layout/BlogStory";

export default function Home() {
  return (
    <main>
      <Dashbody/>
      <BlogStory/>
      <HeroSection/>
      <Services/>
      <Blogs/>
    </main>
  );
}
