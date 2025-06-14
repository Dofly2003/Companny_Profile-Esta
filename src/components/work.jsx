import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import memberImg from "../assets/profile/us.png"; // Pastikan PNG transparan
import funny from "../assets/profile/funny.jpeg"; // Gambar lucu atau menarik
import dummyNext from "../assets/profile/funny.jpeg"; // Tambahkan gambar dummy next content
import './work.css'

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const Group = useRef(null);

  useEffect(() => {
    // Animasi popup saat masuk (dari bawah ke posisi aslinya)
    gsap.fromTo(
      textRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      imgRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      Group.current,
      { y: 0, opacity: 0 },
      { y: 100, opacity: 1, duration: 1, ease: "power3.out" }
    );
    
    // Animasi parallax saat scroll
    gsap.to(textRef.current, {
      y: -100,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true
      }
    });
    gsap.to(imgRef.current, {
      y: -100,
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true
      }
    });
  }, []);

  return (
    <>
      <div className="hero-section" style={{ position: "relative", height: "100vh", background: "#afe0de", margin: 0, padding: 0 }}>
        <h1
          ref={textRef}
          style={{
            fontSize: "8vw",
            fontWeight: "bold",
            color: "white",
            position: "absolute",
            top: "20%",
            left: "40%",
            zIndex: 1,
            lineHeight: "0.9",
            margin: 0
          }}
        >
          ESTA<br />Experiences.
        </h1>
        <div
          style={{
            position: "absolute",
            top: 24,
            left: 24,
            borderRadius: 12,
            padding: "8px 24px",
            textShadow: "0 6px 40px #000",
            zIndex: 10,
            fontWeight: "bold",
            fontSize: 24,
            letterSpacing: 2
          }}
        >
          ESTA
        </div>
        <img
          src={funny}
          ref={imgRef}
          alt="Funny"
          style={{
            position: "absolute",
            top: "25%",
            left: "10%",
            zIndex: 1,
            lineHeight: "0.9",
            margin: 0,
            width: "15%",
            height: "auto",
            transform: "rotateX(-20deg) rotateY(-20deg)"
          }}
        />
        <img
          ref={Group}
          src={memberImg}
          alt="Anggota"
          style={{
            width: "60%",
            position: "absolute",
            bottom: 0,
            left: 0,
            zIndex: 2,
            pointerEvents: "none"
          }}
        />
      </div>
      <div style={{
        width: "100%",
      }} className="absolute-card">
        <div className="absolute-card-content">
          <h3>ESTA Team</h3>
          <p>Innovative, creative, and collaborative.</p>
        </div>
      </div>

      {/* Tambahan konten untuk next content
      <div className="next-content-section">
        <img
          src={dummyNext}
          alt="Next content"
          className="dummy-next-img"
        />
        <div className="next-content-desc">
          Next content goes here!
        </div>
      </div> */}
    </>
  );
}