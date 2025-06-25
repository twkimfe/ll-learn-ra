// redux에서는 redux-toolkit 사용을 권장
import { createStore } from "redux";
import counterReducer from "./counterReducer";

const store = createStore(counterReducer);

export default store;
