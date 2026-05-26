// Hämtar ett random skämt från JokeAPI
// Om ingen kategori skickas in (av användaren) används "Any"
export async function getJoke(category = "Any") {
    const response = await fetch(`https://v2.jokeapi.dev/joke/${category}?type=single&safe-mode`);

    const data = await response.json();

    return data;
}