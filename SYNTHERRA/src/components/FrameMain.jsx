import PropTypes from "prop-types";

const FrameMain = ({ className = "", property1 = "Default" }) => {
  return (
    <div
      className={`absolute top-[calc(50%_+_168px)] left-[calc(50%_-_47.5px)] rounded-md bg-gray-300 overflow-hidden flex flex-row items-center justify-start p-1.5 gap-1 text-left text-5xs text-gray-1200 font-space-grotesk ${className}`}
      data-property1={property1}
    >
      <img
        className="h-4 w-4 relative z-[0]"
        loading="lazy"
        alt=""
        src="/block.svg"
      />
      <div className="flex flex-row items-center justify-start z-[1]">
        <div className="relative">Stop generating</div>
      </div>
      <div className="w-[65px] absolute !m-[0] bottom-[-42px] left-[calc(50%_-_33px)] [filter:blur(24px)] rounded-55xl-6 bg-crimson h-[5px] overflow-hidden shrink-0 z-[2]" />
    </div>
  );
};

FrameMain.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default FrameMain;
