import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>Jokester</h1>
      </header>

      <Navbar />

      <main className="main-content">
        <HomePage />
      </main>
    </div>
  );
}

export default App;