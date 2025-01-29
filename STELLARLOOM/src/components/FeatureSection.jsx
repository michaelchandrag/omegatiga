import FeatureItem from "../FeatureItem";
import PropTypes from "prop-types";

const FeatureSection = ({ className = "" }) => {
  return (
    <div id="features" className="w-full flex items-center justify-center">
      <div
        className={`w-full bg-color-white-solid overflow-hidden flex flex-col items-center justify-center pt-[84px] px-14 pb-52 box-border max-w-[1280px] text-center text-5xl text-black font-kanit mq750:pl-7 mq750:pr-7 mq750:box-border mq450:pt-9 mq450:pb-[88px] mq450:box-border mq1050:pt-[55px] mq1050:pb-[135px] mq1050:box-border ${className}`}
      >
        <div className="self-stretch flex flex-col items-center justify-start gap-16 max-w-full lg:gap-8 mq750:gap-4">
          <div className="flex flex-col items-center justify-start gap-2 max-w-full">
            <h3 className="m-0 self-stretch relative text-inherit leading-[130%] capitalize font-medium font-[inherit] mq450:text-lgi mq450:leading-[25px]">
              Our Core Feature
            </h3>
            <div className="relative text-base leading-[130%] capitalize font-extralight text-left">
              Next-Gen Features Driving Precision, Speed, and Security in
              Decentralized Finance
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[81px] max-w-full text-left text-base lg:gap-10 mq750:gap-5 mq1050:flex-wrap">
            <img
              className="w-[360px] relative max-h-full overflow-hidden shrink-0 max-w-full mq1050:flex-1"
              loading="lazy"
              alt=""
              src="/feature-img.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[472px] max-w-full mq750:min-w-full">
              <FeatureItem
                title="AI-Powered Data Aggregation"
                pointOne="Employs advanced machine learning models to aggregate, preprocess, and authenticate data from diverse sources, minimizing errors and ensuring high-fidelity outputs"
                pointTwo="Dynamic real-time data synchronization tailored to the demands of volatile DeFi markets"
              />
              <FeatureItem
                title="Decentralized Validation Framework"
                pointOne="Operates a distributed network of validators, leveraging cryptographic proofs and zero-knowledge protocols to verify data authenticity and eliminate single points of failure"
                pointTwo="Incentivized validator participation ensures consistent network securiy and accuracy"
              />
              <FeatureItem
                title="Optimized Latency Architecture"
                pointOne="Proprietary AI-driven optimization algorithms deliver ultra-low latency data feeds, ideal for high-frequency trading, DeFi strategies, and other time-sensitive applications"
                pointTwo="Millisecond-level response times ensure users stay ahead of market fluctuations"
              />
              <FeatureItem
                title="Multi-Chain Compatibility"
                pointOne="Native integration with leading blockchains like Ethereum, Solana, Binance Smart Chain, and Polkadot, facilitating seamless cross-chain data interoperability"
                pointTwo="AI-enhanced relays for optimized communication across the heterogeneous blockchain networks"
              />
              <FeatureItem
                title="Predictive Analytics Engine"
                pointOne="AI-powered models for token pricing, yield forecasting, and derivative evaluations, providing actionable insights for enhanced DeFi strategy execution"
                pointTwo="Advanced trend and anomaly detection for proactive risk management"
              />
              <FeatureItem
                title="Robust Security Infrastructure"
                pointOne="Implements AI anomaly detection systems to identify and mitigate potential threats, ensuring uninterrupted data delivery"
                pointTwo="Cryptographically secure storage and encryption safeguard data integrity and user trust"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FeatureSection.propTypes = {
  className: PropTypes.string,
};

export default FeatureSection;
