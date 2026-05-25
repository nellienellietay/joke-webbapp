function JokeCard ({ joke }) {
    return (
        <article>
            <p>{joke.joke}</p>

            <p>Category: {joke.category}</p>

            {/* Ej implementerat */}
            <button>Add to favourites</button>
        </article>
    );
}

export default JokeCard;