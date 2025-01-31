import React from 'react'
import Different from './Different'

const KeyDifferent = () => {
  return (
    <div className="bg-black w-full flex flex-row items-center justify-center px-5 py-20 box-border max-w-full text-center text-xl text-color-white-solid pb-[300px]">
      <div className="relative w-[916px] flex flex-col items-center justify-center gap-[124px] max-w-full mq450:gap-[31px] mq1050:gap-[62px]">
        <img
          className="w-[1145px] h-[148px] absolute top-[300px] -left-20 object-cover"
          alt=""
          src="/wavy-arrow@2x.png"
        />
        <div className="w-[638px] flex flex-col items-center justify-center gap-2 max-w-full">
          <h3 
            className="m-0 self-stretch relative leading-[25px] font-semibold font-poppins text-color-white-solid"
          >
            KEY DIFFERENT
          </h3>
          <div
            className="relative text-base leading-[25px] font-poppins text-color-white-solid"
          >
            Innovative AI, real-time claims, adaptive coverage, and scalable architecture redefining DeFi risk management
          </div>
        </div>
        <div className='w-[916px] flex flex-col items-center justify-center gap-48 max-w-full mq450:gap-[31px] mq1050:gap-[62px]'>
          <div className="self-stretch flex flex-row items-start justify-end max-w-full">
            <div className="w-[735px] flex flex-col items-start justify-start gap-16 max-w-full mq450:gap-4 mq750:gap-8">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[23px] pr-0 box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq750:flex-wrap">
                  <div className="key-different ">
                    <Different
                      description="Auravast leverages state-of-the-art machine learning to deliver actionable insights and adaptive strategies, setting a new standard for intelligence in DeFi."
                      title="Visionary AI Integration"
                    />
                  </div>
                  <div className="key-different ">
                    <Different
                      description="Our platform spans portfolio management, yield farming, staking, and governance, providing an all-in-one solution for users."
                      title="Comprehensive Ecosystem Focus"
                      differentHeight="111px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row items-start justify-between gap-24 max-w-full mq750:flex-wrap">
            <div className="key-different ">
              <Different
                description="Seamlessly interact with multiple blockchains, unlocking the full potential of DeFi ecosystems"
                title="Cross-Chain Operability"
                differentHeight="91px"
              />
            </div>
            <div className="key-different ">
              <Different
                description="Auravast prioritizes user trust with robust frameworks like zkML and TEE, ensuring data confidentiality and transactional integrity."
                title="Unmatched Security Standards"
                differentHeight="116px"
              />
            </div>
            <div className="key-different ">
              <Different
                description="By combining sophisticated algorithms with intuitive interfaces, Auravast bridges the gap between seasoned DeFi users and newcomers."
                title="Accessible Yet Powerful"
                differentHeight="116px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KeyDifferent