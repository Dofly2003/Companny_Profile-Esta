import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Showcase from "./components/showcase";
import InstallPWAButton from "./components/installButton";

function App() {
  return (
    <BrowserRouter basename="/reactJs">
      <header className="header">
        <h1>ESTA</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/showcase">Showcase Tim</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showcase" element={<Showcase />} />
      </Routes>
      <InstallPWAButton />
      <footer className="footer">
        &copy; {new Date().getFullYear()} ESTA. All rights reserved.
      </footer>
    </BrowserRouter>
  );
}

export default App;