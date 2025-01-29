import React from 'react'
import HeroContainer from '../HeroContainer'
import Navbar from './Navbar'

const HeroSection = () => {
  return (
    <section className="self-stretch bg-color-white-solid overflow-hidden flex flex-col items-center justify-start pt-20 px-0 pb-0 box-border relative max-w-full mq750:pt-[52px] mq750:box-border">
      <img
        className="w-full h-[694.2px] absolute !m-[0] right-0 bottom-0 left-0 max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/banner4-1@2x.png"
      />
      <HeroContainer />
      <Navbar />
    </section>
  )
}

export default HeroSection