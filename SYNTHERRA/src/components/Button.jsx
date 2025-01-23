import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Button = ({
  className = "",
  property1 = "Default",
  label = "Try Demo Version",
  href = "#",
}) => {
  return (
    <motion.div
      className={`self-stretch rounded-21xl bg-coral-200 flex flex-row items-center justify-center py-2.5 px-6 gap-4 text-left text-base text-color-white-solid font-helvetica-neue ${className}`}
      data-property1={property1}
      whileHover={{ backgroundColor: "#D3940F" }}
    >
      <a
        href={href} // Use the href prop
        target="_blank"
        className="[text-decoration:none] relative leading-[24px] text-[inherit]"
      >
        {label}
      </a>
      <img
        className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
        alt=""
        src="/arrow-upright.svg"
      />
    </motion.div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  href: PropTypes.string,
  /** Variant props */
  property1: PropTypes.number,
};

export default Button;
