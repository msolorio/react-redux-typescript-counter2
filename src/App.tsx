import React, { useState, ChangeEvent } from 'react';
// imports typed versions of useSelector and useDispatch
import { useAppSelector, useAppDispatch } from './app/hooks';
import {
  increment,
  decrement,
  changeByAmount,
  incrementAsync,
} from './features/counter/counterSlice';
import { RootState } from './app/store';
import './App.css';


function App() {
  const [amount, setAmount] = useState(0);

  const count = useAppSelector((state: RootState) => {
    return state.counter.value
  });
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  }

  const handleDecrement = () => {
    dispatch(decrement());
  }

  const handleChangeByAmount = () => {
    dispatch(changeByAmount(amount));
  }

  const handleNumChange = (event: ChangeEvent<HTMLInputElement>) => {
    const changeAmount = Number(event.target.value);

    setAmount(changeAmount);
  }

  return (
    <div className="App">
      <h1>React Redux TypeScript Counter</h1>
      <p>Count: {count}</p>

      <button onClick={handleIncrement}>
        Increment
      </button>

      <br />

      <button onClick={handleDecrement}>
        Decrement
      </button>

      <br />

      <input
        type="number"
        min="-5"
        max="5"
        value={amount}
        onChange={(e) => handleNumChange(e)}
      />
      <button onClick={handleChangeByAmount}>
        Change By Amount
      </button>

      <button onClick={() => dispatch(incrementAsync(amount))}>
        Increment Async
      </button>
    </div>
  );
}

export default App;
