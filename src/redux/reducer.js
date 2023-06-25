import { combineReducers } from "redux";
import { phonebookReducer } from "./phonebook/phonebookSlice";

export const reducer = combineReducers({
	phonebook: phonebookReducer,
}) 
