import { useMemo } from "react";
import PropTypes from "prop-types";

const Different = ({
  className = "",
  description = "Syntherra’s DEFAI protocols use AI to optimize collateralization, governance, and risk management, delivering unparalleled operational efficiency",
  title = "AI-Enhanced Decentralization",
  differentHeight,
}) => {
  const differentStyle = useMemo(() => {
    return {
      height: differentHeight,
    };
  }, [differentHeight]);

  return (
    <div
      className={`w-[296px] h-[111px] flex flex-row items-start justify-center text-center text-mini text-coral-200 font-raleway ${className}`}
      style={differentStyle}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-1.5">
        <b className="self-stretch relative leading-[25px]">{title}</b>
        <div className="self-stretch relative text-sm leading-[20px] text-color-white-solid">
          {description}
        </div>
      </div>
    </div>
  );
};

Different.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,

  /** Style props */
  differentHeight: PropTypes.string,
};

export default Different;
