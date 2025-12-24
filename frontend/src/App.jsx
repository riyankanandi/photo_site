import { useState } from 'react'
import './App.css'
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.text())
      .then((data) => console.log("Backend says:", data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return <h1>Frontend running</h1>;
}

export default App;


