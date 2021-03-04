import Logo from '../styles/MarvelLogo.svg';
const Header = (props) => {
    const { score, maxScore } = props
    return (
        <div className="header">
            <a href="https://www.marvel.com/" alt="Marvel Studio site">
                <img src={Logo} alt="logo"></img>
            </a>
            <h1>Memory Card Game</h1>
            <p>Best Score: {maxScore}</p>
            <p>Current Score: {score}</p>
            <p>Instructions: Get 1 point by clicking on an image but don't click it more than once!</p>
        </div>
    );
}

export default Header;