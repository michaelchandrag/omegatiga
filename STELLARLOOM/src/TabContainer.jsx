import { useState } from "react";
import { motion } from "framer-motion";
import TabItem from "./TabItem";
import TabButton from "./components/TabButton";
import PropTypes from "prop-types";

const TabContainer = ({ className = "" }) => {
  // State to keep track of active tab
  const [activeTab, setActiveTab] = useState("potential-use-case");

  // Handle tab click to switch between tabs
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div
      className={`w-[726px] flex flex-col items-center justify-start gap-[19px] text-left text-sm text-aether-primary font-instrument-sans ${className}`}
    >
      <div className="w-[342px] rounded-41xl bg-stellar-primary flex flex-col items-start justify-start p-2.5 box-border">
        <div
          className={`self-stretch flex flex-row items-center justify-start text-left text-sm text-aether-primary font-instrument-sans ${className}`}
        >
          {/* Tab Buttons with active state */}
          <TabButton
            title="Potential Use Cases"
            onClick={() => handleTabClick("potential-use-case")}
            isActive={activeTab === "potential-use-case"}
          />
          <TabButton
            title="Key Differentiators"
            onClick={() => handleTabClick("key-differentiators")}
            isActive={activeTab === "key-differentiators"}
          />
        </div>
      </div>

      <div
        className="self-stretch flex flex-col items-start justify-start gap-2 text-base text-black font-kanit"
      >
        {/* Conditional rendering with Framer Motion for smooth transition */}
        <motion.div
          className={`w-full flex flex-col items-center justify-center gap-[8px] ${
            activeTab === "potential-use-case" ? "block" : "hidden"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: activeTab === "potential-use-case" ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <TabItem
            title="DeFi Protocol Data Feeds"
            desc1="Accurate, real-time price oracles for decentralized exchanges, lending platforms, and automated market makers"
            desc2="Enhanced treasury management through predictive analytics and yield optimization"
            isActive={true}
          />
          <TabItem
            title="Algorithmic Stablecoins"
            desc1="AI-curated collateral ratios and dynamic peg maintenance for enhanced stability"
            desc2="Cross-chain collateral monitoring for robust risk management"
            isActive={false}
          />
          <TabItem
            title="Decentralized Insurance Protocols"
            desc1="Parametric Insurance with automated claims processing based on verified event data"
            desc2="Predictive risk assessment models for efficient underwriting and premium optimization"
            isActive={false}
          />
          <TabItem
            title="DAO Governance and Metrics"
            desc1="Transparent on-chain governance analytics, including voter participation patterns and impact simulations"
            desc2="Verifiable AI-audited results for enhanced confidence in decentralized decision-making"
            isActive={false}
          />
          <TabItem
            title="GameFi and NFTs"
            desc1="Dynamic, real-time data feeds for in-game economies and NFT valuations"
            desc2="AI-powered rarity scoring and market trend analysis for enhanced engagement"
            isActive={false}
          />
        </motion.div>

        <motion.div
          className={`w-full flex flex-col items-center justify-center gap-[8px] ${
            activeTab === "key-differentiators" ? "block" : "hidden"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: activeTab === "key-differentiators" ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <TabItem
            title="AI-Driven Precision"
            desc1="Harness state-of-the-art AI to deliver unparalled accuracy, efficiency, and adaptability in data processing and delivery"
            desc2="Adaptive algorithms continually optimize for evolving market conditions"
            isActive={true}
          />
          <TabItem
            title="Comprehensive Decentralization"
            desc1="Operates on a robust validator network, ensuring tamper-proof data validation and seamless uptime"
            desc2="Incentive models align network security with stakeholder interests"
            isActive={false}
          />
          <TabItem
            title="Interoperable and Scalable"
            desc1="Designed for multi-chain ecosystems, with AI-enhanced pathways optimizing data flow across networks"
            desc2="Scalable architecture supports growing data demands and expanding blockchain integrations"
            isActive={false}
          />
          <TabItem
            title="Fortified Security Measures"
            desc1="AI anomaly detection systems proactively shield the network from malicious activity"
            desc2="End-to-end cryptographic safeguards ensure uncompromised data reliability"
            isActive={false}
          />
        </motion.div>
      </div>
    </div>
  );
};

TabContainer.propTypes = {
  className: PropTypes.string,
  property1: PropTypes.number,
};

export default TabContainer;
