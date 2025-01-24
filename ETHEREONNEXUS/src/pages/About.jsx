import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className='relative w-dvw h-dvh overflow-hidden flex flex-col items-center justify-center bg-black'>
      <div class="absolute inset-0 m-auto w-[454px] h-[454px] bg-[#f14c4c] rounded-full blur-[600px]"></div>
      <div className='w-full absolute top-0 left-0'>
        <Navbar/>
      </div>
      <div className='max-w-[1205px] w-full flex items-center justify-between border border-red'>
        <div className='max-w-[687px] w-full flex flex-col items-start justify-start gap-14'>
          <h2 className='font-helvetica-neue text-[40px] text-color-white-solid font-bold'>About Us</h2>
          <div className='flex flex-col items-start justify-start gap-4'>
            <h3 className='font-helvetica-neue text-5xl text-color-white-solid font-bold'>The Convergence of Stability and Innovation in Decentralized Finance</h3>
            <p className='font-helvetica-neue text-base text-color-white-solid font-light leading-normal'>Ethereon Nexus is the ultimate symphony of algorithmic stability and decentralized ingenuity. Inspired by the mythical nexus where algorithms converge in harmony, we aggregate and optimize the most trusted algorithmic stablecoins. By merging cutting-edge AI, predictive analytics, and cross-chain operability, we redefine stability as the cornerstone of the decentralized financial ecosystem</p>
          </div>
        </div>
        <img 
          src="/features-animation.gif" 
          alt="features-animation"
          className='w-full object-contain' 
        />
      </div>
      <div className='w-full absolute bottom-0 left-0 flex justify-center items-center footer-border'>
        <Footer/>
      </div>
    </div>
  )
}

export default About