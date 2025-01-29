import { useState } from 'react'
import ConversationTab from '../components/ConversationTab'
import { motion } from 'framer-motion';

const DemoVersion = () => {
  const [message, setMessage] = useState(''); 
  const [response, setResponse] = useState(''); 
  const [isLoading, setIsLoading] = useState(false); 
  const [file, setFile] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY;
  
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!message.trim()) return; 

    setIsLoading(true);
    setResponse(''); 
    setHasSubmitted(true);

    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: [{ role: 'user', content: message }]
        })
      });

      const data = await res.json();
      setResponse(data.choices[0]?.message?.content || 'No response received.');
    } catch (error) {
      console.error('Error fetching OpenAI response:', error);
      setResponse('Error fetching response. Try again.');
    }

    setIsLoading(false);
  };

  return (
    <div className='w-dvw h-dvh overflow-hidden flex justify-center items-center pt-[20px] box-border'>
      <div className='w-full h-full bg-slate-100 flex justify-center items-start overflow-hidden'>
        {/* Sidebar */}
        <div className='w-[27%] pt-4 h-full bg-color-white-solid flex-col justify-start items-start gap-2.5 flex'>
          <div className='self-stretch flex-col justify-start items-center gap-5 flex'>
            <div className="h-[50px] justify-center items-center gap-2.5 flex px-[32px]">
              <motion.div 
                className="w-[228px] py-3 bg-gradient-to-r from-[rgba(49,61,82,1)] to-[rgba(0,0,0,1)] rounded-full flex-col justify-center items-center gap-2.5 flex"
                initial={{ background: "linear-gradient(to right, rgba(49,61,82,1), rgba(0,0,0,1))" }}
                whileHover={{ background: "linear-gradient(to right, rgba(0,0,0,1), rgba(49,61,82,1))" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="justify-start items-center gap-2.5 flex">
                  <div className="w-[18px] h-[18px] justify-center items-center flex">
                    <img 
                      src="/plus-icon.svg" 
                      alt="plus-icon" 
                      className='w-full h-full object-contain' 
                    />
                  </div>
                  <div className="text-white text-base font-normal font-inter leading-normal">New chat</div>
                </div>
              </motion.div>
              <motion.div 
                className="cursor-pointer w-[50px] h-[50px] bg-darkgreyblue rounded-[100px] justify-center items-center gap-2.5 flex"
                initial={{ backgroundColor: "#313d52" }}
                whileHover={{ backgroundColor: "#263042" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <img 
                  src="/search-icon.svg" 
                  alt="search-icon" 
                  className='w-[18px] h-[18px] object-contain' 
                />
              </motion.div>
            </div>

            <div className="self-stretch py-4 conversation-border flex-col justify-start items-center gap-5 flex px-[32px]">
              <div className="self-stretch justify-between items-center flex">
                <div className="text-grey text-xs font-normal font-inter leading-[18px]">Your conversations</div>
                <motion.div 
                  className="cursor-pointer text-indigo text-sm font-semibold font-inter leading-tight"
                  initial={{ color: "#5661f6" }}
                  whileHover={{ color: "#2B5CFF" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  Clear All
                </motion.div>
              </div>
            </div>

            <div className="self-stretch flex-col justify-start items-start gap-2 flex">
              <ConversationTab title="Crypto Lending App" id=""/>
              <ConversationTab title="Operator Grammar Types" id=""/>
              <ConversationTab title="Min States For Binary DFA" id=""/>
              <ConversationTab title="Lorem POS system" id=""/>
            </div>
          </div>

          <div class="self-stretch flex-col justify-start items-start gap-2.5 flex">
            <div className="self-stretch py-4 conversation-border flex-col justify-start items-center gap-5 flex px-[32px]">
              <div className="self-stretch justify-between items-center flex">
                <div className="text-grey text-xs font-normal font-inter leading-[18px]">Last 7 Days</div>
              </div>
            </div>
            <div class="self-stretch h-[228px] flex-col justify-start items-start gap-2 flex">
              <ConversationTab title="Create html game environment for website" id=""/>
              <ConversationTab title="Lorem Ipsum Project" id=""/>
              <ConversationTab title="Min States For Binary DFA" id=""/>
              <ConversationTab title="Lorem POS system" id=""/>
            </div>
          </div>
        </div>

        {/* Chat Container */}
        <div className='w-full h-full pb-10 flex-col justify-start items-center flex overflow-hidden bg-slate-100'>
          
          {/* Top Bar */}
          <div className='w-full px-10 pb-4 bg-white shadow-[0px_12px_40px_-12px_rgba(0,0,0,0.06)] border flex-col justify-start items-end gap-2.5 flex overflow-hidden'>
            <div className='w-full justify-end items-center gap-7 flex'>
              <motion.button
                initial={{ backgroundColor: "#fff" }}
                whileHover={{ backgroundColor: "#F1F5F9" }}
                transition={{ duration: 0.5, ease: "easeInOut" }} 
                className='cursor-pointer w-10 h-10 p-[9px] rounded icon-border justify-center items-center flex bg-transparent'
              >
                <img 
                  src="/bookmark-icon.svg" 
                  alt="bookmark-icon" 
                  className='w-[22px] h-[22px] object-contain' 
                />
              </motion.button>
              <motion.button 
                initial={{ backgroundColor: "#fff" }}
                whileHover={{ backgroundColor: "#F1F5F9" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className='cursor-pointer w-10 h-10 p-[9px] rounded icon-border justify-center items-center flex bg-transparent'
              >
                <img 
                  src="/share-icon.svg" 
                  alt="share-icon" 
                  className='w-[22px] h-[22px] object-contain' 
                />
              </motion.button>
            </div>
          </div>

          {/* Inside chat */}
          <div className='self-stretch h-full flex-col justify-center items-center gap-16 flex'>
            <div className='w-full h-full overflow-y-auto flex-col justify-start items-start gap-9 flex pt-24 px-[32px]'>
              
              {/* User chat */}
              {hasSubmitted && (
                <div className="w-full flex-col justify-start items-end gap-2.5 flex">
                  <div className="p-6 bg-white rounded-[20px] flex-col justify-start items-start gap-6 flex overflow-hidden">
                    <div className="self-stretch text-darkbluegreen text-base font-normal font-ibm leading-normal">
                      {message}
                    </div>
                  </div>
                </div>
              )}

              {/* AI Response */}
              {response && (
                <div className="w-full flex-col justify-start items-start gap-2.5 flex">
                  <div className="p-6 bg-white rounded-[20px] flex-col justify-start items-start gap-6 flex overflow-hidden">
                    <div className="self-stretch text-darkbluegreen text-base font-light font-ibm leading-[25px]">
                      {response}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat prompt */}
            <div className='self-stretch flex items-center justify-center px-[32px]'>
              <div className='w-full h-[106px] px-[30px] py-1.5 bg-white rounded-[30px] shadow-[0px_8px_24px_-4px_rgba(0,0,0,0.08)] justify-between items-center gap-16 flex'>
                
                {/* Chat input */}
                <div className='w-full justify-start items-center gap-2 flex'>
                  <div className='w-full justify-start items-center gap-[42px] flex'>
                    <label className='cursor-pointer bg-transparent w-6 h-6 flex justify-center items-center'>
                      <input type="file" className="hidden" onChange={handleFileChange} />
                      <img src="/attachment-icon.svg" alt="attachment-icon" className='w-full h-full' />
                    </label>
                    
                    <textarea
                      className='w-full pt-[20px] resize-none border-none outline-none text-slate-500 text-sm bg-transparent'
                      rows="2"
                      placeholder="What's on your mind?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button 
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className={`cursor-pointer w-[48px] h-[48px] rounded-[100px] shadow-[0px_4px_8px_0px_rgba(86,97,246,0.25)] justify-center items-center flex shrink-0 ${
                    isLoading ? 'bg-gray-400' : 'bg-darkgreyblue'
                  }`}
                >
                  <img 
                    src="/submit-icon.svg"  
                    alt="submit-icon" 
                    className='w-[24px] object-contain'
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DemoVersion