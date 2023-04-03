import './section.styles.scss';

import Form from '../form/form.component';
import FriendList from '../friend-list/friend-list.component';

const Section = () => {
  return (
    <section className='main-header '>
      <h1 className='title'>Friend List</h1>
      <Form />

      <FriendList />
    </section>
  );
};

export default Section;
