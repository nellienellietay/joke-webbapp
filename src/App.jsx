import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>Jokester</h1>
      </header>

      {/* Navbar komponent saknas just nu 
      <Navbar />*/}

      <main>
        <HomePage />
      </main>
    </div>
  );
}

export default App;