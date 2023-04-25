import React, { createContext, useState } from 'react';
import { users } from '../data/user';
import { Message } from './inbox.context';

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  messages: Message[];
};

type UserContextType = {
  friends: User[];
  filteredFriends: User[];
  setFilteredFriends: (filteredFriends: User[]) => void;
};

export const UserContext = createContext<UserContextType>({
  friends: [],
  filteredFriends: [],
  setFilteredFriends: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [friends] = useState(users);
  const [filteredFriends, setFilteredFriends] = useState(friends);

  const value = { friends, filteredFriends, setFilteredFriends };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
