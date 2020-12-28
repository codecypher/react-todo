/**
 * Counter.js
 * Redux Essentials
 * The React Counter Component
 * 
 * Redux templates for Create-React-App
 * The Redux templates for Create-React-App is the fastest way to create a new Redux + React project. 
 * It comes with Redux Toolkit and React-Redux already configured using the same "counter" app example 
 * you saw in Part 1.
 * 
 * TODO:
 *   - babel-eslint
 *   - babel-jest
 *   - jest
 *   - react-test-renderer
 */
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    selectCount
} from "./counterSlice";

import styles from "./Counter.module.css";

export function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState("2");

    return (
        <div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
                <span className={styles.value}>{count}</span>
                <button
                    className={styles.button}
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
            </div>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <button
                    className={styles.button}
                    onClick={() =>
                        dispatch(incrementByAmount(Number(incrementAmount) || 0))
                    }
                >
                    Add Amount
                </button>
                <button
                    className={styles.asyncButton}
                    onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
                >
                    Add Async
                </button>
            </div>
        </div>
    );
}
