import React, { Component } from "react";
// import MyComponent from './MyComponent'
// import EventPractice from './EventPractice'
// import ValidationSample from './ValidationSample'
// import ScrollBox from './ScrollBox';
// import IterationSample from './IterationSample'
import LifeCycleSample from "./LifeCycleSample";
// import './App.css'

const getRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      // <MyComponent name="React" age={4} />
      // <EventPractice />
      // <ValidationSample />
      // <div>
      //   <ScrollBox ref={(ref) => this.scrollBox = ref}/>
      //   <button onClick={() => this.scrollBox.scrollToBottom()}>
      //     맨아래로
      //   </button>
      // </div>

      // <IterationSample />
      <div>
        <button onClick={this.handleClick}>랜덤색상</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  }
}

export default App;
