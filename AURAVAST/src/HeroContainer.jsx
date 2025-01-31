import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimate, stagger } from "framer-motion";
import SplitType from "split-type";

const HeroContainer = ({ className = "" }) => {
  const [titleScope, titleAnimate] = useAnimate();
  const [keyCA, setKeyCA] = useState(""); 
  const [buttonText, setButtonText] = useState("Copy CA"); 

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.botfood.id/api/v1/solana/ecliptoris');
      if (response.ok) {
        const data = await response.json();
        setKeyCA(data.data.key_ca); 
      } else {
        console.error('Error fetching API');
      }
    };
    fetchData();
  }, []);

  const handleCopy = () => {
    if (keyCA) {
      navigator.clipboard.writeText(keyCA).then(() => {
        setButtonText("Copied"); 
        setTimeout(() => setButtonText("Copy CA"), 2000); 
      });
    }
  };

  useEffect(() => {
    new SplitType(titleScope.current, {
      types: "lines, words",
      tagName: "span",
    });

    titleAnimate(
      titleScope.current.querySelectorAll(".word"),
      {
        transform: "translateY(0)",
      },
      {
        duration: 0.5,
        delay: stagger(0.2),
      }
    );
  }, []);

  return (
    <div
      className={`w-full h-[718px] flex items-center justify-center py-0 px-0 box-border max-w-[1280px] gap-0 [row-gap:20px] z-[1] text-left text-21xl ${className}`}
    >
      <div className="flex flex-col items-center justify-center py-0 px-8 box-border gap-[70px] max-w-full mq750:gap-[35px] mq750:min-w-full mq450:gap-[17px]">
        <div className="w-full max-w-[682px] flex flex-col items-center justify-center gap-4">
          <motion.h1
            ref={titleScope}
            initial={{ opacity: 0, whiteSpace: "nowrap" }}
            animate={{ opacity: 1, whiteSpace: "normal" }}
            transition={{ duration: 1 }}
            className="w-[527px] font-epilogue text-[36px] text-color-white-solid text-center m-0 relative leading-[100%] capitalize font-extrabold flex items-center max-w-full mq450:text-5xl mq450:leading-[24px] mq1050:text-13xl mq1050:leading-[32px]"
          >
            Unifying the Cosmos of DeFi with AI Precision
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 2,
            }}
            className="font-urbanist text-color-white-solid text-center w-full relative text-sm leading-[130%] font-light flex items-center max-w-full"
          >
            The celestial bridge connecting the fragmented DeFi universe into a single, harmonious ecosystem. Inspired by the ancient symbolism of eclipses, Ecliptoris represents the balance between light and shadow—the convergence of simplicity and complexity in decentralized finance.
          </motion.div>
        </div>
        {keyCA && ( 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 2.5,
            }}
            className="copyca-form w-[532px] rounded-lg bg-color-white-solid flex flex-row items-center justify-start py-0 pl-4 pr-0 box-border gap-[15px] max-w-full text-base text-color-violet-7 font-jost mq750:flex-wrap mq750:pt-4 mq750:pr-4 mq750:pb-4 mq750:box-border"
          >
            <div className="flex-1 relative tracking-[0.1em] leading-[24px] inline-block min-w-[241px] max-w-full">
              {keyCA}
            </div>
            <div
              onClick={handleCopy} 
              className="rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-ecliptoris-primary flex flex-row items-center justify-center py-[13px] px-[15px] gap-2.5 text-color-white-solid cursor-pointer"
            >
              <img
                className="h-6 w-6 relative"
                loading="lazy"
                alt=""
                src="/vuesaxboldcopy.svg"
              />
              <div className="relative leading-[24px] font-semibold">{buttonText}</div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

HeroContainer.propTypes = {
  className: PropTypes.string,
};

export default HeroContainer;
