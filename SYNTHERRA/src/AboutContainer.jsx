import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

gsap.registerPlugin(ScrollTrigger);

const AboutContainer = ({ className = "" }) => {
  const aboutContainerRef = useRef(null);

  useEffect(() => {
    const element = aboutContainerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            element,
            {
              xPercent: 100, 
              opacity: 0,    
            },
            {
              xPercent: 0,   
              opacity: 1,    
              duration: 2,   
            }
          );
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
    id="about"
      className={`self-stretch flex items-start justify-center pt-0 px-0 pb-[49px] box-border max-w-full text-center text-base text-color-white-solid font-raleway mq750:pb-8 mq750:box-border ${className}`}
    >
      <div className="bg-gray-500 overflow-hidden flex flex-row items-center justify-center mq750:gap-6">
        <div className="w-[1280px] h-[516px] flex-1 flex flex-row items-center justify-center relative gap-[57px]">
          <div ref={aboutContainerRef} style={{ opacity: 0 }} className="aboutContainer h-[447px] w-[828px] !m-[0] absolute top-[93px] left-[487px] rounded-13xl border-coral-200 border-t-[15px] border-solid border-coral-200 border-l-[15px] border-solid box-border flex flex-col items-start justify-start pt-16 pb-32 pl-14 pr-[120px] gap-6 max-w-full">
            <div className="rounded-11xl bg-coral-200 flex flex-row items-center justify-center py-2.5 px-[23px]">
              <div className="flex-1 relative font-semibold">About Us</div>
            </div>
            <div className="flex flex-col items-start justify-start gap-2 max-w-full text-left text-xl">
              <h3 className="m-0 relative text-inherit font-semibold font-[inherit] mq450:text-base">
                Syntherra: Redefining Synthetic Assets with AI and
                Decentralization
              </h3>
              <h3 className="m-0 self-stretch relative text-inherit font-light font-[inherit] text-justify mq450:text-base">
                Syntherra is a groundbreaking Decentralized Finance and
                Artificial Intelligence (DEFAI) platform, transforming synthetic
                asset creation and trading. By integrating the power of
                AI-driven insights with decentralized financial protocols, we
                enable seamless access to tokenized assets that mirror the value
                of global commodities, real-world investments, and digital
                currencies. Syntherra is your gateway to the future of DEFAI,
                where precision meets decentralization.
              </h3>
            </div>
          </div>
          <motion.img
            className="h-[400px] absolute !m-[0] top-[93px] left-[21px] object-contain"
            loading="lazy"
            alt="about-img"
            src="/about-img.svg"
            animate={{ translateY: [-20, 20], }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </section>
  );
};

AboutContainer.propTypes = {
  className: PropTypes.string,
};

export default AboutContainer;
