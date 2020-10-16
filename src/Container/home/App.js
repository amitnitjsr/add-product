import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import './App.css';
import Login from '../Login/Login';

function App() {
  return (
    <div className="App">
    {/* <Login /> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This Assignment is created by Amit Maurya. Using React js</p>
        <Link
          to="/product"
        >
          <Button>
            Go to Assignment
        </Button>
        </Link>
      </header>
    </div>
  );
}

export default App;
