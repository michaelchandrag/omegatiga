import PropTypes from "prop-types";
import FeaturesGrid from "./FeaturesGrid";

const FeatureSection = ({ className = "" }) => {
  return (
    <section id="features" className="bg-black self-stretch flex flex-col items-center justify-center gap-16 pt-0 px-5 pb-16 box-border max-w-full text-center text-base text-coral-200">
      <div className="w-[446px] flex flex-col items-start justify-start gap-1 max-w-full">
        <div 
          className="self-stretch relative leading-[30px] font-semibold font-poppins text-color-white-solid"
        >
          KEY FEATURES
        </div>
        <h3 
          className="m-0 relative text-xl leading-[30px] font-medium text-color-white-solid mq450:text-base mq450:leading-[24px] font-poppins"
        >
          Unlock the Power of Innovation: Transformative Features for Smarter DeFi
        </h3>
      </div>
      <div>
        <FeaturesGrid />
      </div>
    </section>
  );
};

FeatureSection.propTypes = {
  className: PropTypes.string,
};

export default FeatureSection;
