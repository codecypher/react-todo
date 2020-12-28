/**
 * Redux Essentials
 * Basic Redux Data Flow
 * Adding New Posts
 */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { postAdded } from './postsSlice'

export const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useDispatch()

    const onTitleChanged = (e) => setTitle(e.target.value)
    const onContentChanged = (e) => setContent(e.target.value)

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded({
                    id: nanoid(),
                    title,
                    content,
                })
            )

            setTitle('')
            setContent('')
        }
    }

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="postTitle">Post Title:</label>
                    <input
                        type="text"
                        id="postTitle"
                        name="postTitle"
                        className="form-control"
                        value={title}
                        onChange={onTitleChanged}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="postContent">Content:</label>
                    <textarea
                        id="postContent"
                        name="postContent"
                        className="form-control"
                        value={content}
                        onChange={onContentChanged}
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={onSavePostClicked}>
                    Save Post
                </button>
            </form>
        </section>
    )
}
