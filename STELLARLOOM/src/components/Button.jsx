import PropTypes from "prop-types";
import { hover, motion } from "framer-motion";

const Button = ({
  className = "",
  label = "",
  href = "",
}) => {

  return (
    <motion.button
      variants={{ 
        initial: {backgroundColor: "#f8d80e"}, 
        hover: {backgroundColor: "#D3940F"},
      }} 
      initial="initial"
      animate="initial"
      whileHover="hover"
      className={`cursor-pointer [border:none] py-2.5 px-6 rounded-21xl flex flex-row items-center justify-center gap-4 ${className}`}
    >
      <a
        className="[text-decoration:none] relative text-base leading-[24px] font-helvetica-neue text-aether-primary text-left whitespace-nowrap"
        href={href}
      >
        {label}
      </a>
      <motion.img
        className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
        alt=""
        src="/arrow-upright.svg"
        initial={{ rotate: 0 }}
        variants={{
          hover: { rotate: 45 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </motion.button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
};

export default Button;
