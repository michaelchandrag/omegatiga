import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";

const FeatureItem = ({
  className = "",
  title = "",
  pointOne = "",
  pointTwo = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={toggleOpen}
      className={`self-stretch rounded-lg border-stellar-primary border-[1px] border-solid flex flex-col items-center justify-center p-4 cursor-pointer text-left text-base text-black font-kanit ${className}`}
    >
      <div className="w-full flex items-center justify-between">
        <div className="flex-1 relative leading-[130%] capitalize font-medium">
          {title}
        </div>
        <img
          className={`h-6 w-6 relative transform transition-transform ${
            isOpen ? "rotate-90" : ""
          }`}
          loading="lazy"
          alt=""
          src="/vuesaxtwotonearrowright.svg"
        />
      </div>

      <motion.div
        className="w-full flex flex-col gap-4 overflow-hidden"
        initial={{ height: 0, opacity: 0, paddingTop: 0 }}
        animate={isOpen ? { height: "auto", opacity: 1, paddingTop: "10px" } : { height: 0, opacity: 0, paddingTop: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex items-start justify-start gap-[10px]">
          <img
            className="w-[22px] pt-[8px] object-contain"
            loading="lazy"
            alt="double-check-icon"
            src="/frame.svg"
          />
          <div className="w-full">{pointOne}</div>
        </div>
        <div className="flex items-start justify-start gap-[10px]">
          <img
            className="w-[22px] pt-[8px] object-contain"
            loading="lazy"
            alt="double-check-icon"
            src="/frame.svg"
          />
          <div className="w-full">{pointTwo}</div>
        </div>
      </motion.div>
    </div>
  );
};

FeatureItem.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  pointOne: PropTypes.string,
  pointTwo: PropTypes.string,
};

export default FeatureItem;
