import Navbar from "../components/Navbar";
import CopyCA from "../components/CopyCA";
import { motion } from 'framer-motion';

const EthereonNexus = () => {
  return (
    <div className="relative w-dvw h-dvh min-h-[882px] overflow-hidden flex flex-col items-center justify-between bg-black">
      <motion.div
        initial={{ y: -100 }}  
        animate={{ y: 0 }}      
        transition={{ duration: 0.5, delay: 1.75, type: 'spring', stiffness: 100 }}  
        className="z-10 w-full"
      >
        <Navbar />
      </motion.div>
      <video
        className="z-0 absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/ethereon-nexus.mp4" type="video/mp4" />
      </video>
      <motion.div
        className="z-10 w-[1280px] flex items-center justify-center pb-14"
        initial={{ scale: 0, opacity: 0 }}  
        animate={{ scale: 1, opacity: 1 }}   
        transition={{ duration: 0.5, delay: 2.5, type: 'spring', stiffness: 100 }}  
      >
        <CopyCA />
      </motion.div>
    </div>
  );
};

export default EthereonNexus;
