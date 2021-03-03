import React, { useState } from 'react';
import './styles/App.css';

const Header = (props) => {
  const { score, maxScore } = props
  return (
    <div>
      <h1>Memory Card Game</h1>
      <p>Best Score: {maxScore}</p>
      <p>Current Score: {score}</p>
      <p>Get 1 point by clicking on an image but don't click it more than once!</p>
    </div>
  );
}

function App() {

  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);

  const handleClick = () => {
    setScore((prevScore) => prevScore + 1);
  }

  const handleFinish = () => {
    if(score>maxScore){
      setMaxScore(() => score);
    }
    setScore(() => 0);
  }

  return (
    <div>
      <Header score={score} maxScore={maxScore} />
      <button onClick={handleClick}>Click card</button>
      <button onClick={handleFinish}>Finish</button>
    </div>
  );
}

export default App;
