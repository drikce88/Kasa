import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.scss"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
