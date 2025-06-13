import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import memberImg from "../assets/profile/us.png"; // Pastikan PNG transparan

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const textRef = useRef(null); // Fix: gunakan null, bukan "a"

  useEffect(() => {
    gsap.to(textRef.current, {
      y: -100,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true
      }
    });
  }, []);

  return (
    <div style={{ position: "relative", height: "100vh", background: "#afe0de" }}>
      <h1
        ref={textRef}
        style={{
          fontSize: "8vw",
          fontWeight: "bold",
          color: "white",
          position: "absolute",
          top: "20%",
          left: "5%",
          zIndex: 1, // Pastikan lebih rendah dari gambar, tapi tetap terlihat
          lineHeight: "0.9",
          margin: 0
        }}
      >
        Human<br />Experiences.
      </h1>
      <img
        src={memberImg}
        alt="Anggota"
        style={{
          width: "70%",
          position: "absolute",
          bottom: 0,
          left: 0,
          zIndex: 2,
          pointerEvents: "none"
        }}
      />
    </div>
  );
}