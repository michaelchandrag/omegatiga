import PropTypes from "prop-types";

const Search = ({ className = "", property1 = "Default" }) => {
  return (
    <div
      className={`self-stretch rounded-6xs bg-gray-200 overflow-hidden flex flex-row items-center justify-start p-3 relative gap-3 text-left text-3xs text-gray-1000 font-space-grotesk ${className}`}
      data-property1={property1}
    >
      <div className="w-[17px] absolute !m-[0] top-[calc(50%_+_22px)] left-[12px] [filter:blur(4px)] rounded-55xl-6 [background:linear-gradient(180deg,_#3aeee3,_#d9d9d9)] h-[17px] overflow-hidden shrink-0 opacity-[0] z-[0]" />
      <img
        className="h-4 w-4 relative z-[1]"
        loading="lazy"
        alt=""
        src="/search.svg"
      />
      <div className="flex-1 flex flex-row items-center justify-start z-[2]">
        <div className="relative">Search.....</div>
      </div>
      <div className="w-px absolute !m-[0] bottom-[-3px] left-[calc(50%_-_0.5px)] rounded-55xl-6 [background:linear-gradient(180deg,_#3aeee3,_#d9d9d9)] h-px overflow-hidden shrink-0 [transform:_rotate(-90deg)] [transform-origin:0_0] z-[3]" />
      <img
        className="h-3 w-3 absolute !m-[0] top-[12px] right-[-16px] z-[4]"
        alt=""
        src="/close.svg"
      />
    </div>
  );
};

Search.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default Search;
