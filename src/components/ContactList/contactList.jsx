import css from './contactList.module.css';
import { phonebookFilterSelector } from 'redux/phonebook/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/phonebook/phonebookSlice';
import {
  contactsFilterSelector,
  contactsListSelector,
  contactsLoading,
} from 'redux/phonebookWithApi/selectors';
import { deleteContactsThunk } from 'redux/phonebookWithApi/thunks';

const ContactList = () => {
  const filterState = useSelector(contactsFilterSelector);

  const contactsState = useSelector(contactsListSelector);
  const isLoading = useSelector(contactsLoading);

  const dispatch = useDispatch();

  const removeContacts = event => {
    dispatch(deleteContactsThunk(event.target.id));
  };

  return (
    <ul className={css.contacts__list}>
      {isLoading && <div>Loading...</div>}
      {!isLoading &&
        contactsState.length > 0 &&
        contactsState.map(data => {
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
