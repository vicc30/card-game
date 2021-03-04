function Game(props) {
    const { cards, handleClick } = props;

    return (
        <>
            <div>Game</div>
            <div>
                {cards.map((card) => {
                    return (
                        <div key={card.id}>
                            <img onClick={handleClick} src={card.image} alt={card.name} id={card.id} ></img>
                            <p>{card.name}</p>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Game;