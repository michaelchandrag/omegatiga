import Chat from "./Chat";
import PropTypes from "prop-types";

const ChatComponent = ({ className = "" }) => {
  return (
    <div
      className={`w-full flex items-start justify-center py-0 px-[138px] box-border text-left text-3xs text-gray-1000 font-space-grotesk mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[69px] mq750:pr-[69px] mq750:box-border ${className}`}
    >
      <Chat property1="ss" />
    </div>
  );
};

ChatComponent.propTypes = {
  className: PropTypes.string,
};

export default ChatComponent;
