const FAVOURITES_KEY = "jokester_favourites";
const MY_JOKES_KEY = "jokester_my_jokes";

//favoriter

//hämtar sparade favoriter från localstorage och returnerar en tom array om det inte finns några
export function getFavourites() {
    const stored = localStorage.getItem(FAVOURITES_KEY);
    return stored ? JSON.parse(stored) : [];
}

//lägger till ett skämt i favoriter, gör inget om skämtet redan är sparat genom att kolla id
export function addFavourite(joke) {
    const favourites = getFavourites();
    const alreadySaved = favourites.some(f => f.id === joke.id);
    if (alreadySaved) return;
    localStorage.setItem(FAVOURITES_KEY, JSON.stringify([...favourites, joke]));
}

//tar bort ett skämt från favoriter baserat på id
export function removeFavourite(jokeId) {
    const updated = getFavourites().filter(f => f.id !== jokeId);
    localStorage.setItem(FAVOURITES_KEY, JSON.stringify(updated));
}

//kolla om ett skämt redan är sparat som favorit, returnera true/false
export function isFavourite(jokeId) {
    return getFavourites().some(f => f.id === jokeId);
}

//egna skämt

//hämta alla egna skämt från localstorage, returnerar en tom array om inga skämt finns
export function getMyJokes() {
    const stored = localStorage.getItem(MY_JOKES_KEY);
    return stored ? JSON.parse(stored) : [];
}

//skapar ett nytt skämt med unikt id och sparar det, returnerar det nya skämtet
export function addMyJoke(jokeText) {
    const myJokes = getMyJokes();
    const newJoke = {
        id: Date.now(),
        joke: jokeText,
        category: "My joke",
    };
    localStorage.setItem(MY_JOKES_KEY, JSON.stringify([...myJokes, newJoke]));
    return newJoke;
}

//tar bort ett eget skämt baserat på id
export function removeMyJoke(jokeId) {
    const updated = getMyJokes().filter(j => j.id !== jokeId);
    localStorage.setItem(MY_JOKES_KEY, JSON.stringify(updated));
}