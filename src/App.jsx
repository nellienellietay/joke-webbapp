import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavouritesPage from "./pages/FavouritesPage";
import HistoryPage from "./pages/FavouritesPage";
import MyJokesPage from "./pages/MyJokesPage";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>Jokes</h1>
      </header>

      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/my-jokes" element={<MyJokesPage />}/>
          <Route path="/favourites" element={<FavouritesPage />}/>
          <Route path="/history" element={<HistoryPage />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;