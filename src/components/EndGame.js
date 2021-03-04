function EndGame(props) {
    const { endGame, score, maxScore, tryAgain } = props;

    if (endGame && score === 12) {
        return (
            <div className="end">
                <h3>End game</h3>
                <p><span>You Win!</span> You did it! You made all {score} without repeat</p>
                <button onClick={tryAgain}>Try again!</button>
                <p>Max score: {maxScore}</p>
            </div>
        );
    } else if (endGame) {
        return (
            <div className="end">
                <h3>End game</h3>
                <p><span>You Lose!</span> You only find {score} cards</p>
                <button onClick={tryAgain}>Try again!</button>
                <p>Max score: {maxScore}</p>
            </div>
        );
    }

    return null;
}

export default EndGame;