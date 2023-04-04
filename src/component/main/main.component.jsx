import './main.styles.scss';
import Messenger from './messenger/messenger.component';
import { UserProvider } from '../../context/user.context';
import { InboxContext } from '../../context/inbox.context';
import { useContext } from 'react';
import ChatBot from './chatbox/chatbot.component';

const Main = () => {
  const { popInbox } = useContext(InboxContext);

  return (
    <main className='main'>
      <UserProvider>{popInbox ? <ChatBot /> : <Messenger />}</UserProvider>
    </main>
  );
};

export default Main;
