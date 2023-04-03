import CircleEH from '../../circle-horizontal-ellipsis/circle.eh.component';
import Avatar, { genConfig } from 'react-nice-avatar';
import './friend-list.styles.scss';

const FriendList = ({ filteredFriends, toggleLiBackground }) => {
  return (
    <ul className='friends-list'>
      {filteredFriends.map(({ name, messages }) => {
        let latestMessage = messages[0].message;

        if (latestMessage.length > 20) latestMessage = latestMessage.substring(0, 20) + '...';
        if (name.length > 15) name = name.substring(0, 15) + '...';

        const config = genConfig(name);

        return (
          <li
            onMouseEnter={toggleLiBackground}
            onMouseLeave={toggleLiBackground}
            className='friends-list__item friend'
            key={name}
          >
            <figure>
              <Avatar style={{ width: '8rem', height: '8rem' }} {...config} />
              <figcaption className='flex-col align-center order-2'>
                <span className='friend-name'>
                  <strong>{name}</strong>
                </span>
                <span className='friend-message'>{latestMessage}</span>
              </figcaption>
              <CircleEH toggleCircleBackground={toggleLiBackground} />
              <Avatar
                className='align-center justify-start border-circle order-4'
                style={{ width: '2rem', height: '2rem' }}
                {...config}
              />
            </figure>
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
