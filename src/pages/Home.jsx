
import HeroSection from "../Maincomponents/HeroSection";
import HomeContent from "../home/HomeMainContent";

import Footer from "../Maincomponents/Footer";
export default function Home(){
  console.log("Home component loaded");
  return (

   <>
   <HeroSection/>
    <HomeContent/>
    <Footer/>
   </>
  );
}