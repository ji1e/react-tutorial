import React, { useState } from "react";

import Header from "../common/Header";
import Container from "../common/Container";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createData } from "../redux/data";

export default function Create() {
  const navigate = useNavigate();

  // 초기데이터 가져오기
  const dispatch = useDispatch();

  // 인풋을 스테이트로 만들기
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  return (
    <>
      <Header />
      <Container>
        <form
          style={{
            height: "600px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
          // 추가하기 버튼 클릭 시 app.js의 data에 추가
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              createData({
                id: nanoid(),
                title: newTitle,
                content: newContent,
                author: "",
              })
            );
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
              onChange={(e) => {
                // 타이틀 입력값 셋하기
                setNewTitle(e.target.value);
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
              onChange={(e) => {
                // 콘탠츠 입력값 셋하기
                setNewContent(e.target.value);
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
              backgroundColor: "skyblue",
              cursor: "pointer",
            }}
          >
            추가하기
          </button>
        </form>
      </Container>
    </>
  );
}
