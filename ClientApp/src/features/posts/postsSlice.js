/**
 * Redux Essentials
 * Basic Redux Data Flow
 * Creating the Posts Slice
 */
import { createSlice } from '@reduxjs/toolkit'

// define the initial posts array
const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'More text' },
]

// The first step is to create a new Redux "slice" that will 
// contain the data for our posts. 
// Once we have that data in the Redux store, we can create 
// the React components to show that data on the page.
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload)
        },
    },
})

export const { postAdded } = postsSlice.actions

// export the posts reducer function that createSlice generated for us
export default postsSlice.reducer
