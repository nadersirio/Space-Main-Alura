import "./styles/globalStyles.css";
import "./App.css";
import { HomePage } from "./pages/homePage";
import MenuPage from "./pages/menuPage";

export const App = () => {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}
