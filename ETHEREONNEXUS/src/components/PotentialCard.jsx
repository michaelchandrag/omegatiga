import { motion } from "framer-motion";
import { useMemo } from "react";
import PropTypes from "prop-types";

const PotentialCard = ({
  className = "",
  property1 = "",
  description = "",
  title = "",
  potentialHeight,
}) => {
  const potentialStyle = useMemo(() => {
    return {
      height: potentialHeight,
    };
  }, [potentialHeight]);

  // Animation Variants
  const cardVariants = {
    hover: {
      borderColor: "#ffffff", 
      transition: { duration: 0.3 },
    },
  };

  const titleVariants = {
    hover: {
      fontSize: "18px", 
      transition: { duration: 0.2, type: 'spring', stiffness: 300 },
    },
  };

  return (
    <motion.div
      className={`w-[509px] rounded-lg bg-gray-300 border-goldenrod border-[1px] border-solid box-border flex flex-col items-start justify-start p-4 gap-2 z-[1] text-left text-base text-color-white-solid font-helvetica-neue ${className}`}
      data-property1={property1}
      style={potentialStyle}
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
    >
      <motion.div
        className="text-base self-stretch relative leading-[24px] font-medium font-helvetica-neue"
        variants={titleVariants}
      >
        {title}
      </motion.div>
      <div className="self-stretch relative text-sm leading-[24px] font-light font-helvetica-neue">
        {description}
      </div>
    </motion.div>
  );
};

PotentialCard.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,

  /** Style props */
  potentialHeight: PropTypes.string,
};

export default PotentialCard;
