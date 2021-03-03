import React, { useState } from 'react';
import Header from './components/Header';
import Game from './components/Game';

import { CARDS } from './components/Cards';
import './styles/App.css';

function App() {

  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const cards = CARDS;

  const handleClick = () => {
    setScore((prevScore) => prevScore + 1);
  }

  const handleFinish = () => {
    if (score > maxScore) {
      setMaxScore(() => score);
    }
    setScore(() => 0);
  }

  return (
    <div>
      <Header score={score} maxScore={maxScore} />
      <button onClick={handleFinish}>Finish</button>
      <Game cards={cards} handleClick={handleClick} />
    </div>
  );
}

export default App;
