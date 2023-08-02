import { configureStore } from "@reduxjs/toolkit";
import data from "./data";

// configureStore로 데이터 중앙 저장소 만들고
// 다른 곳에서 사용할 수 있게 초기데이터를 configureStore에 넣어주기
const store = configureStore({
  reducer: {
    데이터: data.reducer,
  },
});

export default store;
