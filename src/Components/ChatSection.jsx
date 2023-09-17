import { useState } from "react"

const ChatSection = () => {
    const [activeChat, setActiveChat] = useState(false);

    const toggleChat = () => {
        setActiveChat(!activeChat);
    }
  return (
    <>
       <button onClick={toggleChat} className="messageButton">
          <i className="fa-regular fa-message"></i>
        </button>
     <div className={`chatSection ${activeChat ? "cart-open" : "cart-closed"}`}>
        <div className="chatHeading flex align-center justify-center">
            <h2 className="common-heading">Help</h2>
            <button onClick={toggleChat} className="minusBtn">
            <i className="fa-solid fa-minus"></i>
            </button>
        </div>
        <div className="assistance flex align-center">
            <div>
            <i className="fa-solid fa-comments-dollar"></i>
            </div>
            <div>
                <h3>Live Assistance</h3>
            </div>
        </div>
        <div className="message flex align-center">
            <div>
            <i className="fa-solid fa-envelope-open-text"></i>
            </div>
            <div>
                <h3>Send us a message</h3>
            </div>
        </div>
     </div>
    </>
  )
}

export default ChatSection
