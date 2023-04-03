import './main.styles.scss';
import Messenger from './messenger/messenger.component';
import { UserProvider } from '../../context/user.context';
import { MessageContext } from '../../context/message.context';
import { useContext } from 'react';
// import { ReactComponent as Phone } from '../../svgs/phone.svg';
// import { ReactComponent as VideoCamera } from '../../svgs/video-camera.svg';

const Main = () => {
  const { popMessage } = useContext(MessageContext);
  console.log(popMessage);
  return (
    <main className='main'>
      <UserProvider>{popMessage ? <h1>test</h1> : <Messenger />}</UserProvider>
    </main>
  );
};

export default Main;
