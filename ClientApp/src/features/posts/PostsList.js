/**
 * Redux Essentials
 * Basic Redux Data Flow
 * Showing the Posts List
 */
import React from 'react'
import { useSelector } from 'react-redux'

import { AddPostForm } from './AddPostForm';

import styles from "./Posts.module.css";

// Now that we have some posts data in our store we can 
// create a React component that shows the list of posts. 
export const PostsList = () => {
    // If we are going to render a list of posts, we need to get the data from somewhere. 
    // React components can read data from the Redux store using the useSelector hook 
    // from the React-Redux library.
    // The "selector functions" that you write will be called with the entire Redux state 
    // object as a parameter, and should return the specific data that this component 
    // needs from the store.
    const posts = useSelector((state) => state.posts)

    // Our initial PostsList component will read the state.posts 
    // value from the Redux store then loop over the array of posts 
    // and show each of them on screen.
    const renderedPosts = posts.map((post) => (
        <article className={styles.postExcerpt} key={post.id}>
            <h3>{post.title}</h3>
            <p className={styles.postContent}>{post.content.substring(0, 100)}</p>
        </article>
    ))

    return (
        <div>
            <h2>Redux Essentials Example</h2>
            <AddPostForm />
            <section className={styles.postsList}>
                <h2>Posts</h2>
                {renderedPosts}
            </section>
        </div>
    )
}

