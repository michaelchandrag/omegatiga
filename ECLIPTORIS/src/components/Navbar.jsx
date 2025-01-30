import Button from "./Button";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Navbar = ({ className = "" }) => {
  return (
    <header
      className={`w-full max-w-[1185px] !m-[0] absolute top-6 left-1/2 -translate-x-1/2 rounded-41xl bg-color-white-solid flex flex-row items-center justify-between pt-[24.2px] px-8 pb-[24.1px] box-border gap-0 [row-gap:20px] z-[2] text-left text-base text-dimgray-200 mq1050:w-[874.7px] ${className}`}
    >
      <div className="w-full flex flex-col items-start justify-start">
        <img
          className="w-14 flex-1 relative max-h-full object-contain"
          loading="lazy"
          alt=""
          src="/logo@2x.png"
        />
      </div>
      <div className="flex items-center justify-center box-border gap-6 max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq1050:hidden">
        <motion.button
          className="cursor-pointer py-2 px-[15px] rounded-11xl flex flex-row items-center justify-center bg-transparent focus:outline-none"
          whileHover="hover"
          initial="initial"
          animate="initial"
        >
          <motion.a
            initial={{ 
              fontWeight: 500,
              color: "#732165" 
            }}
            variants={{
              hover: { 
                color: "#e92790",
                fontWeight: 600,
              },
            }}
            transition={{
              color: {
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
            href="#hero"
            className="font-urbanist no-underline relative text-base leading-[100%] capitalize font-light"
          >
            Home
          </motion.a>
        </motion.button>

        <motion.button
          className="cursor-pointer py-2 px-[15px] rounded-11xl flex flex-row items-center justify-center bg-transparent focus:outline-none"
          whileHover="hover"
          initial="initial"
          animate="initial"
        >
          <motion.a 
            initial={{ 
              fontWeight: 500,
              color: "#732165" 
            }}
            variants={{
              hover: { 
                color: "#e92790",
                fontWeight: 600,
              },
            }}
            transition={{
              color: {
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
            href="#about" 
            className="font-urbanist no-underline relative text-base leading-[100%] capitalize font-light "
          >
            About
          </motion.a>
        </motion.button>

        <motion.button
          className="cursor-pointer py-2 px-[15px] rounded-11xl flex flex-row items-center justify-center bg-transparent focus:outline-none"
          whileHover="hover"
          initial="initial"
          animate="initial"
        >
          <motion.a 
            initial={{ 
              fontWeight: 500,
              color: "#732165" 
            }}
            variants={{
              hover: { 
                color: "#e92790",
                fontWeight: 600,
              },
            }}
            transition={{
              color: {
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
            href="#features" 
            className="font-urbanist no-underline relative text-base leading-[100%] capitalize font-light "
          >
            Features
          </motion.a>
        </motion.button>
      </div>
      <div className="w-full flex flex-col items-end justify-start box-border mq450:pl-5 mq450:box-border">
        <Button label="Getting Started" href="" />
      </div>
    </header>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
