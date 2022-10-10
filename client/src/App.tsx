import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Header from './components/Header';
import Login from './routes/Login';
import Register from './routes/Register';
import Write from './routes/Write';
import Board from './routes/Board';
import Open from './components/Open';

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
          <Route path="/open/:seq" element={<Open/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
