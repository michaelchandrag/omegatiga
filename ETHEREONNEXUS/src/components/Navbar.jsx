import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const Navbar = ({ className = "" }) => {
  const [githubUrl, setGithubUrl] = useState(""); 
  const [twitterUrl, setTwitterUrl] = useState(""); 

  useEffect(() => {
    const fetchBrandData = async () => {
      try {
        const response = await fetch("https://api.botfood.id/api/v1/solana/ethereon");
        const data = await response.json();

        if (response.status === 200 && data.success) {
          setGithubUrl(data.data.github_url || "#"); 
          setTwitterUrl(data.data.twitter_url || "#"); 
        } else {
          console.error("Error fetching data from API");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchBrandData();
  }, []);

  return (
    <header
      className={`w-full flex items-center justify-between py-6 px-8 box-border gap-0 [row-gap:20px] max-w-full z-[2] text-center text-base text-lightgray-200 font-helvetica-neue mq1050:w-[942px] ${className}`}
    >
      <div className="w-full flex items-center justify-start">
        <img
          src="/logo@2x.png"
          alt="logo"
          className="w-[157px] object-contain"
        />
      </div>
      <div className="w-full flex items-center justify-center gap-6">
        <motion.a
          href="/"
          className="[text-decoration:none] relative leading-[24px] font-light text-lightgray-200 whitespace-nowrap font-helvetica-neue"
          whileHover={{
            y: -7,
            fontWeight: 500,
            color: "white",
            transition: { duration: 0.3 },
          }}
        >
          Home
        </motion.a>
        <motion.a
          href="/about"
          className="[text-decoration:none] relative leading-[24px] font-light text-lightgray-200 whitespace-nowrap font-helvetica-neue"
          whileHover={{
            y: -7,
            fontWeight: 500,
            color: "white",
            transition: { duration: 0.3 },
          }}
        >
          About Us
        </motion.a>
        <motion.a
          href="/features"
          className="[text-decoration:none] relative leading-[24px] font-light font-helvetica-neue text-lightgray-200 whitespace-nowrap"
          whileHover={{
            y: -7,
            fontWeight: 500,
            color: "white",
            transition: { duration: 0.3 },
          }}
        >
          Features
        </motion.a>
        <motion.a
          href="/usecase"
          className="[text-decoration:none] relative leading-[24px] font-light font-helvetica-neue text-lightgray-200 whitespace-nowrap"
          whileHover={{
            y: -7,
            fontWeight: 500,
            color: "white",
            transition: { duration: 0.3 },
          }}
        >
          Use Case
        </motion.a>
        <motion.a
          href="/differentiators"
          className="[text-decoration:none] relative leading-[24px] font-light font-helvetica-neue text-lightgray-200 whitespace-nowrap"
          whileHover={{
            y: -7,
            fontWeight: 500,
            color: "white",
            transition: { duration: 0.3 },
          }}
        >
          Differentiators
        </motion.a>
      </div>
      <div className="w-full flex items-center justify-end gap-4">
        {/* Twitter Link */}
        <motion.a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="twitter cursor-pointer rounded-lg border-color-white-solid border-[1px] border-solid flex flex-row items-center justify-start py-1.5 px-[7px]"
          whileHover={{ y: -7, transition: { duration: 0.3 } }}
        >
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0"
            loading="lazy"
            alt="Twitter"
            src="/frame.svg"
          />
        </motion.a>

        {/* GitHub Link */}
        <motion.a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="github cursor-pointer h-9 rounded-lg border-color-white-solid border-[1px] border-solid box-border flex flex-row items-center justify-start py-1.5 px-[7px]"
          whileHover={{ y: -7, transition: { duration: 0.3 } }}
        >
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0"
            loading="lazy"
            alt="GitHub"
            src="/frame-1.svg"
          />
        </motion.a>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
