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
      const response = await fetch('https://api.botfood.id/api/v1/solana/stellar');
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
      className={`w-full flex flex-row items-center justify-between py-0 px-0 box-border max-w-[1280px] gap-0 [row-gap:20px] z-[1] text-left text-21xl text-black font-kanit ${className}`}
    >
      <div className="flex flex-col items-start justify-start py-0 px-8 box-border gap-[70px] max-w-full mq750:gap-[35px] mq750:min-w-full mq450:gap-[17px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full">
          <motion.h1
            ref={titleScope}
            initial={{ opacity: 0, whiteSpace: "nowrap" }}
            animate={{ opacity: 1, whiteSpace: "normal" }}
            transition={{ duration: 1 }}
            className="m-0 w-[528px] relative text-inherit leading-[100%] capitalize font-semibold font-[inherit] flex items-center max-w-full mq450:text-5xl mq450:leading-[24px] mq1050:text-13xl mq1050:leading-[32px]"
          >
            Weaving Precision into Decentralization
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 1.25,
            }}
            className="w-[640px] relative text-sm leading-[130%] capitalize font-light flex items-center max-w-full"
          >
            Stellar Loom is an AI-driven decentralized oracle platform,
            meticulously designed to bridge the vast cosmos of real-world data
            with the precision of blockchain ecosystems. Leveraging cutting-edge
            artificial intelligence and a decentralized validator network,
            Stellar Loom ensures unrivaled data integrity, security, and
            scalability for the next era of decentralized finance (DeFi). Our
            mission is to thread transparency, accuracy, and resilience into the
            fabric of decentralized applications, empowering developers, DAOs,
            and enterprises with seamless data integration.
          </motion.div>
        </div>
        {keyCA && ( 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 1.75,
            }}
            className="copyca-form w-[532px] rounded-lg bg-color-white-solid flex flex-row items-center justify-start py-0 pl-4 pr-0 box-border gap-[15px] max-w-full text-base text-color-violet-7 font-jost mq750:flex-wrap mq750:pt-4 mq750:pr-4 mq750:pb-4 mq750:box-border"
          >
            <div className="flex-1 relative tracking-[0.1em] leading-[24px] inline-block min-w-[241px] max-w-full">
              {keyCA}
            </div>
            <div
              onClick={handleCopy} 
              className="rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-aether-secondary flex flex-row items-center justify-center py-[13px] px-[15px] gap-2.5 text-color-white-solid cursor-pointer"
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
      <motion.img
        className="w-[600px] relative max-h-full overflow-hidden shrink-0 max-w-full"
        loading="lazy"
        alt=""
        src="/hero-img.svg"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          duration: 1,
          delay: 2.25,
        }}
      />
    </div>
  );
};

HeroContainer.propTypes = {
  className: PropTypes.string,
};

export default HeroContainer;
