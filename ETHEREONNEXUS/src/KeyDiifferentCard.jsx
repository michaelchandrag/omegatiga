import { motion } from "framer-motion";
import PropTypes from "prop-types";

const KeyDiifferentCard = ({
  className = "",
  property1 = "",
  description = "",
  title = "",
}) => {
  // Animation Variants for Card and Title
  const cardVariants = {
    hover: {
      borderColor: "#ffffff", // Change border color on hover
      transition: { duration: 0.3 },
    },
  };

  const titleVariants = {
    hover: {
      fontSize: "18px", // Increase font size on hover
      transition: { duration: 0.2, type: 'spring', stiffness: 300 },
    },
  };

  const descriptionVariants = {
    hover: {
      fontSize: "16px", // Increase description font size on hover
      transition: { duration: 0.2, type: 'spring', stiffness: 300 },
    },
  };

  return (
    <motion.div
      className={`self-stretch rounded-lg bg-gray-300 border-goldenrod border-[1px] border-solid flex flex-col items-start justify-start p-4 gap-2 text-left text-base text-color-white-solid font-helvetica-neue ${className}`}
      data-property1={property1}
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
    >
      {/* Title Section with animation */}
      <motion.div
        className="self-stretch relative leading-[24px] font-medium"
        variants={titleVariants}
      >
        {title}
      </motion.div>

      {/* Description Section with animation */}
      <motion.div
        className="self-stretch relative text-sm leading-[24px] font-light"
        variants={descriptionVariants}
      >
        {description}
      </motion.div>
    </motion.div>
  );
};

KeyDiifferentCard.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,
};

export default KeyDiifferentCard;
