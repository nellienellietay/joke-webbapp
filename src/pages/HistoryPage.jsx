import { useState, useEffect } from "react";
import { getHistory, addFavourite } from "../utils/storage";

function HistoryPage() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        setHistory(getHistory());

        // Uppdatera om localStorage ändras från annan flik
        const handleStorage = () => setHistory(getHistory());
        window.addEventListener("storage", handleStorage);
        return () => window.removeEventListener("storage", handleStorage);
    }, []);

    return (
        <div className="history-page">
            <h2> Tidigare sedda skämt (senaste 20)</h2>
            {history.length === 0 && <p>Ingen historik än. Klicka på högerpil på startsidan!</p>}
            <div className="history-grid">
                {history.map(joke => (
                    <div key={joke.id} className="history-card">
                        <p className="history-joke-text">{joke.joke}</p>
                        <button onClick={() => addFavourite(joke)}> Spara som favorit</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HistoryPage;