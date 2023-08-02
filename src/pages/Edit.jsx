import React, { Fragment, useState } from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editData } from "../redux/data";

export default function Edit() {
  const navigate = useNavigate();

  // 초기데이터 가져오기
  const data = useSelector((state) => state.데이터);
  const dispatch = useDispatch();

  // useParams를 이용하여 url의 id를 문자열로 가져옴
  const { id } = useParams();

  // find 쓸 때는 옵셔널 체이닝(?) 쓰는것을 추천
  const newData = data.find((item) => item.id === id);

  // 인풋을 스테이트로 만들기
  const [editTitle, setEditTitle] = useState(newData?.title); // || 연산자로 바꾸기!!!!!!!!!
  const [editContent, setEditContent] = useState(newData?.content); // || 연산자로 바꾸기!!!!!!!!!

  // findIndex를 이용하여 클릭한 게시물의 id값으로 인덱스를 찾아 변수에 넣어줌
  let findEditIndex = data.findIndex((item) => item.id == id);

  return (
    <Fragment>
      <Header />
      <Container>
        {data.map((item) => {
          // 클릭한 게시물의 id와 현재 url의 id가 같으면 App.js의 data 중 클릭한 게시물의 데이터 가져옴
          if (item.id == id) {
            return (
              <div key={item.id}>
                <form
                  style={{
                    height: "600px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                  // 수정하기 버튼 클릭 시 app.js의 data를 수정
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (newData) {
                      dispatch(
                        // 기존값을 가져오고 스테이트로 만든 새 인풋값을 타이틀과 콘텐트에 넣어줌.
                        editData({
                          ...newData,
                          title: editTitle,
                          content: editContent,
                        })
                      );
                    }
                    navigate("/");
                  }}
                >
                  <div>
                    <input
                      placeholder="제목"
                      style={{
                        width: "100%",
                        height: "60px",
                        fontSize: "18px",
                        borderRadius: "12px",
                        border: "1px solid lightgrey",
                        padding: "8px",
                        boxSizing: "border-box",
                      }}
                      // 가져온 데이터 중 타이틀을 기본값으로 설정함.
                      value={editTitle} // 현재 인풋의 값을 셋했던 스테이트로 넣어주기
                      onChange={(e) => {
                        // 타이틀 수정 입력값 셋하기
                        setEditTitle(e.target.value);
                      }}
                    />
                  </div>
                  <div
                    style={{
                      height: "400px",
                    }}
                  >
                    <textarea
                      placeholder="내용"
                      style={{
                        resize: "none",
                        height: "100%",
                        width: "100%",
                        fontSize: "18px",
                        borderRadius: "12px",
                        border: "1px solid lightgrey",
                        padding: "12px",
                        boxSizing: "border-box",
                      }}
                      // 가져온 데이터 중 콘텐츠를 기본값으로 설정함.
                      value={editContent} // 현재 인풋의 값을 셋했던 스테이트로 넣어주기
                      onChange={(e) => {
                        // 콘텐츠 수정 입력값 셋하기
                        setEditContent(e.target.value);
                      }}
                    />
                  </div>
                  <button
                    style={{
                      width: "100%",
                      height: "40px",
                      border: "none",
                      color: "white",
                      borderRadius: "12px",
                      backgroundColor: "orange",
                      cursor: "pointer",
                    }}
                  >
                    수정하기
                  </button>
                </form>
              </div>
            );
          }
        })}
      </Container>
    </Fragment>
  );
}
