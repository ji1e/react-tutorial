import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  // 임시데이터 만들기
  const [data, setData] = useState([
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
  ]);

  return (
    // 페이지 이동에 사용되는 Route 태그를 위해선 Routes로 먼저 감싸야 한다.
    <Routes>
      {/* path="/"이기 때문에 '<주소>/'인 주소로 접속할 경우 Main 컴포넌트가 화면에 보여지게 된다.  */}
      {/* data를 props로 메인페이지, 상품페이지, 상품 상세페이지에 내려줌 */}
      <Route path="/" element={<Main data={data} />} />
      <Route path="/detail/:id" element={<Detail data={data} />} />
      <Route path="/create" element={<Create data={data} setData={setData} />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      {/* 없는 URL로 접근할 때 연결되는 페이지 */}
      <Route
        path="*"
        element={
          <>
            <div>없는 페이지입니다.</div>
            <Link to="/">홈으로 이동</Link>
          </>
        }
      />
    </Routes>
  );
}

export default App;
