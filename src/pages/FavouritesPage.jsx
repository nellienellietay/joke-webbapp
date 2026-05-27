import { useState } from "react";
import {getFavourites, removeFavourite} from "../utils/storage";
import CategoryFilter from "../components/CategoryFilter";

function FavouritesPage() {
    //hämtar favoriter från localstorage när siddan laddas
    const [favourites, setFavourites] = useState(() => getFavourites());
    //håller koll på vald kategori, tom betyder visa alla
    const [filter, setFilter] = useState("");

    //tar bort ett skämt från favoriter och uppdaterar listan
    function handleRemove(jokeId) {
        removeFavourite(jokeId);
        setFavourites(getFavourites());
    }

    //filtrerar listan baserat på vald kategori, om ingen kategori är vald visas alla
    const filteredFavourites = filter && filter !== "Any"
    ? favourites.filter(joke => joke.category === filter)
    :favourites;

    //visas om inga favoriter finns sparade
    if (favourites.length === 0) {
        return (
            <section className="favourites-page">
                <p>Du har inga sparade favoriter än</p>
            </section>
        );
    }

    return (
        <section className="favourites-page">
            <h2>Mina favoriter</h2>

            {/*kategorifiltret för att filtrera favoriter*/}
            <CategoryFilter onCategoryChange={setFilter} />

            {/*visas om inga favoriter matchar vald kategori*/}
            {filteredFavourites.length === 0 ?(
                <p>Inga favoriter i den kategorin</p>
            ):(
                <ul className="favourites-list">
                    {/*loopar igenom filtrerade favoriter och visar dem*/}
                    {filteredFavourites.map(joke => (
                        <li key={joke.id} className="favourite-item">
                            <p>{joke.joke}</p>
                            <p>Category: {joke.category}</p>
                            <button onClick={() => handleRemove(joke.id)}>
                                Ta bort
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

export default FavouritesPage;