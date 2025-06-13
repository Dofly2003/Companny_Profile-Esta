import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Work from "./components/work";
import Showcase from "./components/showcase";
import InstallPWAButton from "./components/installButton";
import StickyNavbar from "./components/nav"; // Import the sticky navbar
import './index.css';
function App() {
  return (
    <BrowserRouter  basename="/Companny_Profile-Esta">
      <StickyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Showcase />} />
        <Route path="/work" element={<Work />} />
      </Routes>
      <InstallPWAButton />
      <footer className="footer">
        &copy; {new Date().getFullYear()} ESTA. All rights reserved.
      </footer>
    </BrowserRouter>
  );
}

export default App;