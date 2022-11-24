import './App.css';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import React from 'react';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
import Greeting from './components/greetings';

// const API_URL = 'http://127.0.0.1:3000//api/v1/greetings';

function App() {
  return (
    <Router>
      <Link to="/"><Greeting /></Link>
    </Router>
  );
}

export default App;
