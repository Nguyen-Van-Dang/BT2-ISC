import React from "react";
import ParallelogramEffect from './components/ParallelogramEffect';
import "./App.css";

const App = () => {
  return (
    <div style={{ backgroundColor: "black", height: "100vh", overflow: "hidden" }}>
      <ParallelogramEffect />
    </div>
  );
};

export default App;