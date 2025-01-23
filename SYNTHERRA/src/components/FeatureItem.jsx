import { useMemo } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const FeatureItem = ({
  className = "",
  property1 = "Hover",
  description = "Leverage advanced DEFAI algorithms to mint synthetic assets that accurately reflect real-world values. AI-driven risk analysis ensures optimal collateralization for secure and scalable issuance.",
  title = "AI-Powered Synthetic Asset Minting",
  smart,
  featureCardBottomHeight,
  deployParameterizedExecutionHeight,
  featureItemWidth,
}) => {
  const featureCardBottomStyle = useMemo(() => {
    return {
      height: featureCardBottomHeight,
    };
  }, [featureCardBottomHeight]);

  const deployParameterizedExecutionStyle = useMemo(() => {
    return {
      height: deployParameterizedExecutionHeight,
    };
  }, [deployParameterizedExecutionHeight]);

  const featureItemStyle = useMemo(() => {
    return {
      width: featureItemWidth,
    };
  }, [featureItemWidth]);

  return (
    <motion.div
      className={`featured-card relative w-[361px] h-[300px] flex flex-row items-start justify-start py-0 px-[15px] box-border text-center text-base text-coral-200 font-raleway ${className}`}
      data-property1={property1}
      style={featureItemStyle}
      whileHover="hover" 
      initial="initial"
      animate="initial"
      variants={{
        initial: { y: 0 },
        hover: { y: 15 },
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Blurred background */}
      <motion.div
        className="card-blur w-full h-full absolute top-0 left-0 bg-[#ea6f37] rounded-lg blur-[30px]"
        initial={{ opacity: 0 }}
        variants={{
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.3 }}
      ></motion.div>

      {/* Card content */}
      <div className="relative h-[304px] w-[334px] rounded-lg bg-gray-400 border-gray-1200 border-[2px] border-solid box-border flex flex-col items-start justify-start pt-4 px-4 pb-[29px] gap-8">
        <div className="w-[179px] h-[60px] flex flex-row items-start justify-start py-0 pl-[119px] pr-0 box-border">
          <img
            className="h-[60px] w-[60px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src={smart}
          />
        </div>
        <div
          className="w-[298px] h-[163px] flex flex-col items-start justify-start gap-2"
          style={featureCardBottomStyle}
        >
          <div className="w-[299px] h-[30px] relative leading-[30px] font-semibold flex items-center justify-center shrink-0">
            {title}
          </div>
          <div
            className="w-[298px] h-[125px] relative text-sm leading-[25px] font-light text-color-white-solid flex items-center justify-center"
            style={deployParameterizedExecutionStyle}
          >
            {description}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

FeatureItem.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  smart: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,

  /** Style props */
  featureCardBottomHeight: PropTypes.string,
  deployParameterizedExecutionHeight: PropTypes.string,
  featureItemWidth: PropTypes.string,
};

export default FeatureItem;
