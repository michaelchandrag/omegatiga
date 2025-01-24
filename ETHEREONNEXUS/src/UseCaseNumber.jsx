import { motion } from "framer-motion";
import PropTypes from "prop-types";

const UseCaseNumber = ({
  className = "",
  property1 = "Hover",
  componentContent,
}) => {

  const contentVariants = {
    hover: {
      y: -3, 
      transition: { duration: 0.3 },
    },
  };

  const glowVariants = {
    hover: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    initial: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      className={`z-0 h-11 w-11 rounded-21xl bg-gray-300 border-goldenrod border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-start p-2.5 text-center text-5xl text-color-white-solid font-helvetica-neue ${className}`}
      data-property1={property1}
    >
      <motion.div
        className="h-6 w-[25px] relative leading-[24px] font-medium flex items-center justify-center shrink-0"
        variants={contentVariants}
      >
        {componentContent}
        <motion.div
          className="z-10 absolute top-[40px] left-0 w-[20px] h-[20px] bg-[#f14c4c] rounded-full glow"
          variants={glowVariants}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

UseCaseNumber.propTypes = {
  className: PropTypes.string,
  componentContent: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default UseCaseNumber;
