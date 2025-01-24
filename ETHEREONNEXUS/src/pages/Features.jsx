import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FeatureItem from '../FeatureItem'

const Features = () => {
  return (
    <div className='relative w-dvw h-dvh overflow-hidden flex flex-col items-center justify-center bg-black'>
      <div class="z-0 absolute inset-0 m-auto w-[454px] h-[454px] bg-[#f14c4c] rounded-full blur-[600px]"></div>
      <div className='z-10 w-full absolute top-0 left-0'>
        <Navbar/>
      </div>
      <div
        className='z-10 self-stretch flex flex-col items-center justify-start pt-14 px-0 pb-[72px] box-border max-w-full text-center text-5xl text-black font-helvetica-neue mq750:gap-4 mq750:pt-9 mq750:pb-[47px] mq750:box-border'
      >
        <div className="max-w-[1280px] w-full flex flex-col items-center justify-start gap-8 mq750:gap-4">
          <div className="flex flex-col items-center justify-start py-0 px-5 box-border gap-4 max-w-full text-color-white-solid">
            <h3 className="m-0 self-stretch relative text-inherit leading-[24px] font-bold font-[inherit] mq450:text-lgi mq450:leading-[19px]">
              KEY FEATURES
            </h3>
            <div className="relative text-base leading-[24px] font-light text-left">
              Unlock the Power of Innovation with Interlinc Protocol’s Core
              Features
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-left text-xl text-gray-400">
            <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center py-0 px-8 gap-x-5 gap-y-6">
              <FeatureItem
                description="Our advanced protocol aggregates algorithmic stablecoins into a diversified, risk-mitigated portfolio, ensuring equilibrium across volatile DeFi markets"
                title="Harmony Aggregation Protocol"
                frame="/frame1@2x.png"
              />
              <FeatureItem
                description="ISR leverages AI-powered algorithms to dynamically rebalance assets, maintaining optimal stability by anticipating and adapting to market fluctuations"
                title="Intelligent Stability Rebalancer (ISR"
                featureOpacity="unset"
                frame="/frame1@2x.png"
              />
              <FeatureItem
                description="Seamlessly interoperable across Ethereum, Solana, Binance Smart Chain, and beyond, Ethereon Nexus ensures uninterrupted access to liquidity pools across multiple ecosystems"
                title="Omnichain Liquidity Framework"
                featureOpacity="unset"
                frame="/frame1@2x.png"
              />
              <FeatureItem
                description="Unlock unparalleled yield potential through sophisticated liquidity routing mechanisms that identify and execute high-return opportunities in real-time"
                title="Yield Amplification Nexus"
                featureOpacity="unset"
                frame="/frame1@2x.png"
              />
              <FeatureItem
                description="A robust security infrastructure fortified by decentralized governance and advanced smart contract audits ensures trustless and transparent operations"
                title="Sentinel Resilience Network"
                featureOpacity="unset"
                frame="/frame1@2x.png"
              />
              <FeatureItem
                description="Comprehensive, scalable SDKs facilitate integration of Interlinc’s liquidity engine into external dApps, driving innovation across the DeFi ecosystem"
                title="Developer-Centric SDKs"
                featureOpacity="0"
                frame="/frame2@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className='z-10 w-full absolute bottom-0 left-0 flex justify-center items-center footer-border'>
        <Footer/>
      </div>
    </div>
  )
}

export default Features