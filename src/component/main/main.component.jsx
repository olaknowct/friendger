import './main.styles.scss';
import Section from './section/section.component';
import { UserProvider } from '../../context/user.context';
// import { ReactComponent as Phone } from '../../svgs/phone.svg';
// import { ReactComponent as VideoCamera } from '../../svgs/video-camera.svg';

const Main = () => {
  return (
    <main className='main'>
      <UserProvider>
        <Section />
      </UserProvider>
    </main>
  );
};

export default Main;
