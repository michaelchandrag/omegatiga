import { useMemo } from "react";
import PropTypes from "prop-types";

const TabsMenue = ({
  className = "",
  property1 = "Default",
  title = "Enhancing Security in Decentralized Finance",
  description = false,
  component1,
  component1IconOverflow,
  langchainFlex,
  langchainHeight,
  langchainDisplay,
  topCircleTop,
  topLineTop,
}) => {
  const component1IconStyle = useMemo(() => {
    return {
      overflow: component1IconOverflow,
    };
  }, [component1IconOverflow]);

  const langchainStyle = useMemo(() => {
    return {
      flex: langchainFlex,
      height: langchainHeight,
      display: langchainDisplay,
    };
  }, [langchainFlex, langchainHeight, langchainDisplay]);

  const topCircleStyle = useMemo(() => {
    return {
      top: topCircleTop,
    };
  }, [topCircleTop]);

  const topLineStyle = useMemo(() => {
    return {
      top: topLineTop,
    };
  }, [topLineTop]);

  return (
    <button
      className={`bg-transparent cursor-pointer w-[225px] rounded-6xs border-gray-700 border-[1px] border-solid box-border overflow-hidden flex flex-row items-center justify-start p-3 relative gap-3 text-left text-xs text-gray-900 font-space-grotesk ${className}`}
      data-property1={property1}
    >
      <img
        className="w-4 relative h-4 object-cover hidden z-[0]"
        alt=""
        src={component1}
        style={component1IconStyle}
      />
      <div className="flex-1 flex flex-row items-center justify-start gap-1 z-[1]">
        <div className="flex-1 relative" style={langchainStyle}>
          {title}
        </div>
        {description && (
          <div className="relative text-3xs text-gray-1000">{description}</div>
        )}
      </div>
      <div
        className="w-1.5 absolute !m-[0] top-[calc(50%_+_26px)] right-[9px] [filter:blur(4px)] rounded-55xl-6 [background:linear-gradient(180deg,_#3aeee3,_#d9d9d9)] h-1.5 overflow-hidden shrink-0 opacity-[0.4] z-[2]"
        style={topCircleStyle}
      />
      <div
        className="w-0.5 absolute !m-[0] top-[calc(50%_-_12px)] right-[-6px] [filter:blur(2px)] rounded-55xl-6 [background:linear-gradient(180deg,_rgba(58,_238,_227,_0.24),_rgba(217,_217,_217,_0.24))] h-6 overflow-hidden shrink-0 z-[3]"
        style={topLineStyle}
      />
    </button>
  );
};

TabsMenue.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.bool,
  component1: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,

  /** Style props */
  component1IconOverflow: PropTypes.string,
  langchainFlex: PropTypes.string,
  langchainHeight: PropTypes.string,
  langchainDisplay: PropTypes.string,
  topCircleTop: PropTypes.string,
  topLineTop: PropTypes.string,
};

export default TabsMenue;
