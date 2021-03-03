function Game(props) {
    const { cards, handleClick } = props;

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

    const toDisplay = shuffle(cards);

    return (
        <>
            <div>Game</div>
            <div>
                {toDisplay.map((card) => {
                    return (
                        <div key={card.id}>
                            <img src={card.image} alt={card.name} onClick={handleClick}></img>
                            <p>{card.name}</p>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Game;