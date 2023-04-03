import { useContext } from 'react';
import './form.styles.scss';
import { UserContext } from '../../../../context/user.context';

const Form = () => {
  const { setFilteredFriends, friends } = useContext(UserContext);

  const onChangeHandler = (e) => {
    const filtered = friends.filter((user) => {
      return user.name.toLowerCase().startsWith(e.target.value.toLowerCase());
    });

    setFilteredFriends(filtered);
  };
  return (
    <form action='' className='form-search flex-row '>
      <input
        onChange={onChangeHandler}
        type='text'
        className='form-search__input'
        placeholder='search friends'
      />
    </form>
  );
};

export default Form;
