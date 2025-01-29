import React from 'react'
import { motion } from 'framer-motion'

const ConversationTab = ({ title, id }) => {
  return (
    <motion.div 
      id={id} 
      className="cursor-pointer self-stretch py-[15px] px-[32px] justify-start items-center gap-2.5 flex"
      whileHover="hover"
      initial="initial"
      animate="initial"
      variants={{
        initial: { backgroundColor: "#fff" },
        hover: { backgroundColor: "#F1F5F9" },
      }}
      transition={{
        backgroundColor: {
          duration: 0.3,
          ease: "easeInOut",
        },
      }}
    >
      <motion.img 
        src="/convo-icon.svg" 
        alt="convo-icon" 
        className='w-4 h-4 object-contain' 
        initial={{ x: 0 }}
        variants={{
          hover: { x: 20 },
        }}
        transition={{
          color: {
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
      />
      <motion.div 
        className="w-full text-slate-600 text-base font-normal font-inter leading-normal truncate max-w-[256px]"
        initial={{ x: 0 }}
        variants={{
          hover: { x: 20 },
        }}
        transition={{
          color: {
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
      >
        {title}
      </motion.div>
    </motion.div>
  )
}

export default ConversationTab