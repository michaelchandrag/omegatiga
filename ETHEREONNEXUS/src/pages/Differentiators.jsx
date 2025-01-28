import { useState } from "react";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import KeyDiifferentCard from '../KeyDiifferentCard'

const Differentiators = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Handle email input change
  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Simple email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!email) {
      setError("Please enter your email address.");
    } else if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      console.log("Email submitted:", email);
    }
  };

  return (
    <div className='relative w-full overflow-hidden flex flex-col items-center justify-center bg-black'>
      <div class="z-0 absolute inset-0 m-auto w-[454px] h-[454px] bg-[#f14c4c] rounded-full blur-[600px]"></div>
      <img
        className="h-[542px] w-[400px] absolute !m-[0] right-[-56px] bottom-[40%] object-contain"
        loading="lazy"
        alt=""
        src="/colorbgshape@2x.png"
      />
      <div className='z-50 w-full absolute top-0 left-0'>
        <Navbar/>
      </div>
      <div className='max-w-[1205px] w-full flex flex-col items-center justify-center'>
        <div
          className='z-10 max-w-[1205px] w-full flex flex-row items-start justify-center pt-48 pb-16 px-5 box-border relative text-left text-13xl text-color-white-solid font-helvetica-neue mq750:pt-[25px] mq750:pb-[25px] mq750:box-border ${className}'
        >
          <div className="w-full flex flex-row items-start justify-start relative">
            <div className="flex flex-row items-center justify-start [row-gap:20px] w-full z-[1] mq1050:flex-wrap gap-24">
              <div className="w-[503px] flex flex-col items-start justify-start gap-2 max-w-full mq750:min-w-full mq1050:flex-1">
                <div className="self-stretch flex flex-col items-start justify-start gap-4">
                  <h1 className="m-0 self-stretch relative text-inherit leading-[24px] font-bold font-helvetica-neue mq450:text-lgi mq450:leading-[14px] mq1050:text-7xl mq1050:leading-[19px]">
                    KEY DIFFERENTIATORS
                  </h1>
                  <div className="relative text-base leading-[24px] font-light font-helvetica-neue">
                    Elevate your tokenization experience with Noveris, where
                    cutting-edge innovation meets trustless decentralization.
                  </div>
                </div>
                <img
                  className="self-stretch h-[500px] relative max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/differentiator-animation.gif"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[365px] max-w-full text-base mq450:min-w-full">
                <KeyDiifferentCard
                  description="Ethereon Nexus unites the power of multiple algorithmic stablecoins into a singular, harmonious infrastructure, ensuring resilience and adaptability"
                  title="Algorithmic Convergence Framework"
                />
                <KeyDiifferentCard
                  description="Our intelligent systems utilize advanced machine learning to dynamically adjust portfolios, mitigating risk while maximizing returns"
                  title="Adaptive Rebalancing AI"
                />
                <KeyDiifferentCard
                  description="The protocol’s blockchain-agnostic infrastructure provides seamless integration and liquidity across diverse ecosystems"
                  title="Omnichain Nexus Architecture"
                />
                <KeyDiifferentCard
                  description="Token holders shape the evolution of Ethereon Nexus, ensuring it remains adaptive, secure, and community-driven"
                  title="Decentralized Governance Nexus"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1163px] h-[292px] px-6 py-16 mb-48 rounded-2xl cta-border flex-col justify-start items-center gap-8 inline-flex">
          <div className="self-stretch h-[82px] flex-col justify-start items-center gap-[22px] flex">
            <div className="self-stretch text-center text-white text-[32px] font-bold font-helvetica-neue leading-[30px]">TRY DEMO VERSION</div>
            <div className="self-stretch text-center text-white text-base font-normal font-helvetica-neue leading-[30px]">Be the first to experience Interlinc Protocol. Enter your email to access our forthcoming demo and join the liquidity revolution</div>
          </div>
          <form onSubmit={handleSubmit} className="w-[540px] pl-4 bg-darkslategray rounded-lg justify-start items-center gap-[15px] inline-flex">
            <div className="grow shrink basis-0 text-base font-light font-jost leading-normal tracking-wide">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full py-2 text-[#dadada] bg-darkslategray border-none text-base font-light font-jost leading-normal focus:outline-none"
              />
              {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
            </div>

            <div className="px-4 py-2.5 bg-[#2613f4] rounded-tr-lg rounded-br-lg justify-center items-center gap-2.5 flex">
              <button type="submit" className="cursor-pointer bg-transparent border-none text-white text-base font-semibold font-jost leading-normal">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='z-10 w-full absolute bottom-0 left-0 flex justify-center items-center footer-border'>
        <Footer/>
      </div>
    </div>
  )
}

export default Differentiators