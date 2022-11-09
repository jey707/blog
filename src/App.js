import { useState } from "react";
import "./App.css";

function App() {
  const [modalTitle, setModalTitle] = useState("");
  const [title, setTitle] = useState([
    "다 남자코트 추천",
    "가 우동맛집",
    "나 리액트독학",
  ]);
  const [like, setLike] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const arrSort = () => {
    const copy = [...title];
    const sortArr = copy.sort();
    setTitle(sortArr);
  };

  const handleModal = (e, title) => {
    setModal((prev) => !prev);
    setModalTitle(title);
  };
  const handleTitle = () => {
    let newArr = [...title];
    newArr[0] = "여자코트추천";
    setTitle(newArr);
  };
  const onChange = (e) => {
    setInputValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const cp = [...title];
    cp.unshift(inputValue);
    setTitle(cp);
    document.querySelector("form").reset();
    setInputValue("");
  };
  const handleDelete = (i) => {
    const del = [...title];
    del.splice(i, 1);
    setTitle(del);
  };
  return (
    <div className="App">
      <div className="black-nav">
        <div>ReactBlog</div>
      </div>
      <span onClick={arrSort}>가나다순정렬</span>
      {title.map((ti, index) => (
        <div className="list" key={index}>
          <h4
            onClick={(e) => {
              handleModal(e, ti);
            }}
          >
            {ti}
            <span
              onClick={(e) => {
                e.stopPropagation();
                let cp = [...like];
                cp[index]++;
                setLike(cp);
              }}
            >
              ❤️
              {like[index]}
            </span>
          </h4>

          {/* <span onClick={handleTitle}>🎏🎏🎏</span> */}
          <p>11월</p>
          <span
            onClick={(e) => {
              handleDelete(index);
            }}
          >
            ❌
          </span>
        </div>
      ))}
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} required />
        <input type="submit" value="저장" />
      </form>
      {modal ? (
        <Modal modalTitle={modalTitle} handleTitle={handleTitle} />
      ) : null}
    </div>
  );
}

const Modal = ({ modalTitle }) => {
  return (
    <div className="modal">
      <h4>{modalTitle}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>Update</button>
    </div>
  );
};

export default App;
