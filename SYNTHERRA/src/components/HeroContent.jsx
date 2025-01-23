import CopyCA from "./CopyCA";
import SplitType from "split-type";
import { useAnimate, motion, stagger } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect } from "react";

const HeroContent = ({ className = "" }) => {
  const [titleScope, titleAnimate] = useAnimate();

  useEffect(() => {
    new SplitType(titleScope.current, {
      types: 'lines, words',
      tagName: 'span',
    });

    const words = titleScope.current.querySelectorAll('.word');
    words.forEach(word => {
      if (word.textContent === 'DEFAI') {
        word.classList.add('text-coral-100');  // Apply the class here
      }
    });

    titleAnimate(titleScope.current.querySelectorAll('.word'), 
      {
        transform: 'translateY(0)',
      },
      {
        duration: 0.5,
        delay: stagger(0.2),
      }
    );
  }, []);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0 text-center text-17xl text-color-white-solid font-raleway ${className}`}
    >
      <div className="w-[835px] flex flex-col items-center justify-start gap-16 shrink-0 max-w-full mq450:gap-4 mq1050:gap-8">
        <div className="self-stretch flex flex-col items-center justify-start gap-4 max-w-full">
          <motion.h1 
            ref={titleScope}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="m-0 relative text-inherit leading-[40px] font-bold font-[inherit] mq450:text-3xl mq450:leading-[24px] mq1050:text-10xl mq1050:leading-[32px]">
            Empowering Decentralized Synthetic Innovation in the DEFAI Revolution
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 1.75,
            }}
            className="w-[781px] relative text-sm flex items-center justify-center max-w-full">
            Syntherra merges AI and blockchain to revolutionize synthetic
            assets, enabling precision minting, secure collateralization, and
            seamless cross-chain integration. Join the DEFAI revolution and
            shape the future of decentralized finance
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 2.25,
          }}
        >
          <CopyCA />
        </motion.div>
      </div>
    </div>
  );
};

HeroContent.propTypes = {
  className: PropTypes.string,
};

export default HeroContent;
