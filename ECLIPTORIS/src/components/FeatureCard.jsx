import React from 'react'

const FeatureCard = ({ title, description }) => {
  return (
    <div className="w-[380px] h-[168px] justify-start items-center gap-4 inline-flex">
      <div className="h-full p-6 bg-white rounded-2xl shadow-[0px_4px_8px_0px_rgba(0,0,0,0.06)] flex-col justify-start items-start gap-4 inline-flex">
        <div className="self-stretch text-black text-base font-semibold font-urbanist">
          {title}
        </div>
        <div className="self-stretch text-justify text-black text-sm font-normal font-urbanist">
          {description}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;