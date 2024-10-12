import React from 'react';
import Header from './Header';
import './App.css';
import Menu from './page/menu';

function App() {
  return (
    <div className="main-container">
      <Header/>
      <div className="content">
        <Menu/>
      </div>
    </div>
  );
}

export default App;
