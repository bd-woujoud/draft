
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Profil from "./pages/Profil";
import Chat from "./pages/Chat";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profil />} />
          <Route path="/messaging" element={<Chat />} />


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
