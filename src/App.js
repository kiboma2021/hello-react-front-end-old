import "./App.css";
import axios from "axios";
import greetings from "./components/greetings";
import { useEffect, useState } from "react";

const API_URL = "http://127.0.0.1:3000//api/v1/greetings";


function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setMessages(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
      <greetings messages={messages} />
    </div>
  );
}

export default App;
