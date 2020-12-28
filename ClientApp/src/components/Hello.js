/**
 * Introducing JSX
 * https://reactjs.org/docs/introducing-jsx.html
 */

import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

// Rendering a Component
// When React sees an element representing a user-defined component,
// it passes JSX attributes and children to this component as a single object.
// We call this object props.
// Always start component names with a capital letter.

// All React components must act like pure functions with respect to their props.
// It must never modify its own props.

function Welcome(props) {
    return <h1>Welcome {props.name}!</h1>;
}

function formatDate(date) {
    return date.toLocaleDateString();
}

function Avatar(props) {
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}


// You can also use an ES6 class to define a component
export class Hello extends Component {
    static displayName = Hello.name;

    //static user = {
    //    firstName: 'Harper',
    //    lastName: 'Perez'
    //};

    // Specifying Attributes with JSX
    // element = <img src={user.avatarUrl}></img>;
    // element = <img src={user.avatarUrl} />;

    // It is safe to embed user input in JSX
    // title = response.potentiallyMaliciousInput;
    // element = <h1>{title}</h1>;

    constructor(props) {
        super(props);

        this.name = '';
        //this.user = user;
        this.firstName = 'Harper';
        this.lastName = 'Perez';

        // Embedding expressions and functions in JSX
        this.element = <h1>Hello, {this.formatName()}!</h1>;
        this.elementClock = (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
        setInterval(this.tick, 1000);

        this.comment = {
            date: new Date(),
            text: 'I hope you enjoy learning React!',
            author: {
                name: 'Hello Kitty',
                avatarUrl: 'https://placekitten.com/g/64/64',
            },
        };
    }

    formatName() {
        return this.firstName + ' ' + this.lastName;
    }

    // You can use JSX inside if statements and for loops,
    // assign it to variables, accept it as arguments, and
    // return it from functions.
    getGreeting(user) {
        // if (user) {
        //     return <h1>Hello, {this.formatName(user)}!</h1>;
        // }
        // return <h1>Hello, Stranger.</h1>;

        return <h1>Hello, {this.formatName(user)}!</h1>;
    }

    // React Only Updates What is Necessary
    // tick() {
    //     this.elementClock = (
    //         <div>
    //             <h2>It is {new Date().toLocaleTimeString()}.</h2>
    //         </div>
    //     );
    //     ReactDOM.render(this.elementClock, document.getElementById('clock'));
    // }

    render() {
        console.log("REACT_APP_API_URL=" + process.env.REACT_APP_API_URL)
        return (
            <div>
                <Welcome name="Jeff" />
                <p aria-live="polite">{this.getGreeting()}</p>
                <div id="clock"></div>
                <Comment
                    date={this.comment.date}
                    text={this.comment.text}
                    author={this.comment.author}
                />
            </div>
        );
    }
}
