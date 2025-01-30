import PropTypes from "prop-types";
import FeatureCard from "./FeatureCard";

const FeatureSection = ({ className = "" }) => {
  return (
    <div id="features" className="w-full flex items-center justify-center">
      <div className="w-full max-w-[1220px] py-20 flex flex-wrap items-center justify-start gap-8">
        <div className="w-[380px] flex-col justify-start items-start gap-2.5 flex">
          <div className="self-stretch text-ecliptoris-secondary text-base font-semibold font-urbanist">OUR CORE FEATURES</div>
          <div className="self-stretch flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-black text-base font-medium font-urbanist">Powerful Tools for Smarter and Safer DeFi</div>
            <div className="self-stretch text-black text-base font-extralight font-urbanist">Simplify your DeFi experience with advanced AI, cross-chain connectivity, and robust security features</div>
          </div>
        </div>
        <FeatureCard 
          title="Cross-Chain Harmonization" 
          description="Ecliptoris bridges over 200 Layer 1 and Layer 2 blockchains, allowing users to transact, stake, and swap assets across ecosystems effortlessly. Through dynamic liquidity orchestration, we provide the most efficient routing and lowest slippage for every transaction."
        />
        <FeatureCard 
          title="Eclipse AI Interface" 
          description="Ecliptoris bridges over 200 Layer 1 and Layer 2 blockchains, allowing users to transact, stake, and swap assets across ecosystems effortlessly. Through dynamic liquidity orchestration, we provide the most efficient routing and lowest slippage for every transaction."
        />
        <FeatureCard 
          title="Automated Financial Synergy" 
          description="Maximize your potential with AI-driven automation tools, including dynamic rebalancing, automated yield farming, and liquidity management. Ecliptoris ensures your assets are always working at peak efficiency."
        />
        <FeatureCard 
          title="Secure Celestial Framework" 
          description="Ecliptoris employs cutting-edge security protocols, including Trusted Execution Environments (TEEs) and zero-knowledge proofs, to guarantee transaction integrity. Your assets are safeguarded under the watchful eyes of our AI guardians."
        />
        <FeatureCard 
          title="Intuitive Dashboard" 
          description="Designed for both beginners and advanced users, the Ecliptoris Dashboard provides a fully customizable experience. Tailor your interface to highlight your favorite protocols, monitor key performance metrics, and set up automated strategies with ease."
        />
      </div>
    </div>
  );
};

FeatureSection.propTypes = {
  className: PropTypes.string,
};

export default FeatureSection;
