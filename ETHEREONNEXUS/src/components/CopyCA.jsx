import React, { useState, useEffect } from 'react';

const CopyCA = () => {
  const [keyCA, setKeyCA] = useState(null); 
  const [isLoading, setIsLoading] = useState(true); 
  const [copySuccess, setCopySuccess] = useState('Copy CA'); 

  // Fetch data from the API
  useEffect(() => {
    const fetchBrandData = async () => {
      try {
        const response = await fetch("https://api.botfood.id/api/v1/solana/ethereon"); 
        const data = await response.json();

        if (response.status === 200 && data.success && data.data.key_ca) {
          setKeyCA(data.data.key_ca); 
        } else {
          setKeyCA(null); 
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
        setKeyCA(null); 
      } finally {
        setIsLoading(false); 
      }
    };

    fetchBrandData();
  }, []);

  if (isLoading || !keyCA) {
    return null; 
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(keyCA).then(() => {
      setCopySuccess('Copied!'); 
      setTimeout(() => setCopySuccess('Copy CA'), 2000); 
    }).catch(err => {
      setCopySuccess('Failed to copy!'); 
      console.error('Error copying text: ', err);
      setTimeout(() => setCopySuccess('Copy CA'), 2000); 
    });
  };

  return (
    <div className="cursor-pointer [border:none] py-0 pl-4 pr-0 bg-white/15 w-[639px] rounded-lg flex flex-row items-center justify-start box-border gap-[15px] max-w-full mq750:flex-wrap mq750:pt-4 mq750:pr-4 mq750:pb-4 mq750:box-border">
      <div className="flex-1 relative text-base tracking-[0.2em] leading-[24px] font-jost text-color-white-solid text-left inline-block min-w-[303px] max-w-full">
        {keyCA} 
      </div>
      <button 
        className="cursor-pointer [border:none] py-[13px] px-[15px] bg-white/15 rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none flex flex-row items-center justify-center gap-2.5 hover:bg-blueviolet"
        onClick={handleCopy} 
      >
        <img className="h-6 w-6 relative" alt="" src="/vuesaxboldcopy.svg" />
        <div className="relative text-base leading-[24px] font-semibold font-jost text-color-white-solid text-left">
          {copySuccess} 
        </div>
      </button>
    </div>
  );
};

export default CopyCA;
