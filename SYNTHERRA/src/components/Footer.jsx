import Socmed from "../Socmed";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { threshold: 0.1 });

  const [socialLinks, setSocialLinks] = useState({
    github_url: "",
    twitter_url: "",
  });

  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const response = await fetch("https://api.botfood.id/api/v1/solana/syntherra");
        const data = await response.json();
        if (response.ok) {
          const { github_url, twitter_url } = data.data;
          setSocialLinks({ github_url, twitter_url });
        } else {
          console.error("Failed to fetch social links");
        }
      } catch (error) {
        console.error("Error fetching social links:", error);
      }
    };

    fetchSocialLinks();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Handle submission logic (e.g., send email to backend)
    console.log("Submitted email:", email);

    setIsSubmitted(true);
    setEmail(""); // Clear the input field after submission
  };

  return (
    <section
      className={`self-stretch h-[462px] bg-coral-200 flex flex-row items-end justify-center py-32 px-5 box-border relative gap-[108px] max-w-full text-center text-xl text-color-white-solid font-jost mq750:h-auto ${className}`}
    >
      {/* Socmed Component */}
      <Socmed github={socialLinks.github_url} twitter={socialLinks.twitter_url} />

      <div className="w-[1201px] !m-[0] absolute top-[-170px] left-[50%] translate-x-[-50%] rounded-3xl bg-gray-500 border-gray-1200 border-[10px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[93px] px-28 min-h-[334px] max-w-full font-raleway">
        {/* Animated Background */}
        <motion.div 
          initial={{ opacity: 0.25, scale: 0.8 }}
          animate={{ opacity: [0.25, 1, 0.25], scale: [0.8, 1, 0.8] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-blend-overlay top-20 left-[30%] translate-x-[-50%] w-[402px] h-[202px] bg-[#ea6f37] rounded-full blur-[150px]"
        ></motion.div>

        {/* Content */}
        <div ref={containerRef} className="relative flex flex-col items-center justify-start gap-8 max-w-full">
          {/* Heading */}
          <motion.h3 
            initial={{ opacity: 0, y: "50%" }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75 }}
            className="m-0 relative text-inherit font-light font-[inherit] mq450:text-base"
          >
            Be part of the DEFAI revolution with Syntherra. Sign up with your
            email to gain exclusive access to our beta demo and witness how
            Syntherra transforms decentralized synthetic asset innovation
          </motion.h3>

          {/* Email Form */}
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: "50%" }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.75,
              delay: 0.75,
            }}
            className="w-[540px] rounded-lg bg-color-white-solid flex flex-row items-center justify-center py-0 pl-4 pr-0 box-border gap-[15px] max-w-full text-left text-base text-dimgray font-jost mq750:flex-wrap mq750:pt-4 mq750:pr-4 mq750:pb-4 mq750:box-border"
          >
            {/* Email Input Field */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="font-jost text-base flex-1 relative tracking-[0.05em] leading-[24px] font-light inline-block min-w-[143px] max-w-full bg-transparent outline-none border-none"
              required
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="cursor-pointer [border:none] py-[13px] px-4 bg-coral-200 rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none flex flex-row items-center justify-center hover:bg-chocolate"
            >
              <div className="relative text-base leading-[24px] font-semibold font-jost text-color-white-solid text-left">
                {isSubmitted ? "SUBMITTED" : "SUBMIT"}
              </div>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
