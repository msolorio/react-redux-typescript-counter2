import { createSlice } from '@reduxjs/toolkit';
// import type { RootState } from '../../app/store';

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
    }
  }
});

export const { increment } = counterSlice.actions;

// Research further
// export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
