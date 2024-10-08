import { Route, Routes } from "react-router-dom";
import "./App.css";
import FetchData from "./components/FetchData";
import UserDetail from "./components/UserDetail";
import AlphanumericInput from "./components/AlphanumericInput";
import TextInput from "./components/TextInput";

function App() {
  return (
    <>
      <div className="cord_contaier">
        <Routes>
          <Route path="/" element={<FetchData />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>

        <div className="Regex">
          <h2>Regex</h2>
          <AlphanumericInput />
          <TextInput />
        </div>
      </div>
    </>
  );
}

export default App;
