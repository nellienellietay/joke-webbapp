import { useState } from "react";
import {getFavourites, removeFavourite} from "../utils/storage";

function FavouritesPage() {
    //hämtar favoriter från localstorage när siddan laddas
    const [favourites, setFavourites] = useState(() => getFavourites());

    //tar bort ett skämt från favoriter och uppdaterar listan
    function handleRemove(jokeId) {
        removeFavourite(jokeId);
        setFavourites(getFavourites());
    }

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
            <ul className="favourites-list">
                {/*loopar igenom alla sparade favoriter och visar dem*/ }
                {favourites.map(joke => (
                    <li key={joke.id} className="favourite-item">
                        <p>{joke.joke}</p>
                        <p>Category: {joke.category}</p>
                        <button onClick={() => handleRemove(joke.id)}>
                            Ta bort
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default FavouritesPage;