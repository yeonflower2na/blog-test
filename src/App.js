/* 라우트 가져오기 */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/*  */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import Profile from "./pages/Profile.js";
import NotFound from "./pages/NotFound.js";

function App() {
  /* 
    1. 홈페이지(Home): 사이트 소개, 서비스 소개
    2. 게시글 목록(Posts): 게시글 나열, 클릭하면 상세페이지 이동, 게시글 좋아요 기능
    3. 게시글 상세(PostDetail): 글쓴이, 본문, 날짜, 댓글 추가기능 제공
    4. 404페이지(NotFound): 사용자가 경로를 잘못 입력했을 때
    5. 댓글기능(CommentSection): 상세페이지에서 댓글추가, 댓글 추가되었을 때 목록에 나타나고 버튼 토글 기능
  */
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/posts" element={<Posts />}></Route>
            <Route path="/posts/:id" element={<PostDetail />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="/notfound" element={<NotFound />}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;