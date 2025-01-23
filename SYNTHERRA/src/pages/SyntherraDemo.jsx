import { useState } from "react";
import { fetchChatGPTResponse } from "../utils/api";
import Search from "../components/Search";
import TabsMenue from "../components/TabsMenue";
import ClearChatSmall from "../components/ClearChatSmall";
import TextFrame from "../components/TextFrame";

const SyntherraDemo = () => {
  const [userInput, setUserInput] = useState("");
  const [chatResponse, setChatResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [placeholderText, setPlaceholderText] = useState("Let the magic begin, Ask a question");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setIsLoading(true);
    setChatResponse(""); // Clear previous response
    try {
      const response = await fetchChatGPTResponse(userInput);
      setChatResponse(response);
    } catch (error) {
      setChatResponse("Failed to fetch response. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleTextFrameClick = (text) => {
    setPlaceholderText(text);
  };

  return (
    <div
      className={`w-full h-screen p-8 flex items-center bg-gray-500 justify-center p-8 box-border text-left text-3xs text-gray-1000 font-space-grotesk mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[69px] mq750:pr-[69px] mq750:box-border`}
    >
      <div
        className={`relative w-full h-full rounded-3xl bg-gray-1100 h-[634px] flex flex-col items-start justify-start p-4 box-border shrink-0 text-left text-3xs text-gray-1000 font-space-grotesk`}
      >
        <div className="self-stretch h-full rounded-2xl [background:linear-gradient(95.91deg,_#0a0a0b,_#0a0a0a)] overflow-hidden flex flex-row items-start justify-start py-[15px] px-4 gap-4">
          <div className="h-full flex flex-col items-start justify-start gap-4">
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
              <button
                type="button"
                className="bg-transparent cursor-pointer h-6 w-6 relative flex items-center justify-center"
              >
                <img
                  className="h-6 w-6"
                  loading="lazy"
                  alt="Add message"
                  src="/vuesaxboldmessageadd.svg"
                />
              </button>

            </div>
            <div className="h-full rounded-3xs bg-gray-400 overflow-hidden flex flex-col items-start justify-start py-4 px-3 gap-5">
              <Search property1="Default" />
              <div className="self-stretch flex flex-col items-start justify-start gap-3">
                <div className="relative uppercase">History</div>
                <TabsMenue
                  description={false}
                  title="Enhancing Security in Decentralized Finance"
                  component1="/component-1@2x.png"
                />
                <TabsMenue
                  description={false}
                  title="Maximizing Yield with AI in DeFi"               
                  component1="/component-11@2x.png"
                  component1IconOverflow="unset"
                  topCircleTop="calc(50% + 26.5px)"
                  topLineTop="calc(50% - 11.5px)"
                />
                <TabsMenue
                  description={false}
                  title="Revolutionizing DeFi Strategies with AI"
                  component1="/component-1.svg"
                  component1IconOverflow="hidden"
                  topCircleTop="calc(50% + 26px)"
                  topLineTop="calc(50% - 12px)"
                />
                <TabsMenue
                  description={false}
                  title="Unlocking Real-Time Insights in DeFi"
                  component1="/component-12@2x.png"
                  component1IconOverflow="hidden"
                  topCircleTop="calc(50% + 26px)"
                  topLineTop="calc(50% - 12px)"
                />
                <TabsMenue
                  description={false}
                  title="Cross-Chain DeFi for the Modern Investor"
                  component1="/component-13.svg"
                  component1IconOverflow="hidden"
                  topCircleTop="calc(50% + 26px)"
                  topLineTop="calc(50% - 12px)"
                />
                <TabsMenue
                  description={false}
                  title="AI Meets Blockchain: A New Era in Finance"
                  component1="/component-14.svg"
                  component1IconOverflow="hidden"
                  topCircleTop="calc(50% + 26px)"
                  topLineTop="calc(50% - 12px)"
                />
                <TabsMenue
                  description={false}
                  title="Simplifying Blockchain Automation"
                  component1="/component-15.svg"
                  component1IconOverflow="hidden"
                  topCircleTop="calc(50% + 26.5px)"
                  topLineTop="calc(50% - 11.5px)"
                />
              </div>
            </div>
          </div>
          <div className="w-full self-stretch flex flex-col items-center justify-between bg-gray-400 pb-20">
            <div className="w-full h-full flex flex-col items-start justify-start gap-10 relative rounded-3xs overflow-hidden text-gray-1200">
              <div className="w-full border-darkslategray border-b-[0.5px] border-solid box-border w-[677px] overflow-hidden flex flex-row items-center justify-end py-1 px-2 gap-2.5 text-gray-800">
                <div className="rounded-8xs border-gray-700 border-[1px] border-solid overflow-hidden flex flex-row items-center justify-start p-1">
                  <div className="w-[51px]" />
                </div>
                <ClearChatSmall />
              </div>
              <div className="w-full flex flex-col items-center justify-center gap-8">
                <div className="text-xl font-medium text-gray-900">
                  What can I help with?
                </div>
                <div className="w-[540px] flex flex-wrap gap-5">
                  <TextFrame
                    bodyText="What is your platform about?"
                    onClick={() => handleTextFrameClick("What is your platform about?")}
                  />
                  <TextFrame
                    bodyText="Which blockchains does it support?"
                    onClick={() => handleTextFrameClick("Which blockchains does it support?")}
                  />
                  <TextFrame
                    bodyText="Do I need coding skills to use it?"
                    onClick={() => handleTextFrameClick("Do I need coding skills to use it?")}
                  />
                  <TextFrame
                    bodyText="How does it automate strategies?"
                    onClick={() => handleTextFrameClick("How does it automate strategies?")}
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-5">
              <div className="w-[70%] flex flex-col items-start justify-start gap-8">
                <div className="text-gray-1200 text-xs">
                  {chatResponse || "Your response will appear here."}
                </div>
                <form
                  onSubmit={handleSubmit}
                  className={`rounded-3xs bg-gray-600 w-full h-20 overflow-hidden flex flex-row items-center justify-between py-3 px-4 box-border text-left text-3xs text-gray-1000 font-space-grotesk`}
                >
                  <textarea
                    value={userInput}
                    onChange={handleInputChange}
                    className="w-full h-full relative z-[0] bg-gray-600 text-gray-1200 outline-none"
                    placeholder={placeholderText}
                  />
                  <button
                    type="submit"
                    className="cursor-pointer flex items-center justify-center gap-2 bg-transparent"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      "Loading..."
                    ) : (
                      <>
                        <img
                          className="h-5 w-5 relative z-[2]"
                          loading="lazy"
                          alt="send icon"
                          src="/send.svg"
                        />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SyntherraDemo