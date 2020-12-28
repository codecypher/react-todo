/**
 * Use the React project template with ASP.NET Core
 * https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/react?view=aspnetcore-3.1&tabs=visual-studio
 *
 * This project template and starter code was bootstrapped with create-react-app (CRA)
 *
 * The updated React project template provides a convenient starting point for ASP.NET Core apps
 * using React and create-react-app (CRA) conventions to implement a rich, client-side user interface (UI).
 *
 * The template is equivalent to creating both an ASP.NET Core project to act as an API backend,
 * and a standard CRA React project to act as a UI, but with the convenience of hosting both in a
 * single app project that can be built and published as a single unit.
 *
 * dotnet new react -o my-new-app
 *
 * The React project template isn't meant for server-side rendering (SSR).
 * For SSR with React and Node.js, consider Next.js or Razzle.
 *
 * [Create React App](https://reactjs.org/docs/create-a-new-react-app.html)
 * Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.
 */

import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
// import { Counter } from './components/Counter';
import { TodoApp } from './components/TodoApp';

import { Counter } from './features/counter/Counter';
import { PostsList } from './features/posts/PostsList'

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/todo' component={TodoApp} />
        <Route path='/posts' component={PostsList} />
      </Layout>
    );
  }
}
