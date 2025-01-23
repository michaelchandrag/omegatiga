import { useMemo } from "react";
import PropTypes from "prop-types";

const TextFrame = ({
  className = "",
  property1 = "Default",
  bodyText = "What is your platform about?",
  quesion1Left,
  quesion1Top,
}) => {
  const quesion1Style = useMemo(() => {
    return {
      left: quesion1Left,
      top: quesion1Top,
    };
  }, [quesion1Left, quesion1Top]);

  return (
    <button
      className={`cursor-pointer absolute top-[108px] left-[87.5px] rounded-3xs bg-gray-600 w-[260px] h-[62px] overflow-hidden flex flex-row items-center justify-center p-4 box-border gap-2.5 text-center text-xs text-gray-1200 font-space-grotesk ${className}`}
      data-property1={property1}
      style={quesion1Style}
    >
      <div className="flex-1 relative z-[0]">{bodyText}</div>
      <div className="w-[129px] absolute !m-[0] bottom-[-82px] left-[calc(50%_-_72px)] [filter:blur(8px)] rounded-140xl bg-steelblue h-[74px] overflow-hidden shrink-0 z-[1]" />
    </button>
  );
};

TextFrame.propTypes = {
  className: PropTypes.string,
  bodyText: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,

  /** Style props */
  quesion1Left: PropTypes.string,
  quesion1Top: PropTypes.string,
};

export default TextFrame;
