import './section.styles.scss';

import { useState } from 'react';

import { users } from '../../../data/user';
import Form from '../form/form.component';
import FriendList from '../friend-list/friend-list.component';

const Section = () => {
  const [friends, setFriends] = useState(users);
  const [filteredFriends, setFilteredFriends] = useState(friends);

  const toggleLiBackground = (e) => {
    const link = e.target;
    const parent = link.closest('.friend');
    const parentClass = parent.classList;
    const circleStyle = parent.querySelector('.circle').style;

    // MouseLeave/UnHover
    if (parentClass.contains('hover')) {
      const circleParent = link.closest('.circle');
      let opacity = 0;

      if (circleParent) opacity = 1;

      circleStyle.opacity = opacity;

      parentClass.remove('hover');

      return;
    }

    //  MouseEnter/Hover
    circleStyle.opacity = 1;
    parentClass.add('hover');
  };

  const onChangeHandler = (e) => {
    const filtered = friends.filter((user) => {
      return user.name.toLowerCase().startsWith(e.target.value.toLowerCase());
    });

    setFilteredFriends(filtered);
  };

  return (
    <section className='main-header '>
      <h1 className='title'>Friend List</h1>
      <Form onChangeHandler={onChangeHandler} />
      <FriendList toggleLiBackground={toggleLiBackground} filteredFriends={filteredFriends} />
    </section>
  );
};

export default Section;
