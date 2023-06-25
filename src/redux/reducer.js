import { combineReducers } from "redux";
import { phonebookReducer } from "./phonebook/phonebookSlice";
import { contactsReducer } from "./phonebookWithApi/contactsSlice";

export const reducer = combineReducers({
	phonebook: phonebookReducer,
	contacts: contactsReducer,
}) 
