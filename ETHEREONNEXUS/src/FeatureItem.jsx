import { useMemo } from "react";
import PropTypes from "prop-types";

const FeatureItem = ({
  className = "",
  property1 = "Default",
  description = "Our advanced protocol aggregates algorithmic stablecoins into a diversified, risk-mitigated portfolio, ensuring equilibrium across volatile DeFi markets",
  title = "Harmony Aggregation Protocol",
  featureOpacity,
  frame,
}) => {
  const featureStyle = useMemo(() => {
    return {
      opacity: featureOpacity,
    };
  }, [featureOpacity]);

  return (
    <div
      className={`w-[598px] rounded-lg bg-gray-300 border-lightgray-100 border-[1px] border-solid box-border flex flex-row items-start justify-start p-4 gap-[18px] text-left text-xl text-gray-400 font-helvetica-neue ${className}`}
      data-property1={property1}
      style={featureStyle}
    >
      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-2.5 text-color-white-solid">
        <div className="self-stretch relative leading-[24px] font-medium">
          {title}
        </div>
        <div className="self-stretch relative text-sm leading-[24px] font-light">
          {description}
        </div>
      </div>
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0 object-contain hidden"
        alt=""
        src={frame}
      />
    </div>
  );
};

FeatureItem.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  frame: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,

  /** Style props */
  featureOpacity: PropTypes.string,
};

export default FeatureItem;
