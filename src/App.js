import { useState } from 'react';
import './App.css';

function App() {

  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬독학']);
  let [따봉,따봉변경] = useState([0,0,0]);
  let [modal,setModal] = useState(false);
  let [title,setTitle] = useState(0);

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
      {/* <div className='list'>
        <h4>{글제목[0]}<span onClick={()=>{ 따봉변경(따봉+1);}}>🤣</span>{따봉}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4 onClick={
          ()=>{setModal(!modal);
        }}>{글제목[2]}111</h4>
        { 
          modal == true ? <Modal></Modal> : null
        }
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map(function(a,i){
          console.log(따봉[i]);
          return (
            <div className='list' key={i}>
            <h4 onClick={
              ()=>{setModal(!modal);
                setTitle(i)
              }}>{글제목[i]}</h4>
            <span onClick={
              ()=>{
                let copy1 = [...따봉];
                copy1[i] = copy1[i]+1
                따봉변경(copy1);
            }}>🤣</span>{따봉[i]}
            <p>2월 17일 발행</p>
          </div>
          )
        })
      }

      <button onClick={()=>{setTitle(0)}}>글제목0</button>
      <button onClick={()=>{setTitle(1)}}>글제목1</button>
      <button onClick={()=>{setTitle(2)}}>글제목2</button>
      {
        modal == true ? <Modal title={title} 글제목변경={글제목변경} 글제목={글제목}></Modal> : null
      }

    </div>
  );
}

function Modal(props){
  return(
  <div className='modal'>
    <h4>{props.글제목[props.title] }</h4>
    <p>모달 내용입니다</p>
    <p>2022-11-10</p>
    <button onClick={()=>{props.글제목변경(['1','2','3'])}}>글수정</button>
  </div>
  );
}

export default App;