import React, { createContext, useState } from 'react';

export const defaultInboxData: InboxProps = {
  name: '',
  messages: [],
};

export type Message = {
  myMessage: boolean;
  message: string;
  date: string;
};

export type InboxProps = {
  name: string;
  messages: Message[];
};

type InboxContextType = {
  popInbox: boolean;
  inbox: InboxProps;
  setPopInbox: (popInbox: boolean) => void;
  setInbox: (inbox: InboxProps) => void;
};

export const InboxContext = createContext<InboxContextType>({
  popInbox: false,
  inbox: defaultInboxData,
  setPopInbox: () => {},
  setInbox: () => {},
});

export const InboxProvider = ({ children }: { children: React.ReactNode }) => {
  const [popInbox, setPopInbox] = useState<boolean>(false);
  const [inbox, setInbox] = useState<InboxProps>(defaultInboxData);

  const value: InboxContextType = { popInbox, inbox, setInbox, setPopInbox };

  return <InboxContext.Provider value={value}>{children}</InboxContext.Provider>;
};
