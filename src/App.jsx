import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import InstallPWAButton from './components/installButton';

// Data anggota tim
const team = [
  {
    name: "Ananda Dony Setiawan",
    title: "Chief Technology Officer",
    imgSrc: "/reactJs/assets/profile/d.jpg",
  },
  {
    name: "Haykal Azrel",
    title: "Chief Executive Officer",
    imgSrc: "/reactJs/assets/profile/h.jpg",
  },
  {
    name: "Rizal Firmansyah",
    title: "Chief Marketing Officer",
    imgSrc: "/reactJs/assets/profile/r.jpg",
  },
];

// Hook parallax
function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

// Komponen anggota tim dengan parallax
function TeamMember({ name, title, imgSrc }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 100);

  return (
    <section className="img-container">
      <div ref={ref} className="img-wrapper">
        <img src={imgSrc} alt={name} />
      </div>
      <motion.h2
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
      >
        {name}
      </motion.h2>
      <motion.div
        className="title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.div>
    </section>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <header className="header">
        <h1>ESTA</h1>
        <p>Empowering Your Business with Innovative Technology</p>
      </header>
      <main>
        <section className="section">
          <div className="section-title">Our Team</div>
        </section>
        <div id="team-showcase">
          {team.map((member, i) => (
            <TeamMember key={i} {...member} />
          ))}
          <motion.div className="progress" style={{ scaleX }} />
        </div>
      </main>
      <InstallPWAButton />
      <footer className="footer">
        &copy; {new Date().getFullYear()} ESTA. All rights reserved.
      </footer>
      <TeamShowcaseStyles />
    </>
  );
}

// CSS-in-JS agar gambar bulat, tengah, dan responsif
function TeamShowcaseStyles() {
  return (
    <style>{`
      html, body, #root {
        height: 100%;
      }
      #team-showcase {
        font-family: "Azeret Mono", monospace;
      }
      .img-container {
        height: 100vh;
        scroll-snap-align: start;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        background: #fff;
      }
      .img-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 200px;
        margin: 20px 0 16px;
        background: #f5f5f5;
        overflow: hidden;
        border-radius: 50%;
        box-shadow: 0 0 24px #d2d2d2;
      }
      .img-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        display: block;
      }
      .img-container h2 {
        color: #1976d2;
        margin: 0 0 10px 0;
        font-size: 28px;
        font-weight: 700;
        letter-spacing: -1px;
        line-height: 1.2;
        text-align: center;
        position: relative;
        z-index: 2;
      }
      .img-container .title {
        color: #333;
        font-size: 18px;
        font-weight: 400;
        text-align: center;
        margin-bottom: 10px;
      }
      .progress {
        position: fixed;
        left: 0;
        right: 0;
        height: 5px;
        background: #1976d2;
        bottom: 30px;
        transform: scaleX(0);
        z-index: 999;
      }
      @media (max-width: 600px) {
        .img-wrapper {
          width: 120px;
          height: 120px;
        }
        .img-container h2 {
          font-size: 18px;
        }
        .img-container .title {
          font-size: 13px;
        }
      }
    `}</style>
  );
}

export default App;