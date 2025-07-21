import React, { useState } from 'react';
import Userpage from './Userpage';

function Counter() {
  // Declare a new state variable called "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <Userpage/>
    </div>
  );
}
export  default Counter;