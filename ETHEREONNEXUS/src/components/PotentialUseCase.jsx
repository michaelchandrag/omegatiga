import UseCaseRight from "../UseCaseRight";
import UseCaseLeft from "../UseCaseLeft";
import UseCaseNumber from "../UseCaseNumber";
import PotentialCard from "./PotentialCard";
import PropTypes from "prop-types";

const PotentialUseCase = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-gray-500 overflow-hidden flex flex-col items-center justify-center pt-16 px-[89px] pb-[234px] box-border relative gap-[76px] max-w-full text-center text-5xl text-color-white-solid font-helvetica-neue lg:pt-[42px] lg:pb-[152px] lg:box-border mq450:gap-[19px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[38px] mq750:pt-[27px] mq750:px-11 mq750:pb-[99px] mq750:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center max-w-full">
        <div className="flex flex-col items-start justify-start gap-2 max-w-full">
          <h3 className="m-0 self-stretch relative text-inherit leading-[24px] font-bold font-[inherit] mq450:text-lgi mq450:leading-[19px]">
            POTENTIAL USE CASES
          </h3>
          <div className="relative text-base leading-[24px] font-light text-left">
            Revolutionizing DeFi Applications with Interlinc Protocol
          </div>
        </div>
      </div>
      <div className="w-px h-[708px] absolute !m-[0] right-[639px] bottom-[162px] border-lightgray-300 border-r-[1px] border-solid box-border" />
      <div className="relative max-w-[1280px] w-full flex flex-col items-start justify-center gap-8 mq750:gap-4">
        <div className="self-stretch flex flex-row items-start justify-end">
          <UseCaseRight />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start">
          <UseCaseLeft />
        </div>
        <div className="self-stretch flex flex-row items-start justify-end max-w-full">
          <div className="h-[136px] w-[681px] relative max-w-full">
            <div className="absolute top-[34px] left-[0px] w-[140px] flex flex-row items-end justify-start">
              <UseCaseNumber componentContent="3" />
              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[18px]">
                <div className="self-stretch h-px relative border-lightgray-400 border-t-[1px] border-solid box-border" />
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[9px]">
                <div className="w-5 h-5 relative rounded-[50%] bg-lightgray-400" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[681px] h-[136px] flex flex-row items-start justify-start pt-0 px-0 pb-6 box-border gap-8 z-[2]">
          <textarea
            className="border-goldenrod border-[1px] border-solid bg-gray-300 h-auto w-[509px] [outline:none] rounded-lg box-border flex flex-col items-start justify-start p-4 font-helvetica-neue font-medium text-base text-color-white-solid"
            placeholder="Seamless TradFi Integration"
            rows={6}
            cols={25}
          />
          <div className="h-[78px] w-[140px] flex flex-col items-start justify-start pt-[34px] px-0 pb-0 box-border">
            <div className="w-[140px] relative h-11">
              <div className="absolute top-[15px] left-[20px] w-[76px] h-[11px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
                <div className="w-[77px] relative border-lightgray-400 border-t-[1px] border-solid box-border h-px" />
              </div>
              <div className="absolute top-[15px] left-[0px] rounded-[50%] bg-lightgray-400 w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[454px] h-[454px] absolute !m-[0] top-[calc(50%_-_227px)] left-[calc(50%_-_227px)] [filter:blur(600px)] rounded-[50%] [background:conic-gradient(from_180deg_at_50%_50%,_rgba(241,_76,_76,_0.5)_0deg,_rgba(247,_186,_81,_0.5)_360deg)] z-[2]" />
      <div className="!m-[0] absolute right-[89px] bottom-[292px] flex flex-col items-start justify-start gap-[90px]">
        <PotentialCard
          description="Retail investors can hedge against volatility with ease, leveraging our AI-guided stability aggregation for secure and efficient asset growth"
          title="Retail Portfolio Safety"
          potentialHeight="112px"
        />
        <div className="flex flex-row items-start justify-start py-0 px-11">
          <UseCaseNumber componentContent="4" />
        </div>
      </div>
    </section>
  );
};

PotentialUseCase.propTypes = {
  className: PropTypes.string,
};

export default PotentialUseCase;
