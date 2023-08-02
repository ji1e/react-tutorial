import { createSlice } from "@reduxjs/toolkit";

// 초기값 설정
const 초기데이터 = [
  {
    id: "1",
    title: "제목1",
    content: "내용1",
    author: "작성자1(이메일)",
  },
  {
    id: "2",
    title: "제목2",
    content: "내용2",
    author: "작성자2(이메일)",
  },
  {
    id: "3",
    title: "제목3",
    content: "내용3",
    author: "작성자3(이메일)",
  },
];

// 초기데이터 리덕스로 만들기
const data = createSlice({
  name: "data",
  initialState: 초기데이터,
  // 리듀서에 넣는 키(createData 등등) -> 나중에 다른 곳에서 useSelector 할 때 필요한 이름.
  reducers: {
    createData: (state, action) => {
      // action.payload -> 나중에 createData 사용할 때 파라미터로 들어감
      state.push(action.payload);
    },
    deleteData: (state, action) => {
      // 필터로 클릭하지 않은 데이터들만 걸러냄
      return state.filter((filterItem) => filterItem.id !== action.payload);
    },
    editData: (state, action) => {
      // find로 클릭한 데이터만 찾아냄.
      let edit = state.find((p) => p.id === action.payload.id);
      console.log(action.payload);
      if (edit) {
        edit.title = action.payload.title;
        edit.content = action.payload.content;
      }
    },
  },
});

export const { createData, deleteData, editData } = data.actions;
export default data;
