import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './initialState';
import { addContactsThunk, deleteContactsThunk, fetchContactsThunk } from './thunks';

const handlePending = (state) => {
	state.isLoading = true
	state.error = ''
}

const handleFulfilledContacts = (state, action) => {
	state.isLoading = false
	state.contacts.items = action.payload.data
}

const handleFulfilledAddContact = (state, action) => {
	state.isLoading = false
	state.contacts.items.push(action.payload.data)
}

const handleFulfilledDeleteContact = (state, action) => {
	state.isLoading = false
	state.contacts.items = state.contacts.items.filter(item => item.id !== action.payload.data.id)
}

const handleRejected = (state, { payload }) => {
	state.isLoading = false
	state.error = payload
}

const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {
		setFilter: (state, { payload }) => {
			return ({
				...state,
				filter: payload
			})
		}
	},
	extraReducers: (builder) => {
		builder.addCase(fetchContactsThunk.pending, handlePending)
			.addCase(fetchContactsThunk.fulfilled, handleFulfilledContacts)
			.addCase(fetchContactsThunk.rejected, handleRejected)
			.addCase(addContactsThunk.pending, handlePending)
			.addCase(addContactsThunk.fulfilled, handleFulfilledAddContact)
			.addCase(addContactsThunk.rejected, handleRejected)
			.addCase(deleteContactsThunk.pending, handlePending)
			.addCase(deleteContactsThunk.fulfilled, handleFulfilledDeleteContact)
			.addCase(deleteContactsThunk.rejected, handleRejected)
	}
})

export const contactsReducer = contactsSlice.reducer;

export const { setFilter } = contactsSlice.actions
