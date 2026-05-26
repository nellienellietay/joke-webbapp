import { useEffect, useState } from "react";
import { getJoke } from "../services/jokeApi";
import JokeCard from "../components/JokeCard";

function HomePage() {
    // Sparar skämtet vi får från API:et
    const [joke, setJoke] = useState(null)

    // Körs en gång när HomePage laddas
    useEffect(() => {
        // Hämtar ett skämt från API:et
        async function loadJoke() {
            const randomJoke = await getJoke();

            // Uppdaterar sidan med hämtat skämt
            setJoke(randomJoke);
        }

        loadJoke();
    }, []);

    return (
        <section>
            <h1>Home</h1>

            {/* Visar JokeCard först när ett skämt har hämtats */}
            {joke && <JokeCard joke={joke} />}
        </section>
    );
}

export default HomePage;