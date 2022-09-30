import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/login" element={<Login></Login>}/>
          <Route path="/register" element={<Register></Register>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
