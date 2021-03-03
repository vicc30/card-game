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

export default Header;