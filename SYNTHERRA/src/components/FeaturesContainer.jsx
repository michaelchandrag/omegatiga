import React from 'react'
import FeaturesGrid from './FeaturesGrid'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const FeaturesContainer = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { threshold: 0.1 });

  return (
    <section id="features" className="self-stretch flex flex-col items-center justify-center gap-16 pt-0 px-5 pb-16 box-border max-w-full text-center text-base text-coral-200 font-raleway">
      <div className="w-[446px] flex flex-col items-start justify-start gap-1 max-w-full">
        <motion.div 
          initial={{ opacity: 0, y: '100%' }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
          }}
          className="self-stretch relative leading-[30px] font-semibold"
        >
          KEY FEATURES
        </motion.div>
        <motion.h3 
          initial={{ opacity: 0, y: '100%' }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className="m-0 relative text-xl leading-[30px] font-medium font-[inherit] text-color-white-solid mq450:text-base mq450:leading-[24px]"
        >
          Unlock the Power of Innovation: Transformative Features for Smarter DeFi
        </motion.h3>
      </div>
      <div ref={containerRef}>
        <FeaturesGrid />
      </div>
    </section>
  )
}

export default FeaturesContainer