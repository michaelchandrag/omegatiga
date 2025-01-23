import Usecase from "./components/Usecase";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";

const PotentialContainer = ({ className = "" }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { threshold: 0.1 });

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[76px] box-border max-w-full text-center text-xl text-color-white-solid font-raleway mq450:pb-8 mq450:box-border mq1050:pb-[49px] mq1050:box-border ${className}`}
    >
      <div className="flex-1 bg-[url('public/section-background@2x.png')] bg-cover bg-no-repeat bg-fixed bg-center overflow-hidden flex flex-col items-center justify-center py-[111px] px-0 box-border relative gap-2.5 max-w-full mq750:pt-[72px] mq750:pb-[72px] mq750:box-border">
        {/* <img
          className="w-full h-full absolute overflow-hidden object-cover"
          alt=""
          src="/section-background@2x.png"
        /> */}
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-5 box-border gap-16 max-w-full z-[1] mq450:gap-4 mq1050:gap-8">
          <div
            className="w-[723px] flex flex-col items-center justify-start gap-2 max-w-full"
          >
            <motion.h3
              initial={{ opacity: 0, y: "100%" }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
              }}
              className="m-0 self-stretch relative text-inherit leading-[25px] font-semibold font-[inherit] mq450:text-base mq450:leading-[20px]"
            >
              POTENTIAL USECASE
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
              className="relative text-base leading-[25px]"
            >
              Comprehensive AI-driven solutions to mitigate risks across
              protocols, trades, liquidity pools, wallets, and multi-chain
              operations
            </motion.div>
          </div>
          <div 
            ref={containerRef}
            className="flex flex-col items-start justify-start gap-8 max-w-full font-ibm-plex-mono mq450:gap-4"
          >
            {[
              {
                description:
                  "Unlock partial exposure to high-value assets like global real estate or precious metals using Syntherra's synthetic tokens",
                title: "Fractional Ownership in the DEFAI Era",
                usecaseCount: "1",
              },
              {
                description:
                  "Trade synthetic representations of international markets through Syntherra’s DEFAI-powered cross-chain infrastructure, eliminating geographical barriers.",
                title: "Borderless Market Participation",
                usecaseCount: "2",
              },
              {
                description:
                  "Utilize DEFAI tools to create advanced hedging strategies that mitigate market volatility across synthetic and real-world assets.",
                title: "AI-Optimized Hedging Strategies",
                usecaseCount: "3",
              },
              {
                description:
                  "Expand and balance your portfolio with DEFAI precision, leveraging synthetic assets for calculated exposure to various market classes.",
                title: "DEFAI-Driven Portfolio Diversification",
                usecaseCount: "4",
              },
            ].map((usecase, index) => (
              <motion.div
                key={usecase.usecaseCount}
                initial={{ opacity: 0, x: "-30%" }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 1.25 + index * 0.3, // Stagger animation by 0.3 seconds for each item
                }}
              >
                <Usecase
                  property1="Default"
                  description={usecase.description}
                  title={usecase.title}
                  usecaseCount={usecase.usecaseCount}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

PotentialContainer.propTypes = {
  className: PropTypes.string,
};

export default PotentialContainer;
