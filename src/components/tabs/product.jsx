"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

// Kustom hook untuk efek parallax
function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

// Komponen anggota tim dengan parallax
function TeamMember({ name, title, imgSrc, id, distance = 150 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, distance);

  return (
    <section className="img-container">
      <div ref={ref}>
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

export default function TeamShowcase() {
  // Data anggota tim
  const team = [
    {
      name: "Ananda Dony Setiawan",
      title: "Chief Technology Officer",
      imgSrc: "/assets/profile/d.jpg",
    },
    {
      name: "Haykal Azrel",
      title: "Chief Executive Officer",
      imgSrc: "/assets/profile/h.jpg",
    },
    {
      name: "Rizal Firmansyah",
      title: "Chief Marketing Officer",
      imgSrc: "/assets/profile/r.jpg",
    },
  ];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div id="team-showcase">
      {team.map((member, i) => (
        <TeamMember key={i} {...member} id={i + 1} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
      <TeamShowcaseStyles />
    </div>
  );
}

/**
 * Styles (CSS-in-JS)
 */
function TeamShowcaseStyles() {
  return (
    <style>{`
      html {
        scroll-snap-type: y mandatory;
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
      }

      .img-container > div {
        width: 200px;
        height: 200px;
        margin: 20px;
        background: #f5f5f5;
        overflow: hidden;
        border-radius: 50%;
        box-shadow: 0 0 24px #d2d2d2;
      }

      .img-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }

      .img-container h2 {
        color: #1976d2;
        margin: 20px 0 10px;
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
        .img-container > div {
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