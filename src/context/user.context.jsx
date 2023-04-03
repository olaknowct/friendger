import { createContext, useState } from 'react';
import { users } from '../data/user';

export const UserContext = createContext({
  friends: [],
  filteredFriends: [],
  setFilteredFriends: () => {},
});

export const UserProvider = ({ children }) => {
  const [friends] = useState(users);
  const [filteredFriends, setFilteredFriends] = useState(friends);

  const value = { friends, filteredFriends, setFilteredFriends };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
