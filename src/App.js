import "./App.css";
import Bill from "./components/bill/Bill";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/friendsList/Main";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Bill />} />
          <Route path="/friendsList" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
