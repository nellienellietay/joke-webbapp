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
        <section className="container my-jokes-page" style={{width: "100%", display: "block"}}>
            <h2 className="text-center mb-3">My own jokes</h2>

            <div className="d-flex flex-column align-items-center gap-2 mb-4" style={{maxWidth: "600px", margin: "0 auto"}}>
                <CategoryFilter onCategoryChange={setCategory} />
                <textarea
                    className="form-control"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Write your joke here"
                    rows={3}
                />
                <button className="btn btn-warning w-100 fw-bold" onClick={handleAdd}>Add joke</button>
            </div>

            {/*visas om inga egna skämt finns sparade*/}
            {myJokes.length === 0 ? (
                <p className="status-text">No jokes added yet</p>
            ) : (
                <div className="d-flex flex-column align-items-center gap-3">
                    {/*loopar igenom alla egna skämt och visar dem*/}
                    {myJokes.map(joke => (
                        <div key={joke.id} className="joke-card w-100" style={{maxWidth: "600px"}}>
                            <p>{joke.joke}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <span>Category: {joke.category}</span>
                                <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => handleRemove(joke.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default MyJokesPage;