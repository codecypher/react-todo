/**
 * Redux Essentials
 * https://redux.js.org/tutorials/essentials/part-1-overview-concepts
 */
import { configureStore } from '@reduxjs/toolkit'

// We can import the counterReducer function here and include it when we create the store.
import counterReducer from '../features/counter/counterSlice';

import postsReducer from '../features/posts/postsSlice'
// import usersReducer from '../features/users/usersSlice'
// import notificationsReducer from '../features/notifications/notificationsSlice'

/**
 * The Redux store is created using the configureStore function from Redux Toolkit.
 * Our application might be made up of many different features where each feature might have its own reducer function.
 * When we call configureStore, we can pass in all of the different reducers in an object.
 * The key names in the object will define the keys in our final state value.
 * 
 * Redux allows store setup to be customized with different kinds of plugins ("middleware" and "enhancers"). 
 * configureStore automatically adds several middleware to the store setup by default to provide a good developer experience, 
 * and also sets up the store so that the Redux DevTools Extension can inspect its contents.
 */
export default configureStore({
    // configureStore requires that we pass in a reducer argument.
    reducer: {
        // This says that we want to have a state.counter section of our Redux state object 
        // and that we want the counterReducer function to be in charge of deciding if and 
        // how to update the state.counter section whenever an action is dispatched.
        counter: counterReducer,

        // Redux Essentials: Basic Redux Data Flow
        // This tells Redux that we want our top-level state object to have a field named posts 
        // and all the data for state.posts will be updated by the postsReducer function 
        // when actions are dispatched.
        posts: postsReducer,
        
        // users: usersReducer,
        // notifications: notificationsReducer,
    }
})



