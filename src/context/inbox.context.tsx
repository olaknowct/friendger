import React, { createContext, useState } from 'react';

export const defaultInboxData: Inbox = {
  name: '',
  messages: [],
};

export type Message = {
  myMessage: boolean;
  message: string;
  date: string;
};

type Inbox = {
  name: string;
  messages: Message[];
};

type InboxContextType = {
  popInbox: boolean;
  inbox: Inbox;
  setPopInbox: (popInbox: boolean) => void;
  setInbox: (inbox: Inbox) => void;
};

export const InboxContext = createContext<InboxContextType>({
  popInbox: false,
  inbox: defaultInboxData,
  setPopInbox: () => {},
  setInbox: () => {},
});

export const InboxProvider = ({ children }: { children: React.ReactNode }) => {
  const [popInbox, setPopInbox] = useState<boolean>(false);
  const [inbox, setInbox] = useState<Inbox>(defaultInboxData);

  const value: InboxContextType = { popInbox, inbox, setInbox, setPopInbox };

  return <InboxContext.Provider value={value}>{children}</InboxContext.Provider>;
};
