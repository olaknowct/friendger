import './form.styles.scss';

const Form = ({ onChangeHandler }) => {
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
