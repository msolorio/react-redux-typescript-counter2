import React from 'react';
// imports typed versions of useSelector and useDispatch
import { useAppSelector, useAppDispatch } from './app/hooks';
import { increment } from './features/counter/counterSlice';
import { RootState } from './app/store';
import './App.css';


function App() {
  const count = useAppSelector((state: RootState) => {
    return state.counter.value
  });
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  }

  return (
    <div className="App">
      <h1>React Redux TypeScript Counter</h1>
      <p>Count: {count}</p>

      <button onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
}

export default App;
  