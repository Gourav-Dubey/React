import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../state/authslice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value); // Get counter value from Redux state
  const dispatch = useDispatch(); // Initialize dispatch

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold">Counter: {count}</h2>
      <div className="mt-4 space-x-2">
        {/* Dispatch Increment */}
        <button onClick={() => dispatch(increment())} className="px-4 py-2 bg-blue-500 text-white rounded">
          Increment
        </button>

        {/* Dispatch Decrement */}
        <button onClick={() => dispatch(decrement())} className="px-4 py-2 bg-red-500 text-white rounded">
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
