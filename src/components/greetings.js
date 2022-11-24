import axios from 'axios';
import { React, useEffect, useState } from 'react';

const API_URL = "http://127.0.0.1:3000//api/v1/greetings'";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}

function Greeting() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getAPIData().then((items) => {
      setMessages(items);
    });
  }, []);

  return (
    <div>
      <h1>Below is a random item from the Rails API</h1>
      <p>{messages}</p>
    </div>
  );
}

export default Greeting;
