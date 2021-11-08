import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

// Retrieves type (shape) of state object
// Research further
export type RootState = ReturnType<typeof store.getState>

// Retrieves type (shape) of dispatch
export type AppDispatch = typeof store.dispatch;

export default store;