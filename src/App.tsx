import type { Component } from 'solid-js';
import Counter from './Counter';

const App: Component = () => {
  return (
    <>
      <h1>Hello, Dave</h1>
      <Counter label="eggs" start={12}/>
      <p>Welcome to <a href="https://www.solidjs.com/">SolidJS</a>.</p>
    </>
  );
};

export default App;
