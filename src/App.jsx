import HomePage from "./components/HomePage";
function App() {
  return (
    <div className="h-screen flex flex-col">
      <header>
        <h1>DaveCode</h1>
      </header>
      <main className="flex-1">
        <HomePage />
      </main>
      <footer>
        <p>Copyright © 2024 - All right reserved</p>
      </footer>
    </div>
  );
}
export default App;
