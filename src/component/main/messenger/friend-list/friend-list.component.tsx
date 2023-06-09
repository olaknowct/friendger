import CircleEH from '../../../circle-horizontal-ellipsis/circle.eh.component';
import Avatar, { genConfig } from 'react-nice-avatar';
import './friend-list.styles.scss';
import React, { useContext } from 'react';
import { InboxContext, InboxProps } from '../../../../context/inbox.context';
import { UserContext } from '../../../../context/user.context';

const FriendList = () => {
  const { filteredFriends } = useContext(UserContext);
  const { setPopInbox, popInbox, setInbox } = useContext(InboxContext);

  const toggleLiBackground = (e: React.MouseEvent<HTMLElement>) => {
    const link = e.target as HTMLElement;
    const parent = link.closest('.friend') as HTMLElement;
    const parentClass = parent.classList;
    const circleStyle = (parent.querySelector('.circle') as HTMLElement)?.style;

    // MouseLeave/UnHover
    if (parentClass.contains('hover')) {
      const circleParent = link.closest('.circle');
      let opacity = 0;

      if (circleParent) {
        opacity = 1;
      }

      parent.style.color = 'black';
      circleStyle.opacity = String(opacity);
      parentClass.remove('hover');

      return;
    }

    //  MouseEnter/Hover
    circleStyle.opacity = '1';
    parent.style.color = 'white';

    parentClass.add('hover');
  };

  const handlePopInbox = (data: InboxProps) => {
    setInbox(data);
    setPopInbox(!popInbox);
  };

  return (
    <ul className='friends-list'>
      {filteredFriends.map(({ name, messages }: InboxProps) => {
        let latestMessage = messages[0].message;

        if (latestMessage.length > 20) latestMessage = latestMessage.substring(0, 20) + '...';
        if (name.length > 15) name = name.substring(0, 15) + '...';

        const config = genConfig(name);
        return (
          <li
            onClick={() => handlePopInbox({ messages, name })}
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
