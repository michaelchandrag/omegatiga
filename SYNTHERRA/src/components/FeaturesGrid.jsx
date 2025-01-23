import FeatureItem from "./FeatureItem";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

gsap.registerPlugin(ScrollTrigger);

const FeaturesGrid = ({ className = "" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const animateOnScroll = (entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const timeline = gsap.timeline();
          timeline.fromTo(
            entry.target,
            { opacity: 0, scale: 0.1 }, 
            {
              opacity: 1,
              scale: 1, 
              duration: 0.75,
              delay: 0.75 + index * 0.2, 
            }
          );

          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(animateOnScroll, {
      threshold: 0.5,
    });

    const elements = containerRef.current.querySelectorAll('.feature-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`flex flex-row items-start justify-center pt-0 px-0 pb-[49px] box-border w-full text-center text-base text-coral-200 font-raleway mq750:pb-8 mq750:box-border ${className}`}
    >
      <div
        ref={containerRef}
        className="w-[1280px] py-0 px-[74px] box-border gap-6 max-w-full grid grid-cols-[repeat(auto-fit,361px)] [grid-row-gap:40px] [grid-column-gap:24px] mq750:pl-[37px] mq750:pr-[37px] mq750:grid mq750:grid-cols-[repeat(auto-fit,361px)] mq750:[grid-row-gap:24px] mq750:[grid-column-gap:24px]"
      >
        <div className="feature-item" style={{ opacity: 0 }}>
          <FeatureItem
            property1="Default"
            description="Leverage advanced DEFAI algorithms to mint synthetic assets that accurately reflect real-world values. AI-driven risk analysis ensures optimal collateralization for secure and scalable issuance."
            title="AI-Powered Synthetic Asset Minting"
            smart="/smart.svg"
          />
        </div>
        <div className="feature-item" style={{ opacity: 0 }}>
          <FeatureItem
            property1="Default"
            description="Syntherra’s AI-backed collateral pools dynamically adjust liquidity and security parameters, ensuring a balanced and decentralized ecosystem for synthetic asset issuance"
            title="Decentralized Collateral Management"
            smart="/frame.svg"
            featureCardBottomHeight="163px"
            deployParameterizedExecutionHeight="125px"
            featureItemWidth="361px"
          />
        </div>
        <div className="feature-item" style={{ opacity: 0 }}>
          <FeatureItem
            property1="Default"
            description="Powered by DEFAI precision, Syntherra utilizes AI-augmented oracles to deliver real-time, tamper-resistant pricing data for unparalleled synthetic asset accuracy."
            title="AI-Enhanced Price Oracles"
            smart="/frame-1.svg"
            featureCardBottomHeight="138px"
            deployParameterizedExecutionHeight="100px"
            featureItemWidth="361px"
          />
        </div>
        <div className="feature-item" style={{ opacity: 0 }}>
          <FeatureItem
            property1="Default"
            description="Unlock DEFAI-powered yield farming opportunities exclusive to synthetic token holders, optimized using machine learning to maximize returns with minimal risk"
            title="Yield Farming 2.0"
            smart="/frame-2.svg"
            featureCardBottomHeight="138px"
            deployParameterizedExecutionHeight="100px"
            featureItemWidth="361px"
          />
        </div>
        <div className="feature-item" style={{ opacity: 0 }}>
          <FeatureItem
            property1="Default"
            description="Built on a modular, cross-chain DEFAI framework, Syntherra enables synthetic assets to seamlessly interact across diverse blockchain ecosystems, enhancing liquidity and usability."
            title="Cross-Chain DEFAI Interoperability"
            smart="/multichain.svg"
            featureCardBottomHeight="163px"
            deployParameterizedExecutionHeight="125px"
            featureItemWidth="361px"
          />
        </div>
        <div className="feature-item" style={{ opacity: 0 }}>
          <FeatureItem
            property1="Default"
            description="Syntherra token holders actively shape the future of the platform through decentralized governance, supported by AI analytics for transparent and data-driven decision-making"
            title="AI-Driven Governance Mechanisms"
            smart="/frame-3.svg"
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
