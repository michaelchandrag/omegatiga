import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full flex items-center justify-center relative'>
      <img src="/about-bg.png" alt="background" className='w-full h-auto min-h-full absolute top-0 left-0 object-cover' />
      <div className='absolute bottom-0 left-0 right-0 m-auto w-[1100px] h-[100px] bg-jaffa rounded-full blur-[250px]'></div>
      <div className='mt-20 relative w-full max-w-[1280px] p-8 justify-start items-center flex overflow-hidden'>
        <div className='w-full flex-col justify-start items-start gap-6 flex pl-16'>
          <p className='self-stretch text-cerulean text-base font-semibold font-raleway text-color-white-solid'>About Us</p>
          
          <div className='w-full flex flex-col items-start justify-start gap-5'>
            <p className='text-color-white-solid text-xl font-semibold font-poppins'>Auravast: Unlocking DeFi with the Power of AI</p>
            <p className='text-color-white-solid text-base font-light font-poppins'>Auravast is a revolutionary DeFAI platform that merges the limitless possibilities of artificial intelligence with the empowering capabilities of decentralized finance. At Auravast, we envision a financial system where anyone, anywhere, can harness the power of AI to navigate DeFi seamlessly. Our mission is to democratize access to financial freedom by simplifying complex systems and unlocking vast opportunities within the decentralized economy.</p>
          </div>
        </div>

        <img 
          src="/about-animation.gif" 
          alt="animation" 
          className='w-[500px] object-contain' 
        />
      </div>
    </div>
  )
}

export default About