import Blogs from "../components/layout/Blogs";
import Dashbody from "../components/layout/Dashbody";
import HeroSection from "../components/layout/HeroSection";
import Services from "../components/layout/Services";
import BlogStory from "../components/layout/BlogStory";
import Footer from "../components/layout/Footer";




export default function Home() {
  return (
    <main>
      <Dashbody/>
      <BlogStory/>
      <HeroSection/>
      <Services/>
      <Blogs/>
      <Footer/>
    </main>
  );
}
