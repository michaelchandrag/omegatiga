import { motion } from "framer-motion";
import PotentialCard from "./components/PotentialCard";
import UseCaseNumber from "./UseCaseNumber";
import PropTypes from "prop-types";

const UseCaseLeft = ({
  className = "",
  useCaseNumber = "",
  description = "",
  title = "",
}) => {
  const hoverVariants = {
    initial: {
      ellipseBgColor: "rgba(212, 212, 212, 0.5)",
    },
    hover: {
      ellipseBgColor: "#ffffff",
    },
  };

  return (
    <motion.div
      className={`w-[681px] h-[136px] flex flex-row items-start justify-start pt-0 px-0 pb-6 box-border gap-8 z-[3] ${className}`}
      initial="initial"
      whileHover="hover"
    >
      <PotentialCard description={description} title={title} potentialHeight="unset" />
      <div className="h-[78px] w-[140px] flex flex-col items-start justify-start pt-[34px] px-0 pb-0 box-border">
        <div className="w-[140px] h-11 flex flex-row items-end justify-start">
          <motion.div
            className="h-[29px] w-5 flex flex-col items-start justify-end pt-0 px-0 pb-[9px] box-border z-[3]"
            variants={hoverVariants} // Bind hover animation variants
          >
            <motion.div
              className="ellipse w-5 h-5 relative rounded-[50%]"
              variants={{
                initial: { backgroundColor: hoverVariants.initial.ellipseBgColor },
                hover: { backgroundColor: hoverVariants.hover.ellipseBgColor },
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <div className="h-[19px] w-[76px] flex flex-col items-start justify-end pt-0 px-0 pb-[18px] box-border">
            <div className="w-[77px] relative border-lightgray-400 border-t-[1px] border-solid box-border h-px" />
          </div>
          <UseCaseNumber componentContent={useCaseNumber} />
        </div>
      </div>
    </motion.div>
  );
};

UseCaseLeft.propTypes = {
  className: PropTypes.string,
  useCaseNumber: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
};

export default UseCaseLeft;
