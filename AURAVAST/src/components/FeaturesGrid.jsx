import FeatureItem from "./FeatureItem";
import PropTypes from "prop-types";

const FeaturesGrid = ({ className = "" }) => {
  return (
    <section
      className={`flex flex-row items-start justify-center pt-0 px-0 pb-[49px] box-border w-full text-center text-base text-coral-200 font-raleway mq750:pb-8 mq750:box-border ${className}`}
    >
      <div
        className="w-[1280px] py-0 px-[74px] box-border gap-6 max-w-full grid grid-cols-[repeat(auto-fit,361px)] [grid-row-gap:40px] [grid-column-gap:24px] mq750:pl-[37px] mq750:pr-[37px] mq750:grid mq750:grid-cols-[repeat(auto-fit,361px)] mq750:[grid-row-gap:24px] mq750:[grid-column-gap:24px]"
      >
        <div className="feature-item" >
          <FeatureItem
            description="Leverage AI to intelligently balance, optimize, and diversify your DeFi investments in real time. Our algorithms analyze market trends, liquidity pools, and staking opportunities to deliver unparalleled results."
            title="AI-Enhanced Portfolio Management"
            smart="/feature-1.svg"
          />
        </div>
        <div className="feature-item" >
          <FeatureItem
            description="Auravast’s AI ensures that your staking positions are always earning the maximum possible rewards, adapting to market fluctuations and network conditions instantly."
            title="Dynamic Staking Optimization"
            smart="/feature-2.svg"
            featureCardBottomHeight="163px"
            deployParameterizedExecutionHeight="125px"
            featureItemWidth="361px"
          />
        </div>
        <div className="feature-item" >
          <FeatureItem
            description="Automate multi-chain yield farming strategies with precision. Auravast’s AI dynamically rebalances your assets, ensuring optimal ROI while minimizing risk."
            title="Advanced Yield Farming Automation"
            smart="/feature-3.svg"
            featureCardBottomHeight="138px"
            deployParameterizedExecutionHeight="100px"
            featureItemWidth="361px"
          />
        </div>
        <div className="feature-item" >
          <FeatureItem
            description="Stay at the forefront of decentralized governance with AI-driven insights that simplify proposal analysis, voting delegation, and strategic decision-making."
            title="Governance Intelligence"
            smart="/feature-4.svg"
            featureCardBottomHeight="138px"
            deployParameterizedExecutionHeight="100px"
            featureItemWidth="361px"
          />
        </div>
        <div className="feature-item" >
          <FeatureItem
            description="Auravast’s natural language processing (NLP) capabilities provide a user-friendly experience, making DeFi interactions accessible to everyone, regardless of expertise."
            title="Intuitive User Interface"
            smart="/feature-5.svg"
            featureCardBottomHeight="163px"
            deployParameterizedExecutionHeight="125px"
            featureItemWidth="361px"
          />
        </div>
        <div className="feature-item" >
          <FeatureItem
            description="Built on a foundation of Trusted Execution Environments (TEEs) and zero-knowledge proofs (zkML), Auravast guarantees secure and transparent operations across all functionalities."
            title="Security-First Infrastructure"
            smart="/feature-6.svg"
            featureCardBottomHeight="138px"
            deployParameterizedExecutionHeight="100px"
            featureItemWidth="361px"
          />
        </div>
      </div>
    </section>
  );
};

FeaturesGrid.propTypes = {
  className: PropTypes.string,
};

export default FeaturesGrid;
