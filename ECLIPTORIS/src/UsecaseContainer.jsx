import PropTypes from "prop-types";
import FeatureCard from "./components/FeatureCard";

const UsecaseContainer = ({ className = "" }) => {
  return (
    <div className="w-full flex items-center justify-center pb-40">
      <div className="w-full max-w-[1220px] py-20 flex flex-wrap items-center justify-start gap-8">
        <div className="w-[380px] flex-col justify-start items-start gap-2.5 flex">
          <div className="self-stretch text-ecliptoris-secondary text-base font-semibold font-urbanist">POTENTIAL USECASES</div>
          <div className="self-stretch flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-black text-base font-medium font-urbanist">Real Solutions for Every DeFi Need</div>
            <div className="self-stretch text-black text-base font-extralight font-urbanist">From maximizing yields to securing assets and simplifying cross-chain swaps, Ecliptoris empowers both beginners and experts to unlock the full potential of decentralized finance</div>
          </div>
        </div>
        <FeatureCard 
          title="Multi-Chain Yield Optimization" 
          description="Ecliptoris identifies and executes the most profitable farming opportunities across chains, dynamically reallocating your funds to maximize returns."
        />
        <FeatureCard 
          title="Seamless Asset Swaps" 
          description="Conduct cross-chain swaps without the hassle of manual bridging. Ecliptoris routes your transactions through the most efficient paths, minimizing fees and maximizing liquidity"
        />
        <FeatureCard 
          title="Passive Income Automation" 
          description="Set and forget with Ecliptoris’s AI tools. Whether it’s staking, lending, or providing liquidity, our platform automates your strategies to achieve consistent growth."
        />
        <FeatureCard 
          title="Risk Mitigation and Security" 
          description="Ecliptoris’s AI scans smart contracts for vulnerabilities, protecting your assets from rug pulls and malicious exploits."
        />
        <FeatureCard 
          title="Educational Onboarding" 
          description="For newcomers, Eclipse AI provides real-time guidance and tutorials, transforming DeFi from intimidating to empowering."
        />
      </div>
    </div>
  );
};

UsecaseContainer.propTypes = {
  className: PropTypes.string,
};

export default UsecaseContainer;
