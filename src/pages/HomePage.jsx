import { useEffect, useState } from "react";
import { getJoke } from "../services/jokeApi";
import JokeCard from "../components/JokeCard";
import CategoryFilter from "../components/CategoryFilter";
import {addFavourite} from "../utils/storage"

function HomePage() {

    // Sparar skämtet
    const [joke, setJoke] = useState(null)

    // Sparar vald kategori
    const [category, setCategory] = useState("Any");

    //håller koll på om nuvarande skämt är sparat som favorit
    const [favourite, setFavourite] = useState(false);

    // Körs en gång när HomePage laddas
    useEffect(() => {

        // Hämtar skämt och uppdaterar sidan med det.
        async function loadJoke() {
            const randomJoke = await getJoke();
            setJoke(randomJoke);
            setFavourite(false);
        }

        loadJoke();
    }, []);

    // Körs när en kategori väljs i dropdown
    async function handleCategoryChange(selectedCategory) {
        setCategory(selectedCategory);

        // Här hämtas och uppdateras nytt skämt från valda kategorin
        const newJoke = await getJoke(selectedCategory);
        setJoke(newJoke);
        setFavourite(false);
    }

    //sparar nuvarande skämt som favorit och uppdaterar knappen
    function handleFavourite(){
        if (joke){
            addFavourite(joke);
            setFavourite(true);
        }
    }

    return (
        <section className="joke-layout">
                <div className="category-area">
                    {/* Skickar funktionen till dropdown-komponenten*/}
                    <CategoryFilter onCategoryChange={handleCategoryChange} />
                </div>

                <button className="arrow-button previous-button">
                    <img src="/left-arrow.svg" alt="previous joke" />
                </button>

                <div className="card-area">
                {/* Visar JokeCard när ett skämt har hämtats */}
                        {joke && <JokeCard joke={joke} />}
                </div>

                <button className="arrow-button next-button">
                    <img src="/right-arrow.svg" alt="next joke" />
                </button>

                <button className="favourite-button" onClick={handleFavourite}>
                    {favourite ? "Saved!" : "Add to favourites"}
                </button>
        </section>
    );
}

export default HomePage;