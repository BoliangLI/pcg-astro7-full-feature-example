import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button id="client-counter" onClick={() => setCount(value => value + 1)}>
      React client:load count = {count}
    </button>
  );
}
