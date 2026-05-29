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
            <section className="container favourites-page">
                <p className="status-text">No saved favourites yet</p>
            </section>
        );
    }

    return (
        <section className="container mt-4 favourites-page">
            <h2 className="text-center mb-3">My favourites</h2>

            {/*kategorifiltret för att filtrera favoriter*/}
            <div className="d-flex justify-content-center mb-4">
                <CategoryFilter onCategoryChange={setFilter} />
            </div>
            
            {/*visas om inga favoriter matchar vald kategori*/}
            {filteredFavourites.length === 0 ?(
                <p className="status-text">No favourites in that category</p>
            ):(
                <div className="d-flex flex-column align-items-center gap-3">
                    {/*loopar igenom filtrerade favoriter och visar dem*/}
                    {filteredFavourites.map(joke => (
                        <div key={joke.id} className="joke-card w-100" style={{maxWidth: "600px"}}>
                            <p>{joke.joke}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <span>Category: {joke.category}</span>
                                <button className="btn btn-sm btn-danger"onClick={() => handleRemove(joke.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default FavouritesPage;