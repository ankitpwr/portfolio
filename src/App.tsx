import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import MarginContainer from "./components/layout/margin-container";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MarginContainer />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
