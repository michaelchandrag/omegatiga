import Button from "./Button";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Navbar = ({ className = "" }) => {
  return (
    <header
      className={`w-full h-[98px] !m-[0] absolute top-[0px] right-[0px] left-[0px] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.04),_0px_4px_8px_rgba(0,_0,_0,_0.06)] bg-color-white-solid flex flex-row items-center justify-between pt-[24.2px] px-8 pb-[24.1px] box-border gap-0 [row-gap:20px] max-w-full z-[2] text-left text-base text-dimgray-200 font-kanit mq1050:w-[874.7px] ${className}`}
    >
      <div className="self-stretch w-[405.3px] flex flex-col items-start justify-start max-w-full">
        <img
          className="w-20 flex-1 relative max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/logo@2x.png"
        />
      </div>
      <div className="flex flex-row items-center justify-center py-0 px-[123px] box-border gap-6 max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq1050:hidden">
        <motion.button
          className="cursor-pointer py-2 px-[15px] rounded-11xl flex flex-row items-center justify-center"
          whileHover="hover"
          initial="initial"
          animate="initial"
          variants={{
            initial: { backgroundColor: "#fff" },
            hover: { backgroundColor: "#f8d80e" },
          }}
          transition={{
            backgroundColor: {
              duration: 0.5,
              ease: "easeInOut",
            },
          }}
        >
          <motion.a
            initial={{ color: "#787171" }}
            variants={{
              hover: { color: "#01002a" },
            }}
            transition={{
              color: {
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
            href="#hero"
            className="no-underline relative text-base leading-[100%] capitalize font-light font-kanit"
          >
            Home
          </motion.a>
        </motion.button>

        <motion.button
          className="cursor-pointer py-2 px-[15px] rounded-11xl flex flex-row items-center justify-center bg-transparent"
          whileHover="hover"
          initial="initial"
          animate="initial"
          variants={{
            initial: { backgroundColor: "#fff" },
            hover: { backgroundColor: "#f8d80e" },
          }}
          transition={{
            backgroundColor: {
              duration: 0.5,
              ease: "easeInOut",
            },
          }}
        >
          <motion.a 
            initial={{ color: "#787171" }}
            variants={{
              hover: { color: "#01002a" },
            }}
            transition={{
              color: {
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
            href="#features" 
            className="no-underline relative text-base leading-[100%] capitalize font-light font-kanit text-dimgray-300"
          >
            Features
          </motion.a>
        </motion.button>
      </div>
      <div className="flex flex-col items-end justify-start py-0 pl-[197px] pr-0 box-border max-w-full mq450:pl-5 mq450:box-border">
        <Button label="Try Demo Version" href="/stellar-demo-version" />
      </div>
    </header>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
