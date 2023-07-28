import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

let data = createSlice({
  name: "data",
  initialState: [
    {
      id: 1,
      title: "제목1",
      content: "내용1",
      author: "작성자1(이메일)",
    },
    {
      id: 2,
      title: "제목2",
      content: "내용2",
      author: "작성자2(이메일)",
    },
    {
      id: 3,
      title: "제목3",
      content: "내용3",
      author: "작성자3(이메일)",
    },
  ],
});

const store = configureStore({
  reducer: {
    데이터: data.reducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <React.StrictMode> */}
    <Provider store={store}>
      {/* Routes, Route 태그 및 react-router-dom을 사용하기 위해선 최상단에 BrowserRouter로 감싸줘야한다 */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    {/* </React.StrictMode> */}
  </>
);
