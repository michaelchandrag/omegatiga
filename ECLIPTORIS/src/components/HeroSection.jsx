import React from 'react'
import HeroContainer from '../HeroContainer'
import Navbar from './Navbar'

const HeroSection = () => {
  return (
    <section className="self-stretch h-[718px] bg-iceberg overflow-hidden flex flex-col items-center justify-start pt-20 px-0 pb-0 box-border relative max-w-full mq750:pt-[52px] mq750:box-border">
      <img
        className="w-full h-auto min-h-full absolute bottom-0 left-0 overflow-hidden object-cover"
        alt=""
        src="/hero-banner.png"
      />
      <HeroContainer />
      <Navbar />
    </section>
  )
}

export default HeroSection