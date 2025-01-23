const ClearChatSmall = ({ className = "", }) => {
  return (
    <button
      type="button"
      className={`cursor-pointer bg-transparent w-[116px] relative rounded-8xs h-8 overflow-hidden shrink-0 text-left text-3xs text-gray-800 font-space-grotesk ${className}`}
    >
      <div className="absolute top-[calc(50%_+_43px)] left-[calc(50%_-_71px)] [filter:blur(24px)] rounded-55xl-6 bg-crimson w-[149px] h-[13px] overflow-hidden" />
      <div className="absolute top-[8px] left-[19px] flex flex-row items-center justify-start gap-1">
        <img className="h-4 w-4 relative" alt="" src="/restart-alt.svg" />
        <div className="flex flex-row items-center justify-start">
          <div className="relative">Clear chat</div>
        </div>
      </div>
    </button>
  );
};


export default ClearChatSmall;
