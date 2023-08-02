import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../common/Header";
import Container from "../common/Container";
import { useDispatch, useSelector } from "react-redux";
import { deleteData } from "../redux/data";

export default function Main() {
  const navigate = useNavigate();

  // 초기데이터 가져오기
  const data = useSelector((state) => state.데이터);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            padding: "12px",
          }}
        >
          <button
            onClick={() => {
              navigate("/create");
            }}
            style={{
              border: "none",
              padding: "8px",
              borderRadius: "6px",
              backgroundColor: "skyblue",
              color: "white",
              cursor: "pointer",
            }}
          >
            추가
          </button>
        </div>
        {/* useState로 만든 임시데이터(data)를 map을 활용하여 보여줌.  */}
        {/* data.map((아이템) => ())  data의 요소(배열 안에 있는 객체 하나 하나들)를 하나씩 반복해서 보여줌. 객체 안에 있는 것들을 쓰려면 {아이템.id} 이런식으로 쓰면 됨. */}
        {data.map((item) => (
          <div
            // map 내부에 warning이 발생하지 않도록 고유한 key값 넣어줌
            key={item.id}
            style={{
              backgroundColor: "#EEEEEE",
              height: "100px",
              borderRadius: "24px",
              marginBottom: "12px",
              display: "flex",
              padding: "12px 16px 12px 16px",
            }}
          >
            <div
              onClick={() => {
                navigate(`/detail/${item.id}`);
              }}
              style={{
                flex: 4,
                borderRight: "1px solid lightgrey",
                cursor: "pointer",
              }}
            >
              <h2>{item.title}</h2>
              <p
                style={{
                  width: "300px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {item.content}
              </p>
            </div>
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
                justifyContent: "space-around",
                gap: "12px",
              }}
            >
              <div>{item.author}</div>
              <div>
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
                    // (data)말고 (item.id 넣기) -> deleteData의 파라미터(item.id)는 action.payload임
                    dispatch(deleteData(item.id));
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
          </div>
        ))}
      </Container>
    </>
  );
}
