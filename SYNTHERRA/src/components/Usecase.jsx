import Number1 from "./Number1";
import PropTypes from "prop-types";

const Usecase = ({
  className = "",
  property1 = "Default",
  description = "Unlock partial exposure to high-value assets like global real estate or precious metals using Syntherra's synthetic tokens",
  title = "Fractional Ownership in the DEFAI Era",
  usecaseCount = '',
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-4 text-center text-xl text-color-white-solid font-ibm-plex-mono ${className}`}
      data-property1={property1}
    >
      <Number1 property1="Number" usecaseCount={usecaseCount} />
      <div className="w-[737px] flex flex-col items-start justify-start text-left text-mini font-raleway">
        <b className="self-stretch relative leading-[25px]">{title}</b>
        <div className="self-stretch relative text-sm leading-[20px]">
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
