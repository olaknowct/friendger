import { createContext, useState } from 'react';

export const MessageContext = createContext({
  popMessage: false,
  messages: [],
  setPopMessage: () => {},
  setMessages: () => {},
});

export const MessageProvider = ({ children }) => {
  const [popMessage, setPopMessage] = useState(false);
  const [messages, setMessages] = useState();

  const value = { popMessage, messages, setMessages, setPopMessage };

  return <MessageContext.Provider value={value}>{children}</MessageContext.Provider>;
};
