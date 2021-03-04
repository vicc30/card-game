function Game(props) {
    const { cards, handleClick, endGame } = props;
    if (!endGame) {
        return (
            <>
                <div className="game">
                    <div className="row">
                        {cards.map((card) => {
                            return (
                                <div key={card.id} className="card">
                                    <img onClick={handleClick} src={card.image} alt={card.name} id={card.id} ></img>
                                    <p>{card.name}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </>
        );
    }
    return null
}

export default Game;