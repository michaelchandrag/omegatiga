import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Footer = ({ className = "" }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [twitterUrl, setTwitterUrl] = useState('');

  // Fetch API to get the URLs
  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await fetch('https://api.botfood.id/api/v1/solana/stellar');
        if (response.status === 200) {
          const data = await response.json();
          setGithubUrl(data.data.github_url);
          setTwitterUrl(data.data.twitter_url);
        } else {
          console.error('API error: ', response.status);
        }
      } catch (error) {
        console.error('Fetch error: ', error);
      }
    };

    fetchUrls();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(email)) {
      alert('Email submitted: ' + email);
      setEmail('');
      setError('');
    } else {
      setError('Please enter a valid email address.');
    }
  };

  return (
    <div
      className={`self-stretch bg-stellar-primary overflow-hidden flex flex-col items-center justify-start pt-[72px] px-0 pb-0 box-border gap-[77px] max-w-full text-center text-5xl text-aether-primary font-helvetica-neue mq750:gap-[38px] mq450:gap-[19px] mq450:pt-[47px] mq450:box-border ${className}`}
    >
      <div className="w-[671px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[60px] max-w-full mq750:gap-[30px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-2">
          <h3 className="m-0 self-stretch relative text-inherit leading-[25px] font-medium font-[inherit] mq450:text-lgi mq450:leading-[20px]">
            Join Beta Version
          </h3>
          <div className="self-stretch relative text-sm leading-[25px]">
            Curious to see Stellar Loom in action? Sign up now to get early
            access to our demo version!
          </div>
        </div>
        <form onSubmit={handleSubmit} className="w-[540px] rounded-lg bg-color-white-solid flex flex-row items-center justify-center py-0 pl-4 pr-0 box-border gap-[15px] max-w-full text-left mq750:flex-wrap mq750:pt-4 mq750:pr-4 mq750:pb-4 mq750:box-border">
          <div className="w-full h-[40px] relative flex justify-center items-center">
            <input 
              id="email" 
              type="email" 
              placeholder="Enter your email address"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="text-base text-dimgray-100 font-jost tracking-[0.05em] leading-[24px] font-light w-full h-full focus:outline-none" 
              required 
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          <button type="submit" className="cursor-pointer [border:none] py-[13px] px-[15px] bg-aether-primary rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none flex flex-row items-center justify-center hover:bg-darkslateblue">
            <div className="relative text-base leading-[24px] font-semibold font-jost text-color-white-solid text-left">
              SUBMIT
            </div>
          </button>
        </form>
      </div>
      <footer className="self-stretch border-aether-primary border-t-[1px] border-solid flex flex-row items-center justify-between pt-[30px] px-8 pb-8 gap-5 text-center text-sm text-aether-primary font-helvetica-neue mq750:flex-wrap">
        <div className="flex flex-row items-center justify-start py-0 pl-0 pr-[70px] gap-6 mq450:pr-5 mq450:box-border">
          <div className="relative font-medium inline-block min-w-[69px]">
            Follow Us:
          </div>
          <div className="flex flex-row items-center justify-center gap-4">
            <motion.div 
              whileHover={{ y: -5 }} 
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="rounded-lg border-aether-primary border-[1px] border-solid flex flex-row items-center justify-start py-1.5 px-[7px]"
            >
              <a href={twitterUrl} target="_blank" className="h-5 w-5">
                <img
                  className="w-full h-full relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt="Twitter"
                  src="/twitter-icon.svg"
                />
              </a>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }} 
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="h-9 rounded-lg border-aether-primary border-[1px] border-solid box-border flex flex-row items-center justify-start py-1.5 px-[7px]"
            >
              <a href={githubUrl} target="_blank" className="h-5 w-5">
                <img
                  className="w-full h-full relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt="GitHub"
                  src="/github-icon.svg"
                />
              </a>
            </motion.div>
          </div>
        </div>
        <div className="relative font-light font-inter">
          © 2025 AetherQuant All rights reserved.
        </div>
      </footer>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
