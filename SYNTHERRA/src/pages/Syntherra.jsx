import Navbar from "../Navbar";
import HeroContent from "../components/HeroContent";
import ChatComponent from "../ChatComponent";
import AboutContainer from "../AboutContainer";
import PotentialContainer from "../PotentialContainer";
import Different from "../components/Different";
import Footer from "../components/Footer";
import FeaturesContainer from "../components/FeaturesContainer";
import DifferentContainer from "../components/DifferentContainer";
import { motion } from "framer-motion";

const Syntherra = () => {
  return (
    <div className="w-full relative bg-gray-500 overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <section className="self-stretch h-[929px] bg-gray-500 flex flex-col items-start justify-start pt-0 px-0 pb-[524.3px] box-border gap-12 max-w-full overflow-y-hidden lg:pb-[341px] lg:box-border mq450:pb-36 mq450:box-border mq750:gap-6 mq1050:pb-[222px] mq1050:box-border">
        <motion.div
        className="w-full"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 50, delay: 2.75 }}
        >
          <Navbar />
        </motion.div>
        <HeroContent />
        <ChatComponent/>
      </section>
      <AboutContainer />
      <FeaturesContainer/>
      <PotentialContainer />
      <DifferentContainer/>
      <Footer />
    </div>
  );
};

export default Syntherra;
