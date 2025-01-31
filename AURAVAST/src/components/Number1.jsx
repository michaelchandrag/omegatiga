import PropTypes from "prop-types";

const Number1 = ({ className = "", usecaseCount }) => {
  return (
    <div
      className={`usecase-number relative w-[57px] h-[57px] ${className} rounded-lg`}
    >
      {/* Main content */}
      <div className="bg-auravast-primary relative w-full rounded-lg flex flex-col items-center justify-center p-4 box-border text-center text-xl text-color-white-solid font-ibm-plex-mono">
        <b className="self-stretch relative leading-[25px] font-ibm">{usecaseCount}</b>
      </div>
    </div>
  );
};

Number1.propTypes = {
  className: PropTypes.string,
  usecaseCount: PropTypes.string,
};

export default Number1;
