function JokeCard ({ joke }) {
    return (
        <article className="joke-card">
            <p>{joke.joke}</p>

            <p>Category: {joke.category}</p>

            {/* Ej implementerat */}
            <button>Add to favourites</button>
        </article>
    );
}

export default JokeCard;