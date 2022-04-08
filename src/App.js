import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchResult from "./pages/SearchResult";
import ShowDetail from "./pages/ShowDetail";
import { useParams } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-result/:data" element={<SearchResult />} />
        <Route path="/show-detail/:id" element={<ShowDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
