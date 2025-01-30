import React from 'react'
import Different from './Different'

const KeyDifferent = () => {
  return (
    <div className="bg-ecliptoris-secondary w-full flex flex-row items-center justify-center px-5 py-20 box-border max-w-full text-center text-xl text-color-white-solid font-raleway mq450:pb-[133px] mq450:box-border mq1050:pb-[205px] mq1050:box-border">
      <div className="relative w-[916px] flex flex-col items-center justify-center gap-[124px] max-w-full mq450:gap-[31px] mq1050:gap-[62px]">
        <img
          className="w-[1145px] h-[148px] absolute top-[300px] -left-20 object-cover"
          alt=""
          src="/wavy-arrow@2x.png"
        />
        <div className="w-[638px] flex flex-col items-center justify-center gap-2 max-w-full">
          <h3 
            className="m-0 self-stretch relative text-inherit leading-[25px] font-semibold font-[inherit] mq450:text-base mq450:leading-[20px]"
          >
            KEY DIFFERENT
          </h3>
          <div
            className="relative text-base leading-[25px]"
          >
            Innovative AI, real-time claims, adaptive coverage, and
            scalable architecture redefining DeFi risk management
          </div>
        </div>
        <div className='w-[916px] flex flex-col items-center justify-center gap-48 max-w-full mq450:gap-[31px] mq1050:gap-[62px]'>
          <div className="self-stretch flex flex-row items-start justify-end max-w-full">
            <div className="w-[735px] flex flex-col items-start justify-start gap-16 max-w-full mq450:gap-4 mq750:gap-8">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[23px] pr-0 box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq750:flex-wrap">
                  <div className="key-different ">
                    <Different
                      description="Syntherra’s DEFAI protocols use AI to optimize collateralization, governance, and risk management, delivering unparalleled operational efficiency"
                      title="AI-Enhanced Decentralization"
                    />
                  </div>
                  <div className="key-different ">
                    <Different
                      description="Designed for the DEFAI ecosystem, Syntherra’s interoperability ensures that synthetic tokens function across multiple blockchains with ease."
                      title="Seamless Cross-Chain DEFAI Integration"
                      differentHeight="111px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[734px] flex flex-row items-start justify-between gap-5 max-w-full mq750:flex-wrap">
            <div className="key-different ">
              <Different
                description="Syntherra’s modular infrastructure can adapt to the evolving demands of DEFAI markets, supporting diverse synthetic asset categories."
                title="Scalable DEFAI Architecture"
                differentHeight="91px"
              />
            </div>
            <div className="key-different ">
              <Different
                description="Combining decentralized governance with AI insights ensures data-driven decisions that align with user and ecosystem needs."
                title="Community-Driven, AI-Supported Governance"
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