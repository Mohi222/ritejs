import React, { useState } from 'react';

export { Counter };

const Counter = () => {
  const [count,
    setCount] = useState(0);
  return (
    <button
      onClick={() => {
        setCount((currentCount) => {
          return currentCount + 1;
        });
      }} type="button"
    >
      Counter {count}
    </button>
  );
};
