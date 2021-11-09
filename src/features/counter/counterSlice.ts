import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppDispatch } from '../../app/store';

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      console.log('called increment reducer');
      
      state.value += 1;
    },

    decrement: state => {
      console.log('called decrement reducer');

      state.value -= 1;
    },

    changeByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  }
});

// - The outer function (incrementAsync) can be thought of as the action creator
// - When the action creator is called it will interally call the inner function
// referred to as the thunk
// - Thunks require the "redux-thunk" middleware - Redux Toolkit's configureStore
// configures that for us automatically

// outer function - action creator
export const incrementAsync = (amount: number) => {
  // inner function - the thunk (called internally)
  // - this is asynchronous under the hood
  return (dispatch: AppDispatch) => {
    // Can put async code in here
    setTimeout(() => {
      dispatch(changeByAmount(amount));
    }, 3000);
  }
}

export const {
  increment,
  decrement,
  changeByAmount
} = counterSlice.actions;

export default counterSlice.reducer;
