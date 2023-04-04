import { createContext, useState } from 'react';

export const InboxContext = createContext({
  popInbox: false,
  inbox: [],
  setPopInbox: () => {},
  setInbox: () => {},
});

export const InboxProvider = ({ children }) => {
  const [popInbox, setPopInbox] = useState(false);
  const [inbox, setInbox] = useState();

  const value = { popInbox, inbox, setInbox, setPopInbox };

  return <InboxContext.Provider value={value}>{children}</InboxContext.Provider>;
};
