import TabContainer from "./TabContainer";
import PropTypes from "prop-types";

const UsecaseContainer = ({ className = "" }) => {
  return (
    <div
      className={`overflow-hidden self-stretch h-[990px] flex flex-row items-start justify-center pt-[60px] px-[135px] box-border max-w-full text-center text-base text-black font-kanit mq750:pl-[67px] mq750:pr-[67px] mq750:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="w-full flex flex-row items-center justify-center relative max-w-[1009px]">
        <div className="h-[786px] w-[554px] absolute !m-[0] bottom-[-238px] left-[calc(50%_-_277px)] [filter:blur(550px)] rounded-[50%] bg-stellar-primary" />
        <div className="flex-1 flex flex-col items-center justify-start gap-16 max-w-full z-[1] mq750:gap-4 mq1050:gap-8">
          <div className="relative leading-[130%] capitalize font-light">
            Revolutionize decentralized finance with AI-driven precision,
            real-time data feeds, and multi-chain interoperability. From DeFi
            protocols to GameFi and DAO governance, our platform ensures
            accuracy, security, and scalability through decentralized
            validation, cryptographic safeguards, and adaptive
            analytics—empowering smarter, faster, and more reliable blockchain
            solutions
          </div>
          <TabContainer />
        </div>
      </div>
    </div>
  );
};

UsecaseContainer.propTypes = {
  className: PropTypes.string,
};

export default UsecaseContainer;
