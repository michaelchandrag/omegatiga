import Different from './Different'
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from 'gsap';

const DifferentContainer = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { threshold: 0.1 });

  useEffect(() => {
    const animateOnScroll = (entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const timeline = gsap.timeline();
          timeline.fromTo(
            entry.target,
            { opacity: 0, scale: 0.1 }, 
            {
              opacity: 1,
              scale: 1, 
              duration: 0.5,
              delay: 2 + index * 0.3,
            }
          );

          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(animateOnScroll, {
      threshold: 0.5,
    });

    const elements = containerRef.current.querySelectorAll('.key-different');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full flex flex-row items-start justify-center pt-0 px-5 pb-[316px] box-border max-w-full text-center text-xl text-color-white-solid font-raleway mq450:pb-[133px] mq450:box-border mq1050:pb-[205px] mq1050:box-border">
      <div className="relative w-[916px] flex flex-col items-center justify-center gap-[124px] max-w-full mq450:gap-[31px] mq1050:gap-[62px]">
        <motion.img
          initial={{ opacity: 0, y: "50%" }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: 1.25,
          }}
          className="w-[1145px] h-[148px] absolute top-[270px] -left-20 object-cover"
          alt=""
          src="/wavy-arrow@2x.png"
        />
        <div className="w-[638px] flex flex-col items-center justify-center gap-2 max-w-full">
          <motion.h3 
            initial={{ opacity: 0, y: "100%" }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
            }}
            className="m-0 self-stretch relative text-inherit leading-[25px] font-semibold font-[inherit] mq450:text-base mq450:leading-[20px]"
          >
            KEY DIFFERENT
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0, y: "100%" }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            className="relative text-base leading-[25px]"
          >
            Innovative AI, real-time claims, adaptive coverage, and
            scalable architecture redefining DeFi risk management
          </motion.div>
        </div>
        <div ref={containerRef} className='w-[916px] flex flex-col items-center justify-center gap-[124px] max-w-full mq450:gap-[31px] mq1050:gap-[62px]'>
          <div className="self-stretch flex flex-row items-start justify-end max-w-full">
            <div className="w-[735px] flex flex-col items-start justify-start gap-16 max-w-full mq450:gap-4 mq750:gap-8">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[23px] pr-0 box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq750:flex-wrap">
                  <div className="key-different opacity-0">
                    <Different
                      description="Syntherra’s DEFAI protocols use AI to optimize collateralization, governance, and risk management, delivering unparalleled operational efficiency"
                      title="AI-Enhanced Decentralization"
                    />
                  </div>
                  <div className="key-different opacity-0">
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
            <div className="key-different opacity-0">
              <Different
                description="Syntherra’s modular infrastructure can adapt to the evolving demands of DEFAI markets, supporting diverse synthetic asset categories."
                title="Scalable DEFAI Architecture"
                differentHeight="91px"
              />
            </div>
            <div className="key-different opacity-0">
              <Different
                description="Combining decentralized governance with AI insights ensures data-driven decisions that align with user and ecosystem needs."
                title="Community-Driven, AI-Supported Governance"
                differentHeight="116px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DifferentContainer;
