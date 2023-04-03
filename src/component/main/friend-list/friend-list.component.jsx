import CircleEH from '../../circle-horizontal-ellipsis/circle.eh.component';
import './friend-list.styles.scss';

const FriendList = ({ filteredFriends, toggleLiBackground }) => {
  return (
    <ul className='friends-list'>
      {filteredFriends.map(({ name, messages }) => {
        let latestMessage = messages[0].message;

        if (latestMessage.length > 20) latestMessage = latestMessage.substring(0, 20) + '...';
        if (name.length > 15) name = name.substring(0, 15) + '...';

        return (
          <li
            onMouseEnter={toggleLiBackground}
            onMouseLeave={toggleLiBackground}
            className='friends-list__item friend'
            key={name}
          >
            <figure>
              <img
                className='align-center justify-start border-circle order-1'
                height={65}
                width={65}
                src='https://plus.unsplash.com/premium_photo-1679392532113-bee46deab9fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                alt=''
              />
              <figcaption className='flex-col align-center order-2'>
                <span className='friend-name'>
                  <strong>{name}</strong>
                </span>
                <span className='friend-message'>{latestMessage}</span>
              </figcaption>
              <CircleEH toggleCircleBackground={toggleLiBackground} />
              <img
                className='align-center justify-start border-circle order-4'
                height={20}
                width={20}
                src='https://plus.unsplash.com/premium_photo-1679392532113-bee46deab9fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                alt=''
              />
            </figure>
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
