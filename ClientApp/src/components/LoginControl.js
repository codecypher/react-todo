/**
 * Conditional Rendering
 * https://reactjs.org/docs/conditional-rendering.html
 *
 * Preventing Component from Rendering
 * In rare cases you might want a component to hide itself even though
 * it was rendered by another component. To do this return null instead
 * of its render output.
 */

import React, { Component } from 'react';

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
    </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
    </button>
    );
}

// Inline If with Logical && Operator
// You can embed any expressions in JSX by wrapping them in curly braces.
function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
                <h2>
                    You have {unreadMessages.length} unread messages.
                </h2>
            }
        </div>
    );
}

// Create a component that displays either of the two components
// depending on whether a user is logged in.
export class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        const messages = ['React', 'Re: React', 'Re:Re: React'];

        let button;

        // This will render either <LoginButton /> or <LogoutButton />
        // depending on its current state.
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        // It will also render a <Greeting />.
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
                <Mailbox unreadMessages={messages} />
            </div>
        );
    }
}
