import PropTypes from "prop-types";

const Menu = ({ className = "", property1 = "Hover", bodyText = "Home" }) => {
  return (
    <div
      className={`rounded-11xl bg-gray-200 h-[38px] overflow-hidden shrink-0 flex flex-row items-center justify-center py-2.5 px-4 box-border relative gap-2.5 text-center text-sm text-coral-200 font-space-grotesk ${className}`}
      data-property1={property1}
    >
      <a className="[text-decoration:none] relative font-medium text-[inherit] z-[0]">
        {bodyText}
      </a>
      <div className="w-[94px] absolute !m-[0] bottom-[-83px] left-[calc(50%_-_47px)] [filter:blur(29px)] rounded-140xl bg-coral-200 h-[74px] overflow-hidden shrink-0 z-[1]" />
    </div>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
  bodyText: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default Menu;
