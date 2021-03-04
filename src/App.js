import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Game from './components/Game';
import EndGame from './components/EndGame';

import { CARDS } from './components/Cards';
import './styles/App.css';

function App() {

  const cards = CARDS;

  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [selected, setSelected] = useState([]);
  const [shuffled, setShuffled] = useState(shuffle(cards));
  const [endGame, setEndGame] = useState(false);

  function checkDuplicate(selected) {
    return new Set(selected).size !== selected.length;
  }

  function shuffle(array) {
    let i = array.length - 1;
    for (i; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  const handleClick = (e) => {
    const selection = e.target.id;
    setSelected((prevSelect) =>
      [...prevSelect, selection]
    );
    setScore((prevScore) => prevScore + 1);
    setShuffled(shuffle(cards));
  }

  const tryAgain = () => {
    setEndGame((prev) => !prev);
    setScore(()=> 0);
  }

  useEffect(() => {
    let isDuplicate = checkDuplicate(selected);
    if (isDuplicate) {
      console.log("Finished");
      if (score > maxScore) {
        setMaxScore(() => score);
      }
      setEndGame((prev)=>!prev);
      setSelected(() => []);
    }
  }, [selected, maxScore, score]);

  return (
    <div>
      <Header score={score} maxScore={maxScore} />
      <Game cards={shuffled} handleClick={handleClick} endGame={endGame} />
      <EndGame score={score} maxScore={maxScore} endGame={endGame} tryAgain={tryAgain}/>
    </div>
  );
}

export default App;
