import { motion } from "framer-motion";
import { useMemo } from "react";
import PropTypes from "prop-types";

const Button = ({
  className = "",
  label = "Try Demo Version",
  href = "",
  exploreNowTextDecoration,
  exploreNowHeight,
  exploreNowDisplay,
  exploreNowAlignItems,
}) => {
  const exploreNowStyle = useMemo(() => {
    return {
      textDecoration: exploreNowTextDecoration,
      height: exploreNowHeight,
      display: exploreNowDisplay,
      alignItems: exploreNowAlignItems,
    };
  }, [
    exploreNowTextDecoration,
    exploreNowHeight,
    exploreNowDisplay,
    exploreNowAlignItems,
  ]);

  const hoverVariants = {
    initial: { backgroundColor: "#20201e" }, 
    hover: { backgroundColor: "#F6BA51" },   
  };

  return (
    <motion.button
      className={`cursor-pointer border-color-white-solid border-[1px] border-solid py-2.5 px-6 bg-gray-200 w-52 rounded-21xl box-border flex flex-row items-center justify-center gap-4 ${className}`}
      variants={hoverVariants}
      initial="initial"
      whileHover="hover"
    >
      <a
        className="[text-decoration:none] whitespace-nowrap h-6 relative text-base leading-[24px] font-helvetica-neue text-color-white-solid text-left flex items-center"
        style={exploreNowStyle}
      >
        {label}
      </a>
      <img
        className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
        alt=""
        src="/arrow-upright.svg"
      />
    </motion.button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,

  /** Style props */
  exploreNowTextDecoration: PropTypes.string,
  exploreNowHeight: PropTypes.string,
  exploreNowDisplay: PropTypes.string,
  exploreNowAlignItems: PropTypes.string,
};

export default Button;
