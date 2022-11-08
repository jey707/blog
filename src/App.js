import { useState } from "react";
import "./App.css";

function App() {
  const [title1, setTitle1] = useState("제목1");
  const [title2, setTitle2] = useState("제목2");
  const [title3, setTitle3] = useState("제목3");

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h4>{title1}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title2}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title3}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
