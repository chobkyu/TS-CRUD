import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import Register from './Register';
import Write from './Write';
import Board from './Board';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Board></Board>}/>
          <Route path="/login" element={<Login></Login>}/>
          <Route path="/register" element={<Register></Register>}/>
          <Route path="/write" element={<Write/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
