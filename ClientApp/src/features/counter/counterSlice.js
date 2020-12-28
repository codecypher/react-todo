/**
 * This file exports a reducer function (counterReducer) for the counter logic.
 */
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        increment: state => {
            // Because Immer knows we have made changes to the draft state object, 
            // we do not have to return anything. 
            // In the same way, the decrement reducer subtracts 1.
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        // The incrementByAmount reducer needs to know how much 
        // to add to the counter value (action.payload).
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// This function is called a thunk and allows us to perform async logic. 
// It can be dispatched like a regular action: `dispatch(incrementAsync(10))`. 
// This will call the thunk with the `dispatch` function as the first argument. 
// Async code can then be executed and other actions can be dispatched.
export const incrementAsync = amount => dispatch => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount));
    }, 1000);
};

// This function is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.value;

export default counterSlice.reducer;
