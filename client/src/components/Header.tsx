import React from 'react';
import {  Link } from "react-router-dom";
function Header(){
    return (
        <div className="container">
        <header>
          <nav>
            <div className="icon">TS-CRUD</div>
            <div className="gnb">
              <Link to="/">메인페이지</Link>
              <Link to="/write">글쓰기</Link>
              <Link to="/login">로그인</Link>
              <Link to="/map">지도</Link>
            </div>
          </nav>
        </header>
      </div>
    )
}

export default Header;