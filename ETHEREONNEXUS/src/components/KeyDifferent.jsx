import KeyDiifferentCard from "../KeyDiifferentCard";
import PropTypes from "prop-types";

const KeyDifferent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-gray-600 overflow-hidden flex flex-row items-start justify-center py-[38px] px-5 box-border relative max-w-full text-left text-13xl text-color-white-solid font-helvetica-neue mq750:pt-[25px] mq750:pb-[25px] mq750:box-border ${className}`}
    >
      <div className="h-[832px] w-[346px] absolute !m-[0] top-[calc(50%_-_416px)] right-[401px] [filter:blur(700px)] rounded-[50%] [background:conic-gradient(from_180deg_at_50%_50%,_rgba(241,_76,_76,_0.5)_0deg,_rgba(247,_186,_81,_0.5)_360deg)]" />
      <div className="w-[1065px] flex flex-row items-start justify-start relative max-w-full">
        <img
          className="h-[542px] w-[400px] absolute !m-[0] right-[-107.5px] bottom-[-38px] object-contain"
          loading="lazy"
          alt=""
          src="/colorbgshape@2x.png"
        />
        <div className="flex-1 flex flex-row items-center justify-start [row-gap:20px] max-w-full z-[1] mq1050:flex-wrap">
          <div className="w-[503px] flex flex-col items-start justify-start gap-2 max-w-full mq750:min-w-full mq1050:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-4">
              <h1 className="m-0 self-stretch relative text-inherit leading-[24px] font-bold font-[inherit] mq450:text-lgi mq450:leading-[14px] mq1050:text-7xl mq1050:leading-[19px]">
                KEY DIFFERENTIATORS
              </h1>
              <div className="relative text-base leading-[24px] font-light">
                Elevate your tokenization experience with Noveris, where
                cutting-edge innovation meets trustless decentralization.
              </div>
            </div>
            <img
              className="self-stretch h-[500px] relative max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/key-different-img@2x.png"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[365px] max-w-full text-base mq450:min-w-full">
            <KeyDiifferentCard
              description="Ethereon Nexus unites the power of multiple algorithmic stablecoins into a singular, harmonious infrastructure, ensuring resilience and adaptability"
              tItle="Algorithmic Convergence Framework"
            />
            <KeyDiifferentCard
              description="Our intelligent systems utilize advanced machine learning to dynamically adjust portfolios, mitigating risk while maximizing returns"
              tItle="Adaptive Rebalancing AI"
            />
            <KeyDiifferentCard
              description="The protocol’s blockchain-agnostic infrastructure provides seamless integration and liquidity across diverse ecosystems"
              tItle="Omnichain Nexus Architecture"
            />
            <KeyDiifferentCard
              description="Token holders shape the evolution of Ethereon Nexus, ensuring it remains adaptive, secure, and community-driven"
              tItle="Decentralized Governance Nexus"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

KeyDifferent.propTypes = {
  className: PropTypes.string,
};

export default KeyDifferent;
