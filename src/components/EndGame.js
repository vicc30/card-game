function EndGame(props) {
    const { endGame, score, maxScore, tryAgain } = props;

    if (endGame) {
        return (
            <div>
                <h3>End game</h3>
                <p>You Lose! You only did {score} clicks</p>
                <button onClick={tryAgain}>Try again!</button>
                <p>Max score: {maxScore}</p>
            </div>
        );
    }

    return null;
}

export default EndGame;