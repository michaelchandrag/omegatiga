import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Socmed = ({ github, twitter, className = "" }) => {
  return (
    <div
      className={`w-52 flex flex-col items-center justify-start z-[0] text-center text-xl text-color-white-solid font-jost ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-2">
        <h3 className="m-0 self-stretch relative text-inherit leading-[40.8px] font-medium font-[inherit]">
          Follow Us :
        </h3>
        <div className="self-stretch flex flex-row items-center justify-center gap-4">
          {/* Twitter Icon */}
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <motion.div
              className="cursor-pointer x-icon rounded-lg border-color-white-solid border-[1px] border-solid flex flex-row items-center justify-start p-2"
              whileHover={{ backgroundColor: "white" }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                className="h-5 w-5 relative overflow-hidden shrink-0"
                src="/socmed-icon.svg"
                alt="Twitter"
                initial={{ opacity: 1 }}
                whileHover={{
                  opacity: 0,
                  transition: { duration: 0.15 },
                }}
              />
              <motion.img
                className="h-5 w-5 overflow-hidden shrink-0 absolute"
                src="/socmed-icon-orange.svg"
                alt="Twitter"
                initial={{ opacity: 0 }}
                whileHover={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
              />
            </motion.div>
          </a>

          {/* GitHub Icon */}
          <a href={github} target="_blank" rel="noopener noreferrer">
            <motion.div
              className="cursor-pointer github-icon rounded-lg border-color-white-solid border-[1px] border-solid flex flex-row items-center justify-start p-2"
              whileHover={{ backgroundColor: "white" }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                className="h-5 w-5 relative overflow-hidden shrink-0"
                src="/socmed-icon-1.svg"
                alt="GitHub"
                initial={{ opacity: 1 }}
                whileHover={{
                  opacity: 0,
                  transition: { duration: 0.15 },
                }}
              />
              <motion.img
                className="h-5 w-5 overflow-hidden shrink-0 absolute"
                src="/socmed-icon-orange-1.svg"
                alt="GitHub"
                initial={{ opacity: 0 }}
                whileHover={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
              />
            </motion.div>
          </a>
        </div>
      </div>
    </div>
  );
};

Socmed.propTypes = {
  github: PropTypes.string,
  twitter: PropTypes.string,
  className: PropTypes.string,
};

export default Socmed;
