import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import UseCaseRight from '../UseCaseRight'
import UseCaseLeft from '../UseCaseLeft'
import Button from '../components/Button'

const UseCase = () => {
  return (
    <div className='relative w-full overflow-hidden flex flex-col items-center justify-center bg-black'>
      <div className='z-20 w-full absolute top-0 left-0'>
        <Navbar/>
      </div>
      <div className='w-full flex flex-col items-center justify-center'>
        <div
          className='z-10 max-w-[1280px] w-full flex flex-col items-center justify-center pt-40 px-[89px] pb-[234px] box-border relative gap-[76px] text-center text-5xl text-color-white-solid font-helvetica-neue lg:pt-[42px] lg:pb-[152px] lg:box-border mq450:gap-[19px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[38px] mq750:pt-[27px] mq750:px-11 mq750:pb-[99px] mq750:box-border'
        >
          <div class="z-0 absolute inset-0 m-auto w-[454px] h-[454px] bg-[#f14c4c] rounded-full blur-[600px]"></div>
          <div className="self-stretch flex flex-row items-start justify-center max-w-full">
            <div className="flex flex-col items-start justify-start gap-2 max-w-full">
              <h3 className="m-0 self-stretch relative text-inherit leading-[24px] font-bold font-[inherit] mq450:text-lgi mq450:leading-[19px]">
                POTENTIAL USE CASES
              </h3>
              <div className="relative text-base leading-[24px] font-light text-left">
                Revolutionizing DeFi Applications with Interlinc Protocol
              </div>
            </div>
          </div>
          <div className="w-px h-[708px] absolute !m-[0] right-[639px] bottom-[162px] border-lightgray-300 border-r-[1px] border-solid box-border" />
          <div className="relative max-w-[1280px] w-full flex flex-col items-start justify-center gap-8 mq750:gap-4">
            <div className="self-stretch flex flex-row items-start justify-end">
              <UseCaseRight useCaseNumber='1' description='DAOs can utilize Ethereon Nexus to secure and grow reserves through diversified stablecoin exposure and optimized yield strategies' title='Treasury Stabilization for DAOs' />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <UseCaseLeft useCaseNumber='2' description='Institutions gain access to robust, low-volatility asset pools, ensuring secure entry points into DeFi markets without compromising returns' title='Institutional Capital Anchoring' />
            </div>
            <div className="self-stretch flex flex-row items-start justify-end">
              <UseCaseRight useCaseNumber='3' description='Retail investors can hedge against volatility with ease, leveraging our AI-guided stability aggregation for secure and efficient asset growth' title='Retail Portfolio Safety' />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <UseCaseLeft useCaseNumber='4' description='A bridge for TradFi entities to tokenize and stabilize fiat assets while integrating with decentralized protocols for unparalleled financial synergy' title='Seamless TradFi Integration' />
            </div>
          </div>
        </div>
        <div className='max-w-[1205px] w-full flex items-center justify-start px-16 pb-40'>
          <div className="max-w-[547px] w-full flex flex-col items-start justify-start gap-8 mq750:gap-4">
            <div className="w-full flex flex-col items-start justify-start py-0 px-0 box-border gap-6 font-helvetica-neue">
              <div className="w-full flex flex-col items-start justify-start gap-2 text-color-white-solid">
                <h3 className="m-0 w-[548px] relative leading-[24px] font-thin flex items-center max-w-full mq450:text-lgi mq450:leading-[19px] text-5xl">
                  Meet NexusGuide: Your Decentralized Navigator
                </h3>
                <div className="w-[548px] relative text-xl leading-[24px] flex items-center max-w-full mq450:text-base mq450:leading-[19px]">
                  An intelligent AI assistant powered by state-of-the-art NLP
                  models, NexusGuide offers
                </div>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pl-8 pr-0 box-border gap-2 max-w-[122%] text-base text-color-white-solid">
                <div className="flex flex-row items-center justify-start gap-4 max-w-full">
                  <img
                    className="h-3.5 w-[22px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/frame-2.svg"
                  />
                  <div className="relative leading-[24px] font-light">
                    Personalized onboarding to Ethereon Nexus’s ecosystem
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-4 max-w-full">
                  <img
                    className="h-3.5 w-[22px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/frame-2.svg"
                  />
                  <div className="relative leading-[24px] font-light">
                    Deep insights into algorithmic performance and stability
                    metrics
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-4">
                  <img
                    className="h-3.5 w-[22px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/frame-2.svg"
                  />
                  <div className="relative leading-[24px] font-light shrink-0">
                    Real-time solutions for navigating the platform’s features and
                    optimizing user strategies
                  </div>
                </div>
              </div>
            </div>
            <Button
              property1="Default"
              label="Explore Now"
              exploreNowTextDecoration="unset"
              exploreNowHeight="unset"
              exploreNowDisplay="unset"
              exploreNowAlignItems="unset"
            />
          </div>
        </div>
      </div>
      <div className='z-10 w-full absolute bottom-0 left-0 flex justify-center items-center footer-border'>
        <Footer/>
      </div>
    </div>
  )
}

export default UseCase