import PropTypes from "prop-types";

const TabButton = ({ className = "", title = "", onClick, isActive }) => {
  return (
    <div
      onClick={onClick}
      className={`w-[161px] rounded-21xl flex flex-row items-center justify-center py-2 px-4 box-border text-left text-sm text-aether-primary font-instrument-sans ${isActive ? "bg-white" : "bg-stellar-primary"} ${className}`}
    >
      <div className="relative leading-[30px] font-medium">{title}</div>
    </div>
  );
};

TabButton.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired, 
  isActive: PropTypes.bool.isRequired, 
};

export default TabButton;
