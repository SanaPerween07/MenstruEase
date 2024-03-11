import Blogs from "../components/layout/Blogs";
import Dashbody from "../components/layout/Dashbody";
import Footer from "../components/layout/Footer";
import HeaderTop from "../components/layout/HeaderTop";
import HeroSection from "../components/layout/HeroSection";
import Services from "../components/layout/Services";
import SignUp from "../components/layout/SignUp";




export default function Home() {
  return (
    <main>
      <Dashbody/>
      <SignUp/>
      <HeroSection/>
      <Services/>
      <Blogs/>
    </main>
  );
}
