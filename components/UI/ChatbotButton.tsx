import { useState } from "react";
import styles from "./ChatbotButton.module.css";
import { mdiRobotExcitedOutline } from "@mdi/js";
import Icon from "@mdi/react";

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className={styles.chatButton} onClick={() => setIsOpen(!isOpen)}>
        <Icon path={mdiRobotExcitedOutline} size={1.5} />
      </button>
      <div className={`${styles.chatContent} ${isOpen && styles.open}`}>
        <p>Chatbot: Hello, how can I help you today?</p>
        <input type="text" placeholder="Type your message here..." />
        <button onClick={() => setIsOpen(false)}>Close Chat</button>
      </div>
    </div>
  );
};

export default ChatbotButton;
