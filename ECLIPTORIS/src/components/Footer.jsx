import PropTypes from "prop-types";
import { useRef, useEffect, useState } from "react";
import Socmed from "./Socmed";

const Footer = ({ className = "" }) => {

  const [socialLinks, setSocialLinks] = useState({
    github_url: "",
    twitter_url: "",
  });

  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const fetchSocialLinks = async () => {
      try {
        const response = await fetch("https://api.botfood.id/api/v1/solana/ecliptoris");
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

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    console.log("Submitted email:", email);

    setIsSubmitted(true);
    setEmail(""); 
  };

  return (
    <div
      className={`self-stretch h-[462px] bg-ecliptoris-secondary flex flex-row items-end justify-center py-32 px-5 box-border relative gap-[108px] max-w-full text-center text-xl text-color-white-solid font-jost mq750:h-auto ${className}`}
    >
      {/* Socmed Component */}
      <Socmed github={socialLinks.github_url} twitter={socialLinks.twitter_url} />

      <div className="w-[1201px] !m-[0] absolute top-[-170px] left-[50%] translate-x-[-50%] rounded-3xl bg-ecliptoris-primary border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-[93px] px-28 min-h-[334px] max-w-full font-raleway">

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center gap-8 w-full">
          {/* Heading */}
          <div className="w-full max-w-[642px] flex flex-col gap-5 justify-center items-center">
            <div class="text-center text-white text-lg font-semibold font-urbanist leading-normal">TRY DEMO VERSION</div>
            <h3 
              className="w-full relative font-urbanist font-light text-base"
            >
              Be among the first to experience Ecliptoris. Sign up with your email for exclusive early access to our beta demo and witness the power of Eclipse AI
            </h3>
          </div>

          {/* Email Form */}
          <form 
            onSubmit={handleSubmit}
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
              className="cursor-pointer [border:none] py-[13px] px-4 bg-ecliptoris-secondary rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none flex flex-row items-center justify-center hover:bg-chocolate"
            >
              <div className="relative text-base leading-[24px] font-semibold font-jost text-color-white-solid text-left">
                {isSubmitted ? "SUBMITTED" : "SUBMIT"}
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
