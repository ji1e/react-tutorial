import React from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteData } from "../redux/data";

export default function Detail() {
  const navigate = useNavigate();

  // 초기데이터 가져오기
  const data = useSelector((state) => state.데이터);
  const dispatch = useDispatch();

  // useParams를 이용하여 url의 id를 가져옴
  const { id } = useParams();

  return (
    <>
      <Header />
      <Container>
        {/* find가 더 나음!!!!!! */}
        {data.map((item) => {
          if (item.id == id) {
            return (
              <div key={item.id}>
                <h1
                  style={{
                    border: "1px solid lightgray",
                    borderRadius: "12px",
                    padding: "12px",
                  }}
                >
                  {item.title}
                </h1>
                <div
                  style={{
                    height: "400px",
                    border: "1px solid lightgray",
                    borderRadius: "12px",
                    padding: "12px",
                  }}
                >
                  {item.content}
                </div>
                <div
                  style={{
                    marginTop: "12px",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <button
                    onClick={() => {
                      navigate(`/edit/${item.id}`);
                    }}
                    style={{
                      border: "none",
                      padding: "8px",
                      borderRadius: "6px",
                      backgroundColor: "orange",
                      color: "white",
                      cursor: "pointer",
                      marginRight: "6px",
                    }}
                  >
                    수정
                  </button>
                  <button
                    onClick={() => {
                      // 삭제 알림창
                      alert("삭제하시겠습니까?");
                      // dispatch : 리덕스의 state를 변경(수정, 삭제 , 추가)할 때 필요함
                      dispatch(deleteData(item.id));
                      // 홈페이지로 이동
                      navigate("/");
                    }}
                    style={{
                      border: "none",
                      padding: "8px",
                      borderRadius: "6px",
                      backgroundColor: "red",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    삭제
                  </button>
                </div>
              </div>
            );
          }
        })}
      </Container>
    </>
  );
}
