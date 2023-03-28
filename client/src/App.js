import axios from "axios";
import { useEffect } from "react";
import { Component } from "react";
import './App.css';
import SearchContainer from './Container/SerachContainer';

function App() {
  const callApi = async () => {
    axios.get("/api").then((res) => console.log(res.data.test));
  };

  useEffect(()=> {
    callApi();
  }, []);

  return (<div>< SearchContainer /></div>);
}


export default App;
