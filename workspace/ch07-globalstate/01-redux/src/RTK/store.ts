import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "@/RTK/counterSlice";

const store = configureStore({
  reducer: {
    counterStore: counterSlice.reducer
  }
});

// Redux 스토어의 state를 나타내는 타입(counterSlice에 지정한 initialState의 타입)
export type RootState = ReturnType<typeof store.getState>;

export default store;