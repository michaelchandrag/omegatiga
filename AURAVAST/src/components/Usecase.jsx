import Number1 from "./Number1";
import PropTypes from "prop-types";

const Usecase = ({
  className = "",
  description = "",
  title = "",
  usecaseCount = '',
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-4 text-center text-xl text-color-white-solid font-ibm-plex-mono ${className}`}
    >
      <Number1 property1="Number" usecaseCount={usecaseCount} />
      <div className="w-[737px] flex flex-col items-start justify-start text-left text-mini font-raleway">
        <b className="self-stretch relative leading-[25px] font-poppins text-sm">{title}</b>
        <div className="self-stretch relative text-sm leading-[20px] font-poppins">
          {description}
        </div>
      </div>
    </div>
  );
};

Usecase.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default Usecase;
