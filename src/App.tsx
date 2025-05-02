import type { Component } from 'solid-js';
import Counter from './Counter';

const App: Component = () => {
  
  return (
    <Counter label="eggs" start={12}/>
  );
};

export default App;
