import { useDispatch, useSelector } from 'react-redux';
import css from './filter.module.css';
import { phonebookFilterSelector } from 'redux/phonebook/selectors';
import { setFilter } from 'redux/phonebookWithApi/contactsSlice';
import { contactsFilterSelector } from 'redux/phonebookWithApi/selectors';
// import { setFilter } from 'redux/phonebook/phonebookSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filterState = useSelector(contactsFilterSelector);

  const handleInputChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <label className={css.phonebookFilter__label}>
      Find contacts by name
      <input
        className={css.phonebookFilter__input}
        onChange={handleInputChange}
        value={filterState}
        type="text"
        name="filter"
        pattern="^[A-Za-z\u0080-\uFFFF ']+$"
      />
    </label>
  );
};

export default Filter;
