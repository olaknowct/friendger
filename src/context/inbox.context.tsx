import React, { createContext, useState } from 'react';

export type Message = {
  myMessage: boolean;
  message: string;
  date: string;
};

type Inbox = {
  popInbox: boolean;
  inbox: Message[];
  setPopInbox: (popInbox: boolean) => void;
  setInbox: (inbox: Message[]) => void;
};

export const InboxContext = createContext<Inbox>({
  popInbox: false,
  inbox: [],
  setPopInbox: () => {},
  setInbox: () => {},
});

export const InboxProvider = ({ children }: { children: React.ReactNode }) => {
  const [popInbox, setPopInbox] = useState<boolean>(false);
  const [inbox, setInbox] = useState<Message[]>([]);

  const value: Inbox = { popInbox, inbox, setInbox, setPopInbox };

  return <InboxContext.Provider value={value}>{children}</InboxContext.Provider>;
};
