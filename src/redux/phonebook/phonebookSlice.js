import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
	contacts: [],
	filter: ""
}

const phonebookSlice = createSlice({
	name: 'phonebook',
	initialState,
	reducers: {
		addContact: (state, { payload }) => {
			state.contacts.push({
				name: payload.name,
				number: payload.number,
				id: nanoid(),
			});
		},
		removeContact: (state, { payload }) => {
			return ({
				...state,
				contacts: state.contacts.filter(contact => contact.id !== payload)
			})
		},
		setFilter: (state, { payload }) => {
			return ({
				...state,
				filter: payload
			})
		}
	}
})

export const phonebookReducer = phonebookSlice.reducer;

export const { addContact, removeContact, setFilter } = phonebookSlice.actions;