import PropTypes from "prop-types";

const HeroContent = ({ className = "" }) => {
  return (
    <div
      className={`w-[854px] flex flex-col items-center justify-center pt-0 px-0 pb-0 box-border gap-12 max-w-full text-center text-17xl text-color-white-solid font-kanit mq450:gap-6 ${className}`}
    >
      <div className="h-[114.5px] flex flex-col items-center justify-center relative gap-2.5">
        <img
          className="w-[512px] h-64 absolute !m-[0] top-[calc(50%_-_128.25px)] left-[calc(50%_-_256px)] object-cover"
          alt=""
          src="/animation@2x.png"
        />
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/logo@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-6 max-w-full">
        <h1 className="m-0 relative text-inherit leading-[40px] font-bold font-[inherit] mq450:text-3xl mq450:leading-[24px] mq1050:text-10xl mq1050:leading-[32px]">
          The Convergence of Stability and Innovation in Decentralized Finance
        </h1>
        <div className="w-[792px] relative text-sm leading-[24px] font-light font-helvetica-neue flex items-center justify-center max-w-full">
          Ethereon Nexus is the ultimate symphony of algorithmic stability and
          decentralized ingenuity. Inspired by the mythical nexus where
          algorithms converge in harmony, we aggregate and optimize the most
          trusted algorithmic stablecoins. By merging cutting-edge AI,
          predictive analytics, and cross-chain operability, we redefine
          stability as the cornerstone of the decentralized financial ecosystem
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-0 pl-4 pr-0 bg-color-white-solid w-[639px] rounded-lg flex flex-row items-center justify-start box-border gap-[15px] max-w-full mq750:flex-wrap mq750:pt-4 mq750:pr-4 mq750:pb-4 mq750:box-border">
        <div className="flex-1 relative text-base tracking-[0.2em] leading-[24px] font-jost text-color-violet-7 text-left inline-block min-w-[303px] max-w-full">
          9kEcnFj9vwjUkjdsL89fGhKloP76qseTuv7
        </div>
        <button className="cursor-pointer [border:none] py-[13px] px-[15px] bg-blue rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none flex flex-row items-center justify-center gap-2.5 hover:bg-blueviolet">
          <img className="h-6 w-6 relative" alt="" src="/vuesaxboldcopy.svg" />
          <div className="relative text-base leading-[24px] font-semibold font-jost text-color-white-solid text-left">
            Copy CA
          </div>
        </button>
      </button>
    </div>
  );
};

HeroContent.propTypes = {
  className: PropTypes.string,
};

export default HeroContent;
