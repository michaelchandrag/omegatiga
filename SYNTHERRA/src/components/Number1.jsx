import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Number1 = ({ className = "", property1 = "Number", usecaseCount }) => {
  return (
    <motion.div
      className={`usecase-number relative w-[57px] h-[57px] ${className}`}
      data-property1={property1}
      whileHover="hover"
      initial="initial"
    >
      {/* Blur effect */}
      <motion.div
        className="number-blur absolute top-0 left-0 w-full h-full bg-white rounded-lg blur"
        initial={{ opacity: 0 }} // Default opacity
        variants={{
          initial: { opacity: 0 }, // Initial state
          hover: { opacity: 0.3 }, // Hover state
        }}
        transition={{ duration: 0.3 }} // Smooth transition
      ></motion.div>

      {/* Main content */}
      <div className="relative w-full rounded-lg bg-coral-200 flex flex-col items-center justify-center p-4 box-border text-center text-xl text-color-white-solid font-ibm-plex-mono">
        <b className="self-stretch relative leading-[25px]">{usecaseCount}</b>
      </div>
    </motion.div>
  );
};

Number1.propTypes = {
  className: PropTypes.string,
  usecaseCount: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default Number1;
