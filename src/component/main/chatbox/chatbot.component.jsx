import { useContext } from 'react';
import './chatbox.styles.scss';
import { InboxContext } from '../../../context/inbox.context';
import Avatar, { genConfig } from 'react-nice-avatar';
import { ReactComponent as Phone } from '../../../svgs/phone.svg';
import { ReactComponent as VideoCamera } from '../../../svgs/video-camera.svg';
import { ReactComponent as Close } from '../../../svgs/close.svg';
import { ReactComponent as Minimize } from '../../../svgs/minimize.svg';
import { ReactComponent as Add } from '../../../svgs/add.svg';
import { ReactComponent as Like } from '../../../svgs/like.svg';
import { ReactComponent as Gallery } from '../../../svgs/gallery.svg';
import { ReactComponent as Gif } from '../../../svgs/gif.svg';
import { ReactComponent as Gift } from '../../../svgs/gift.svg';
import { UserContext } from '../../../context/user.context';

const ChatBot = () => {
  const { inbox, setPopInbox, popInbox, setInbox } = useContext(InboxContext);
  const { setFilteredFriends, friends } = useContext(UserContext);
  const { name, messages } = inbox;
  const config = genConfig(name);

  const handlePopInbox = (data) => {
    setFilteredFriends(friends);
    setInbox('');
    setPopInbox(!popInbox);
  };

  return (
    <div className='chatbox-container'>
      <div className='chatbox flex-col'>
        <header className='chatbox-header'>
          <nav className='chatbox-header__nav flex-row'>
            <figure className='flex-row'>
              <Avatar style={{ width: '7rem', height: '7rem' }} {...config} />
              <figcaption className='flex-col align-center'>
                <span className=''>
                  <strong>{name}</strong>
                </span>
                <small>Active Now</small>
              </figcaption>
            </figure>
            <ul className='chatbox-header__actions flex-row align-center'>
              <li>
                <Phone height={30} fill='inherit' />
              </li>
              <li>
                <VideoCamera height={30} fill='inherit' />
              </li>
              <li onClick={handlePopInbox}>
                <Minimize height={30} stroke='inherit' />
              </li>
              <li onClick={handlePopInbox}>
                <Close height={30} stroke='inherit' />
              </li>
            </ul>
          </nav>
        </header>
        <section className='chatbox-section'>
          <ul className=''>
            {messages.map(({ id, message, myMessage }) => {
              return (
                <li key={id} className={myMessage ? `left-message` : `right-message`}>
                  <span>{message}</span>
                </li>
              );
            })}
          </ul>
        </section>
        <footer className='chatbox-footer'>
          <nav>
            <ul className='flex-row '>
              <li>
                <Add height={30} fill='inherit' stroke='inherit' />
              </li>
              <li>
                <Gallery height={30} fill='inherit' stroke='inherit' />
              </li>
              <li>
                <Gift height={30} fill='inherit' stroke='inherit' />
              </li>

              <li>
                <Gif height={30} fill='inherit' stroke='inherit' />
              </li>

              <li>
                <form action=''>
                  <input type='text' placeholder='Aa' />
                </form>
              </li>
              <li className='margin-right-auto'>
                <Like height={30} fill='inherit' stroke='inherit' />
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default ChatBot;
