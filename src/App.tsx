import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Home from "./pages/Home";


const SearchPage = () => <h1>Search Page</h1>

function App() {
  return (
    <>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search-page" element={<SearchPage />} />
            <Route path="*" element={<Home />} />
        </Routes>
    </>
  );
}

export default App;
