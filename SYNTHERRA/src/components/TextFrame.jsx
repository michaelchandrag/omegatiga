import PropTypes from "prop-types";
import { motion } from "framer-motion";

const TextFrame = ({
  className = "",
  bodyText = "What is your platform about?",
  onClick,
}) => {

  return (
    <motion.button
      onClick={onClick}
      className={`cursor-pointer rounded-3xs bg-gray-600 w-[260px] h-[62px] overflow-hidden flex flex-row items-center justify-center p-4 box-border gap-2.5 text-center text-xs text-gray-1200 font-space-grotesk ${className}`}
      whileHover={{
        border: "1px solid gray", 
      }}
      transition={{
        type: "spring",  // Use spring for a smooth, natural feel
        stiffness: 300,  // Adjust stiffness for smoothness
        damping: 30,     // Control the oscillation damping
      }}
    >
      <div className="flex-1 relative z-[0]">{bodyText}</div>
      <div className="w-[129px] absolute !m-[0] bottom-[-82px] left-[calc(50%_-_72px)] [filter:blur(8px)] rounded-140xl h-[74px] overflow-hidden shrink-0 z-[1]" />
    </motion.button>
  );
};

TextFrame.propTypes = {
  className: PropTypes.string,
  bodyText: PropTypes.string,
};

export default TextFrame;
