import Button from "./Button";
import PropTypes from "prop-types";

const About = ({ className = "" }) => {
  return (
    <section
      className={`bg-color-white-solid flex flex-row items-center justify-end py-0 pl-16 pr-[42px] box-border max-w-full text-left text-5xl text-black font-helvetica-neue mq450:gap-[45px] mq750:gap-[90px] mq750:pl-8 mq750:pr-[21px] mq750:box-border ${className}`}
    >
      <div className="flex flex-row items-center justify-start gap-[180px] max-w-full lg:gap-[90px] mq450:gap-[22px] mq750:gap-[45px] mq1050:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-8 min-w-[356px] max-w-full mq750:gap-4 mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-0 box-border gap-6 max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-2 max-w-full">
              <h3 className="m-0 w-[548px] relative text-inherit leading-[24px] font-thin font-[inherit] flex items-center max-w-full mq450:text-lgi mq450:leading-[19px]">
                Meet NexusGuide: Your Decentralized Navigator
              </h3>
              <div className="w-[548px] relative text-xl leading-[24px] flex items-center max-w-full mq450:text-base mq450:leading-[19px]">
                An intelligent AI assistant powered by state-of-the-art NLP
                models, NexusGuide offers
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pl-8 pr-0 box-border gap-2 max-w-[122%] text-base">
              <div className="flex flex-row items-center justify-start gap-4 max-w-full">
                <img
                  className="h-3.5 w-[22px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/frame-2.svg"
                />
                <div className="relative leading-[24px] font-light">
                  Personalized onboarding to Ethereon Nexus’s ecosystem
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-4 max-w-full">
                <img
                  className="h-3.5 w-[22px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/frame-2.svg"
                />
                <div className="relative leading-[24px] font-light">
                  Deep insights into algorithmic performance and stability
                  metrics
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-4">
                <img
                  className="h-3.5 w-[22px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/frame-2.svg"
                />
                <div className="relative leading-[24px] font-light shrink-0">
                  Real-time solutions for navigating the platform’s features and
                  optimizing user strategies
                </div>
              </div>
            </div>
          </div>
          <Button
            property1="Default"
            label="Explore Now"
            exploreNowTextDecoration="unset"
            exploreNowHeight="unset"
            exploreNowDisplay="unset"
            exploreNowAlignItems="unset"
          />
        </div>
        <img
          className="w-[447px] relative max-h-full overflow-hidden shrink-0 object-cover max-w-full mq1050:flex-1"
          loading="lazy"
          alt=""
          src="/about-img@2x.png"
        />
      </div>
    </section>
  );
};

About.propTypes = {
  className: PropTypes.string,
};

export default About;
