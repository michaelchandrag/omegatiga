import PropTypes from "prop-types";

const PromptBox = ({ className = "", property1 = "Default" }) => {
  return (
    <div
      className={`absolute top-[446px] left-[calc(50%_-_265.5px)] rounded-3xs bg-gray-600 w-[532px] overflow-hidden flex flex-row items-center justify-between py-3 px-4 box-border text-left text-3xs text-gray-1000 font-space-grotesk ${className}`}
      data-property1={property1}
    >
      <div className="relative z-[0]">Let the magic begin, Ask a question</div>
      <div className="w-[129px] absolute !m-[0] bottom-[-82px] left-[calc(50%_-_72px)] [filter:blur(8px)] rounded-140xl bg-steelblue h-[74px] overflow-hidden shrink-0 z-[1]" />
      <img
        className="h-5 w-5 relative z-[2]"
        loading="lazy"
        alt=""
        src="/send.svg"
      />
      <div className="w-[94px] absolute !m-[0] bottom-[-102px] left-[calc(50%_-_47px)] [filter:blur(29px)] rounded-140xl bg-steelblue h-[74px] overflow-hidden shrink-0 z-[3]" />
    </div>
  );
};

PromptBox.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default PromptBox;
