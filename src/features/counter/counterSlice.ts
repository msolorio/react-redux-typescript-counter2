import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    }
  }
});

export const {
  increment,
  decrement,
  changeByAmount
} = counterSlice.actions;

export default counterSlice.reducer;
