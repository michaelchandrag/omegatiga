import HeroContainer from "../HeroContainer";
import Navbar from "../components/Navbar";
import FeatureSection from "../components/FeatureSection";
import UsecaseContainer from "../UsecaseContainer";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import PotentialContainer from "../components/PotentialContainer";
import KeyDifferent from "../components/KeyDifferent";

const Auravast = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <main className="self-stretch flex flex-col items-start justify-start max-w-full">
        <HeroSection/>
        <About/>
        <FeatureSection />
        <PotentialContainer/>
        <KeyDifferent/>
      </main>
      <Footer />
    </div>
  );
};

export default Auravast;
