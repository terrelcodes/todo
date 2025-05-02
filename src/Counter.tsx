import { createSignal } from "solid-js";

export default (props: { label: string, start: number}) => {
  const [count, setCount] = createSignal(props.start);
  return <>
  <button onClick={() => setCount((c)=>c - 1)}>-</button>
  <button onClick={() => setCount((c)=>c + 1)}>+</button>
  {props.label}: {count()} 
  </>;
};
