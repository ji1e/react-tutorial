import React, { Fragment, useState } from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate, useParams } from "react-router-dom";

export default function Edit(props) {
  const navigate = useNavigate();

  // useParams를 이용하여 url의 id를 가져옴
  const { id } = useParams();

  // 인풋을 스테이트로 만들기
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  // findIndex를 이용하여 클릭한 게시물의 id값으로 인덱스를 찾아 변수에 넣어줌
  let findEditIndex = props.data.findIndex((item) => item.id == id);

  return (
    <Fragment>
      <Header />
      <Container>
        {props.data.map((item) => {
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
                    // 새 변수를 선언하여 기존의 임시데이터 배열을 복사함.
                    let copy = [...props.data];
                    // 복사한 배열에 수정할 값을 할당함. 수정할 위치는 findIndex를 이용하여 찾아 변수에 넣었던 것을 사용.
                    copy[findEditIndex] = { ...copy[findEditIndex], title: editTitle, content: editContent };
                    // setData로 수정한 값을 Data에 바꾸어 넣어줌
                    props.setData(copy);
                    // 홈페이지로 이동
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
                      defaultValue={item.title}
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
                      defaultValue={item.content}
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
