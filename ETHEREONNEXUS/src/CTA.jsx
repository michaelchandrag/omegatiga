import PropTypes from "prop-types";

const CTA = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[26.5px] box-border max-w-full text-center text-13xl text-gray-400 font-helvetica-neue ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-[53px] pb-[56.6px] pl-[298px] pr-[299px] box-border bg-[url('/public/cta@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[149px] mq750:pr-[149px] mq750:box-border">
        <div className="self-stretch flex flex-col items-center justify-start gap-8 max-w-full mq750:gap-4">
          <div className="self-stretch flex flex-col items-center justify-start gap-[22px]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[30px] font-bold font-[inherit] mq450:text-lgi mq450:leading-[18px] mq1050:text-7xl mq1050:leading-[24px]">
              TRY DEMO VERSION
            </h1>
            <div className="relative text-base leading-[30px]">
              Be the first to experience Interlinc Protocol. Enter your email to
              access our forthcoming demo and join the liquidity revolution
            </div>
          </div>
          <div className="w-[540px] rounded-lg bg-darkslategray flex flex-row items-center justify-start py-0 pl-4 pr-0 box-border gap-[15px] max-w-full text-left text-base text-gainsboro font-jost mq750:flex-wrap mq750:pt-4 mq750:pr-4 mq750:pb-4 mq750:box-border">
            <div className="flex-1 relative tracking-[0.05em] leading-[24px] font-light inline-block min-w-[143px] max-w-full">
              Enter your email address
            </div>
            <button className="cursor-pointer [border:none] py-[13px] px-[15px] bg-blue rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none flex flex-row items-center justify-center hover:bg-blueviolet">
              <div className="relative text-base leading-[24px] font-semibold font-jost text-color-white-solid text-left">
                SUBMIT
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

CTA.propTypes = {
  className: PropTypes.string,
};

export default CTA;
