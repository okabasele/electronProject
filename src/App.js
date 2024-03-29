import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout.js";
import { AudioContextProvider } from "./context/AudioContext.js";
import Home from "./pages/Home.js";
import Search from "./pages/Search.js";
import UploadMusic from "./pages/UploadMusic.js";
import Liked from "./pages/Liked.js";

function App() {
  return (
    <AudioContextProvider>

    <MainLayout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/upload" element={<UploadMusic />} />
        <Route path="/liked" element={<Liked />} />
      </Routes>

    </MainLayout>
    </AudioContextProvider>
  );
}

export default App;
