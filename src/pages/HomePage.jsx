import { useEffect, useState } from "react";
import { getJoke } from "../services/jokeApi";
import JokeCard from "../components/JokeCard";
import CategoryFilter from "../components/CategoryFilter";

function HomePage() {

    // Sparar skämtet
    const [joke, setJoke] = useState(null)

    // Sparar vald kategori
    const [category, setCategory] = useState("Any");

    // Körs en gång när HomePage laddas
    useEffect(() => {

        // Hämtar skämt och uppdaterar sidan med det.
        async function loadJoke() {
            const randomJoke = await getJoke();
            setJoke(randomJoke);
        }

        loadJoke();
    }, []);

    // Körs när en kategori väljs i dropdown
    async function handleCategoryChange(selectedCategory) {
        setCategory(selectedCategory);

        // Här hämtas och uppdateras nytt skämt från valda kategorin
        const newJoke = await getJoke(selectedCategory);
        setJoke(newJoke);
    }

    return (
        <section>
            <h1>Home</h1>

            {/* Skickar funktionen till dropdown-komponenten*/}
            <CategoryFilter onCategoryChange={handleCategoryChange} />

            {/* Visar JokeCard först när ett skämt har hämtats */}
            {joke && <JokeCard joke={joke} />}
        </section>
    );
}

export default HomePage;