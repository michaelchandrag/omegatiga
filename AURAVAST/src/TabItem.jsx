import { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const TabItem = ({
  className = "",
  desc1 = "",
  desc2 = "",
  title = "",
  isActive = false, // Accept the isActive prop to control initial state
}) => {
  const [isOpen, setIsOpen] = useState(isActive); // Set the initial state based on isActive prop

  const handleClick = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div
      className={`self-stretch rounded-lg bg-color-white-solid flex flex-row items-start justify-start p-4 gap-2 cursor-pointer text-left text-base text-black font-kanit ${className}`}
      onClick={handleClick} 
    >
      <div className="w-[662px] flex flex-col items-start justify-start">
        <div className="self-stretch relative leading-[130%] capitalize font-medium">
          {title}
        </div>

        <motion.div
          className="open-tabitem self-stretch grid grid-rows-[1fr] text-sm text-aether-primary"
          initial={{ height: 0, opacity: 0, paddingTop: 0 }}
          animate={isOpen ? { height: "auto", opacity: 1, paddingTop: "10px" } : { height: 0, opacity: 0, paddingTop: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="self-stretch overflow-hidden">
            <div className="self-stretch flex flex-col items-start justify-start gap-2">
              <div className="self-stretch flex flex-row items-start justify-start gap-4">
                <img
                  className="h-3.5 w-[22px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/frame.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[15px] font-light">
                    {desc1}
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-4">
                <img
                  className="h-3.5 w-[22px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/frame.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[15px] font-light">
                    {desc2}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <img
        className={`h-6 w-6 relative object-contain transform transition-transform ${
          isOpen ? "rotate-90" : ""
        }`}
        loading="lazy"
        alt=""
        src="/vuesaxtwotonearrowright.svg"
      />
    </div>
  );
};

TabItem.propTypes = {
  className: PropTypes.string,
  desc2: PropTypes.string,
  desc1: PropTypes.string,
  title: PropTypes.string,
  isActive: PropTypes.bool, // Add prop for isActive
};

export default TabItem;
