
# Jokester

A web application where you can discover, save and manage jokes. Built with React and the JokeAPI.

## About the Project

Jokester lets you browse random jokes from different categories, save your favourites, and even add your own jokes. The app stores your data locally in the browser so your favourites and jokes are always there when you come back.

### Features

- Browse random jokes from categories like Programming, Pun and Misc
- Navigate between previous and next jokes
- Save jokes as favourites with one click
- Filter your saved favourites by category
- Add and manage your own jokes
- View joke history
- Works on both desktop and mobile

### Data Storage

The app uses localStorage to store data between sessions. This means no account or server is needed — everything is saved directly in your browser.

The following data is stored:

- **Favourites** — jokes saved by the user, stored with their id, text and category
- **My jokes** — user-created jokes with a unique id (based on Date.now()), text and category
- **History** — the last jokes viewed, stored automatically as you browse

Data is read when the page loads and updated instantly when the user saves or removes a joke.

## API

The app uses [JokeAPI](https://jokeapi.dev/) to fetch jokes.

- Random jokes are fetched on page load
- Category-specific jokes are fetched when the user selects a category

## Tech stack

- React
- Vite
- JavaScript
- CSS
- JokeAPI
- Bootstrap

## Why React?

We chose React over Vue and Angular for the following reasons:

### React vs Vue

React and Vue are both component-based libraries with similar performance. Vue has a gentler learning curve and uses single-file components with a clear separation of HTML, CSS and JavaScript. React uses JSX which mixes HTML and JavaScript, which feels more natural once you get used to it. React also has a larger ecosystem and community, making it easier to find resources, libraries and solutions to problems.

**References:**

- React documentation: https://react.dev  
- Vue documentation: https://vuejs.org/guide/introduction  
- npm trends: https://npmtrends.com/react-vs-vue

### React vs Angular

Angular is a full framework with built-in solutions for routing, forms, HTTP and more. This makes it powerful but also complex. React is a library focused on the view layer, giving developers more freedom to choose their own tools. For a project of this size, React's simplicity and flexibility made more sense than Angular's heavier structure.

**References:**  

- Angular documentation: https://angular.dev/  
- React documentation: https://react.dev/  
- npm trends: https://npmtrends.com/angular-vs-react

## Getting Started

```bash
npm install
npm run dev
```

The app runs on `http://localhost:5173` by default.

## Built With

- React: https://react.dev
- Vite: https://vitejs.dev
- JokeAPI: https://jokeapi.dev
- react-router-dom: https://reactrouter.com
- Bootstrap: https://getbootstrap.com
