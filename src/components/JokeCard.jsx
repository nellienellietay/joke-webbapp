function JokeCard ({ joke }) {
    return (
        <article className="joke-card">
            <p className="joke-text">{joke.joke}</p>
        </article>
    );
}

export default JokeCard;