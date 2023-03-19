import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout.js";
import Home from "./pages/Home.js";
import Search from "./pages/Search.js";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
