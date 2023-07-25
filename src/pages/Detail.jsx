import React from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate, useParams } from "react-router-dom";

export default function Detail(props) {
  const navigate = useNavigate();

  // useParams를 이용하여 url의 id를 가져옴
  const { id } = useParams();

  return (
    <>
      <Header />
      <Container>
        {props.data.map((item) => {
          {
            console.log(item.id);
          }
          if (item.id == id) {
            return (
              <>
                <h1
                  key={item.id}
                  style={{
                    border: "1px solid lightgray",
                    borderRadius: "12px",
                    padding: "12px",
                  }}
                >
                  {item.title}
                </h1>
                <div
                  key={item.id}
                  style={{
                    height: "400px",
                    border: "1px solid lightgray",
                    borderRadius: "12px",
                    padding: "12px",
                  }}
                >
                  {item.content}
                </div>
              </>
            );
          }
        })}
        <div
          style={{
            marginTop: "12px",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <button
            onClick={() => {
              navigate("/edit");
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
              alert("삭제할까?");
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
      </Container>
    </>
  );
}
