import './messenger.styles.scss';

import Form from './form/form.component';
import FriendList from './friend-list/friend-list.component';

const Messenger = () => {
  return (
    <div className='messenger-container'>
      <section className='main-header '>
        <h1 className='title'>Friend List</h1>
        <Form />

        <FriendList />
      </section>
    </div>
  );
};

export default Messenger;
