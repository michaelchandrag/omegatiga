import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const fetchBrandData = async (brandCode) => {
  try {
    const response = await fetch(`https://api.botfood.id/api/v1/solana/${brandCode}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data.data; // Return the 'data' object containing key_ca, github_url, twitter_url
  } catch (error) {
    console.error("API call failed", error);
    return null;
  }
};

const CopyCA = ({ className = "", brandCode = "syntherra" }) => {
  const [brandData, setBrandData] = useState(null);
  const [copyStatus, setCopyStatus] = useState("Copy CA"); // Track the copy button text

  useEffect(() => {
    // Fetch brand data when component mounts
    const getBrandData = async () => {
      const data = await fetchBrandData(brandCode);
      setBrandData(data);
    };

    getBrandData();
  }, [brandCode]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(brandData.key_ca);
      setCopyStatus("Copied");
      setTimeout(() => setCopyStatus("Copy CA"), 2000);
    } catch (error) {
      console.error("Failed to copy text", error);
    }
  };

  const isDisabled = !brandData || !brandData.key_ca; // Check if data is not available

  return (
    <button
      disabled={isDisabled} // Disable button if data is not available
      className={`[border:none] py-0 pl-4 pr-0 bg-color-white-solid w-[532px] rounded-lg flex flex-row items-center justify-start box-border gap-[15px] transition-opacity duration-300 ${
        isDisabled ? "opacity-0" : "opacity-100"
      } ${className}`}
    >
      <div className="flex-1 relative text-base tracking-[0.1em] leading-[24px] font-jost text-color-violet-7 text-left">
        {brandData?.key_ca || "No Key Available"}
      </div>
      <button
        onClick={handleCopy}
        disabled={isDisabled} // Disable the inner button as well
        className={`[border:none] py-2.5 px-4 bg-coral-200 h-[50px] rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none flex flex-row items-center justify-center box-border gap-2.5 ${
          isDisabled ? "opacity-0" : ""
        }`}
      >
        <img className="w-6 relative h-6" alt="" src="/vuesaxboldcopy.svg" />
        <div className="relative text-base leading-[24px] font-semibold font-jost text-color-white-solid text-left">
          {copyStatus}
        </div>
      </button>
    </button>
  );
};

CopyCA.propTypes = {
  className: PropTypes.string,
  brandCode: PropTypes.string,
};

export default CopyCA;
