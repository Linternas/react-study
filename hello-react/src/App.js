import React, { Component, Fragment } from 'react';
import './App.css'

class App extends Component {
  render() {
    const text = '당신은 어썸한가요?';
    const conditional = true;
    const style = {
      backgroundColor: 'gray',
      border: '1px solid black',
      height: Math.round(Math.random() * 300) + 50,
      width: Math.round(Math.random() * 300) + 50,
      WebkitTransition: 'all',
      MozTransition: 'all',
      msTransition: 'all'
    }

    return (
      <div class="my-div">
        { /** 요소 밖에서 주석 작성 */}
        <h1>리액트 안녕!</h1>
        <h2>{text}</h2>
        {
          conditional && '보여주세요'
        }
        <div style={style}
        // self-closed 태그에서만 작동하는 주석
        // 마지막 />가 꼭 새 졸에 있어야 함.
        /** 이렇게도 작성 가능 */
        />
        // 여기서 쓰면 렌더링됨
        /** 주석 불가능 */
      </div>
    );
  }
}

export default App;