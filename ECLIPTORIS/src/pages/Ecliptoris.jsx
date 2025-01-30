import HeroContainer from "../HeroContainer";
import Navbar from "../components/Navbar";
import FeatureSection from "../components/FeatureSection";
import UsecaseContainer from "../UsecaseContainer";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import KeyDifferent from "../components/KeyDifferent";

const Ecliptoris = () => {
  return (
    <div className="w-full relative bg-color-white-solid overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] mq750:gap-[170px] mq450:gap-[85px]">
      <main className="self-stretch flex flex-col items-start justify-start max-w-full">
        <HeroSection/>
        <About/>
        <FeatureSection />
        <KeyDifferent/>
        <UsecaseContainer />
      </main>
      <Footer />
    </div>
  );
};

export default Ecliptoris;
