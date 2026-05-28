import { useState } from "react";
import {getMyJokes, addMyJoke, removeMyJoke} from "../utils/storage";
import CategoryFilter from "../components/CategoryFilter";


function MyJokesPage() {
    //hämtar enga skämt från localStorage när sidan laddas
    const [myJokes, setMyJokes] = useState(() => getMyJokes());
    //håller koll på va användaren skrier i  textfältet
    const [inputText, setInputText] = useState("");
    //håller koll på vald kategori, tom från början så användaren måste välja
    const [category, setCategory] = useState("");

   //lägger till ett nytt skämt om textfältet inte är tomt och en kategori är vald
    function handleAdd() {
        const trimmed = inputText.trim();
        if (!trimmed || !category) return;
        addMyJoke(trimmed, category);
        setMyJokes(getMyJokes());
        setInputText("");
    }

    //tar bort ett skämt och uppdaterar listan
    function handleRemove(jokeId) {
        removeMyJoke(jokeId);
        setMyJokes(getMyJokes());
    }

    return (
        <section className="my-jokes-page">
            <h2>My own jokes</h2>

            <div className="add-joke-form">
                <CategoryFilter onCategoryChange={setCategory} />
                <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Write your joke here"
                    rows={3}
                />
                <button onClick={handleAdd}>Add joke</button>
            </div>

            {/*visas om inga egna skämt finns sparade*/}
            {myJokes.length === 0 ? (
                <p>No jokes added yet</p>
            ) : (
                <ul className="my-jokes-list">
                    {/*loopar igenom alla egna skämt och visar dem*/}
                    {myJokes.map(joke => (
                        <li key={joke.id} className="my-joke-item">
                            <p>{joke.joke}</p>
                            <p>Category: {joke.category}</p>
                            <button onClick={() => handleRemove(joke.id)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

export default MyJokesPage;