import css from './contactList.module.css';
import {
  phonebookContactsSelector,
  phonebookFilterSelector,
} from 'redux/phonebook/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/phonebook/phonebookSlice';

const ContactList = () => {
  const contactsState = useSelector(phonebookContactsSelector);
  const filterState = useSelector(phonebookFilterSelector);

  const dispatch = useDispatch();

  const removeContacts = event => {
    dispatch(removeContact(event.target.id));
  };

  return (
    <ul className={css.contacts__list}>
      {contactsState.map(data => {
        if (filterState === '') {
          return (
            <li key={data.id} className={css.contacts__item}>
              {data.name}: {data.number}
              <button
                id={data.id}
                className={css.contacts__btn}
                type="button"
                onClick={removeContacts}
              >
                delete
              </button>
            </li>
          );
        }
        if (data.name.toLowerCase().includes(filterState.toLowerCase())) {
          return (
            <li key={data.id} className={css.contacts__item}>
              {data.name}: {data.number}
              <button
                id={data.id}
                className={css.contacts__btn}
                type="button"
                onClick={removeContacts}
              >
                delete
              </button>
            </li>
          );
        }
        return '';
      })}
    </ul>
  );
};

export default ContactList;
