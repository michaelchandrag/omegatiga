import PropTypes from "prop-types";

const Logo = ({ className = "", property1 = "Default" }) => {
  return (
    <div
      className={`w-[1.1px] relative rounded-tl-[0.45px] rounded-tr-[0.08px] rounded-br-[0.45px] rounded-bl-[0.08px] bg-gray-100 h-[1.1px] overflow-hidden shrink-0 ${className}`}
      data-property1={property1}
    >
      <div className="absolute h-[63.64%] w-[63.64%] top-[18.18%] right-[18.18%] bottom-[18.18%] left-[18.18%] [filter:blur(0.2px)] rounded-12xs-6 [background:linear-gradient(180deg,_#3aeee3,_#d9d9d9)] overflow-hidden" />
      <div className="absolute h-[63.64%] w-[63.64%] top-[18.18%] right-[18.18%] bottom-[18.18%] left-[18.18%] rounded-12xs-4 [background:linear-gradient(180deg,_#3aeee3,_#d9d9d9)] overflow-hidden" />
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default Logo;
