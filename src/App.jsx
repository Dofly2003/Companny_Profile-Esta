import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Showcase from "./components/showcase";
import InstallPWAButton from "./components/installButton";
import StickyNavbar from "./components/nav"; // Import the sticky navbar

function App() {
  return (
    <BrowserRouter basename="/reactJs">
      <StickyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Showcase />} />
      </Routes>
      <InstallPWAButton />
      <footer className="footer">
        &copy; {new Date().getFullYear()} ESTA. All rights reserved.
      </footer>
    </BrowserRouter>
  );
}

export default App;