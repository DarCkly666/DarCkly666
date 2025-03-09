import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Techs } from "./pages/Techs";

function App() {
  return (
    <div className="min-h-screen bg-background dark:bg-background-dark text-text dark:text-text-dark">
      <Navbar />
      <div className="px-4 md:px-10 lg:px-20 xl:px-40">
        <Home />
        <Techs />
      </div>
    </div>
  );
}

export default App;
