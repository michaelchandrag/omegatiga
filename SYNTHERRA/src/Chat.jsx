import Search from "./components/Search";
import TabsMenue from "./components/TabsMenue";
import FrameMain from "./components/FrameMain";
import Logo from "./components/Logo";
import ClearChatSmall from "./components/ClearChatSmall";
import TextFrame from "./components/TextFrame";
import PromptBox from "./components/PromptBox";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Chat = ({ className = "", property1 = "ss" }) => {
  return (
    <motion.div
      className="chat relative"
      whileHover={{ "--hoverOpacity": 1 }} 
      initial={{ "--hoverOpacity": 0 }} 
      style={{ "--hoverOpacity": 0 }} 
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="chat-hover-bg absolute top-0 left-0 w-[1004px] h-[634px] bg-[#ea6f37] rounded-2xl blur-[80px]"
        style={{ opacity: "var(--hoverOpacity)" }}
      ></motion.div>
      
      <div
        className={`relative w-[1004px] rounded-3xl bg-gray-1100 h-[634px] flex flex-col items-start justify-start p-4 box-border shrink-0 text-left text-3xs text-gray-1000 font-space-grotesk ${className}`}
        data-property1={property1}
      >
        <div className="self-stretch rounded-2xl [background:linear-gradient(95.91deg,_#0a0a0b,_#0a0a0a)] overflow-hidden flex flex-row items-end justify-start py-[15px] px-4 gap-4">
          <div className="h-[570px] flex flex-col items-start justify-start gap-4">
            <div className="self-stretch flex flex-row items-start justify-between">
              <div className="flex flex-row items-center justify-start gap-2">
                <img
                  className="h-[23.5px] w-[23px] relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/fulllogo-1-7-2@2x.png"
                />
                <img
                  className="h-[10.7px] w-[100px] relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/fulllogo-1-7-1@2x.png"
                />
              </div>
              <img
                className="h-6 w-6 relative"
                loading="lazy"
                alt=""
                src="/vuesaxboldmessageadd.svg"
              />
            </div>
            <div className="flex-1 rounded-3xs bg-gray-400 overflow-hidden flex flex-col items-start justify-start py-4 px-3 gap-5">
              <Search property1="Default" />
              <div className="self-stretch flex flex-col items-start justify-start gap-1">
                <div className="relative uppercase">History</div>
                <TabsMenue
                  property1="Default"
                  description={false}
                  title="Enhancing Security in Decentralized Finance"
                  component1="/component-1@2x.png"
                />
                <TabsMenue
                  property1="Default"
                  description={false}
                  title="Maximizing Yield with AI in DeFi"               component1="/component-11@2x.png"
                  component1IconOverflow="unset"
                  langchainFlex="unset"
                  langchainHeight="unset"
                  langchainDisplay="unset"
                  topCircleTop="calc(50% + 26.5px)"
                  topLineTop="calc(50% - 11.5px)"
                />
                <TabsMenue
                  property1="Default"
                  description={false}
                  title="Revolutionizing DeFi Strategies with AI"
                  component1="/component-1.svg"
                  component1IconOverflow="hidden"
                  langchainFlex="1"
                  langchainHeight="unset"
                  langchainDisplay="unset"
                  topCircleTop="calc(50% + 26px)"
                  topLineTop="calc(50% - 12px)"
                />
                <TabsMenue
                  property1="Default"
                  description={false}
                  title="Unlocking Real-Time Insights in DeFi"
                  component1="/component-12@2x.png"
                  component1IconOverflow="hidden"
                  langchainFlex="1"
                  langchainHeight="unset"
                  langchainDisplay="unset"
                  topCircleTop="calc(50% + 26px)"
                  topLineTop="calc(50% - 12px)"
                />
                <TabsMenue
                  property1="Default"
                  description={false}
                  title="Cross-Chain DeFi for the Modern Investor"
                  component1="/component-13.svg"
                  component1IconOverflow="hidden"
                  langchainFlex="1"
                  langchainHeight="unset"
                  langchainDisplay="unset"
                  topCircleTop="calc(50% + 26px)"
                  topLineTop="calc(50% - 12px)"
                />
                <TabsMenue
                  property1="Default"
                  description={false}
                  title="AI Meets Blockchain: A New Era in Finance"
                  component1="/component-14.svg"
                  component1IconOverflow="hidden"
                  langchainFlex="1"
                  langchainHeight="unset"
                  langchainDisplay="unset"
                  topCircleTop="calc(50% + 26px)"
                  topLineTop="calc(50% - 12px)"
                />
                <TabsMenue
                  property1="Default"
                  description={false}
                  title="Simplifying Blockchain Automation"
                  component1="/component-15.svg"
                  component1IconOverflow="hidden"
                  langchainFlex="unset"
                  langchainHeight="15px"
                  langchainDisplay="inline-block"
                  topCircleTop="calc(50% + 26.5px)"
                  topLineTop="calc(50% - 11.5px)"
                />
              </div>
            </div>
          </div>
          <div className="h-[572px] flex-1 relative rounded-3xs bg-gray-400 overflow-hidden text-gray-1200">
            <FrameMain property1="Default" />
            <div className="absolute top-[108px] left-[calc(50%_-_147.5px)] rounded-12xs-5 bg-gray-600 w-8 h-[12.2px] overflow-hidden flex flex-col items-center justify-start p-[0.7px] box-border text-12xs-6 text-color-white-solid">
              <div className="flex flex-row items-start justify-start gap-[0.5px]">
                <Logo property1="Default" />
                <div className="flex flex-col items-start justify-start gap-px">
                  <div className="w-[29px] relative inline-block">
                    To connect LangChain to search engines using SerpAPI, you will
                    need to follow these steps:
                  </div>
                  <div className="w-[29px] relative inline-block">
                    <p className="m-0">
                      1. Install the required package: `google-search-results`.
                      You can do this using pip:
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[2px] left-[-2px] border-darkslategray border-b-[0.5px] border-solid box-border w-[677px] overflow-hidden flex flex-row items-center justify-end py-1 px-2 gap-2.5 text-gray-800">
              <div className="rounded-8xs border-gray-700 border-[1px] border-solid overflow-hidden flex flex-row items-center justify-start p-1">
                <div className="w-[51px]" />
              </div>
              <ClearChatSmall property1="Default" />
            </div>
            <div className="absolute top-[66px] left-[calc(50%_-_72.5px)] text-sm font-medium text-gray-900">
              What can I help with?
            </div>
            <button
              className={`cursor-pointer absolute top-[108px] left-[87.5px] rounded-3xs bg-gray-600 w-[260px] h-[62px] overflow-hidden flex flex-row items-center justify-center p-4 box-border gap-2.5 text-center text-xs text-gray-1200 font-space-grotesk`}
            >
              <div className="flex-1 relative z-[0]">What is your platform about?</div>
              <div className="w-[129px] absolute !m-[0] bottom-[-82px] left-[calc(50%_-_72px)] [filter:blur(8px)] rounded-140xl bg-steelblue h-[74px] overflow-hidden shrink-0 z-[1]" />
            </button>
            <button
              className={`cursor-pointer absolute top-[108px] left-[359.5px] rounded-3xs bg-gray-600 w-[260px] h-[62px] overflow-hidden flex flex-row items-center justify-center p-4 box-border gap-2.5 text-center text-xs text-gray-1200 font-space-grotesk`}
            >
              <div className="flex-1 relative z-[0]">Which blockchains does it support?</div>
              <div className="w-[129px] absolute !m-[0] bottom-[-82px] left-[calc(50%_-_72px)] [filter:blur(8px)] rounded-140xl bg-steelblue h-[74px] overflow-hidden shrink-0 z-[1]" />
            </button>
            <button
              className={`cursor-pointer absolute top-[182px] left-[87.5px] rounded-3xs bg-gray-600 w-[260px] h-[62px] overflow-hidden flex flex-row items-center justify-center p-4 box-border gap-2.5 text-center text-xs text-gray-1200 font-space-grotesk`}
            >
              <div className="flex-1 relative z-[0]">Do I need coding skills to use it?</div>
              <div className="w-[129px] absolute !m-[0] bottom-[-82px] left-[calc(50%_-_72px)] [filter:blur(8px)] rounded-140xl bg-steelblue h-[74px] overflow-hidden shrink-0 z-[1]" />
            </button>
            <button
              className={`cursor-pointer absolute top-[182px] left-[359.5px] rounded-3xs bg-gray-600 w-[260px] h-[62px] overflow-hidden flex flex-row items-center justify-center p-4 box-border gap-2.5 text-center text-xs text-gray-1200 font-space-grotesk`}
            >
              <div className="flex-1 relative z-[0]">How does it automate strategies?</div>
              <div className="w-[129px] absolute !m-[0] bottom-[-82px] left-[calc(50%_-_72px)] [filter:blur(8px)] rounded-140xl bg-steelblue h-[74px] overflow-hidden shrink-0 z-[1]" />
            </button>
            <PromptBox property1="Default" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

Chat.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default Chat;
