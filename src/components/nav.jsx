import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import "./nav.css";

export default function StickyNavbar() {
  const location = useLocation();
  const { scrollY } = useScroll();
  const [isSticky, setSticky] = useState(false);

  // Optional: Smooth shadow when scrolled
  const ySpring = useSpring(scrollY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    return ySpring.onChange((y) => setSticky(y > 2));
  }, [ySpring]);

  return (
    <motion.header
      className={`sta-navbar${isSticky ? " sticky" : ""}`}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 22 }}
    >
      
      <nav className="sta-navbar__nav">
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === "/about" ? "active" : ""}>
            <Link to="/about">About</Link>
          </li>
          <li className={location.pathname === "/work" ? "active" : ""}>
            <Link to="/work">Work</Link>
          </li>
          <li className={location.pathname === "/expertise" ? "active" : ""}>
            <Link to="/expertise">Expertise</Link>
          </li>
          <li className={location.pathname === "/contact" ? "active" : ""}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="sta-navbar__icon">
        {/* Ganti dengan icon SVG/emoji sesuai kebutuhan */}
        <span style={{ fontSize: 32, color: "#93eb97" }}></span>
      </div>
    </motion.header>
  );
}