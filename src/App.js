import { useState } from 'react';
import './App.css';

function App() {

  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬독학']);
  let [따봉,따봉변경] = useState([0,0,0]);
  let [modal,setModal] = useState(false);
  let [title,setTitle] = useState(0);
  let [입력값,입력값변경] = useState('');

  return (
    <div className="App">
      <div className='black-nav'>
      </div>
      <button onClick={
        ()=>{
          let copy2 = [...글제목];
          copy2.sort();
          글제목변경(copy2);
        }}>가나다순정렬</button>
      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = '여자코트 추천'
          글제목변경(copy);
        }}>글제목변경</button>
      {
        글제목.map(function(a,i){
          return (
            <div className='list' key={i}>
            <h4 onClick={()=>{
              setTitle(i)
              setModal(!modal)
              }}>{글제목[i]}
                <button onClick={
                  ()=>{
                    글제목.splice(i, 1);
                  }}>삭제버튼</button>
              </h4>
            <span onClick={
              ()=>{
                let copy = [...따봉];
                copy[i] = copy[i] + 1;
                따봉변경(copy);
              }}>🤣</span>
              {따봉[i]}
            <p>2월 17일 발행</p>
          </div>
          )
        })
      }

      <input onChange={
        (e)=>{
          입력값변경(e.target.value);
        }} type="text" />
        <button onClick={
          ()=>{
            let copy = [...글제목];
            copy.unshift(입력값);
            글제목변경(copy);
        }}>버튼</button>

      {
        modal == true ? <Modal title={title} 글제목 = {글제목} /> : null
      }
    </div>
  );
}

function Modal(props){
  return(
  <div className='modal'>
    <h4>{props.글제목[props.title]}</h4>
    <p>모달 내용입니다</p>
    <p>2022-11-10</p>
  </div>
  );
}

export default App;