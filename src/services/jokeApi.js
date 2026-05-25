// Hämtar ett random skämt från JokeAPI
export async function getRandomJoke() {
    const response = await fetch("https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun?type=single&safe-mode");

    const data = await response.json();

    return data;
}