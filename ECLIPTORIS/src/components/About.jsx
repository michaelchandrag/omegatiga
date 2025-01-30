import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full flex items-center justify-center bg-iceberg'>
      <div className='w-full max-w-[1280px] p-8 justify-start items-center flex overflow-hidden'>
        <img 
          src="/about-animation.gif" 
          alt="animation" 
          className='w-[500px] object-contain' 
        />

        <div className='max-w-[671px] w-full flex-col justify-start items-start gap-6 flex'>
          <p className='self-stretch text-cerulean text-xl font-bold font-urbanist'>About Us</p>
          
          <div className='w-full flex flex-col items-start justify-start gap-5'>
            <p className='text-black text-base font-normal font-urbanist'>Welcome to <b>Ecliptoris</b>, the celestial bridge connecting the fragmented DeFi universe into a single, harmonious ecosystem. Inspired by the ancient symbolism of eclipses, Ecliptoris represents the balance between light and shadow—the convergence of simplicity and complexity in decentralized finance.</p>
            <p className='text-black text-base font-normal font-urbanist'>Our mission is to empower users to seamlessly navigate the DeFi multiverse, eliminating barriers and enhancing financial opportunities. Leveraging advanced AI technologies, Ecliptoris delivers intuitive cross-chain capabilities, ensuring that the power of blockchain is accessible to all</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About