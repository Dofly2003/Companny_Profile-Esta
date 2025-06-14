import { useState, useEffect } from 'react';
import './home.css'
import InstallPWAButton from './installButton';
import dProfile from '../assets/profile/d.jpg';
import hProfile from '../assets/profile/h.jpg';
import rProfile from '../assets/profile/r.jpg';

function App() {
  const [highlight, setHighlight] = useState(-1);

  useEffect(() => {
    // Untuk animasi masuk konten
    document.body.classList.add("bluewave-bg");
    return () => document.body.classList.remove("bluewave-bg");
  }, []);

  return (
    <div className="company-home">
      <header className="header-content">
        <div className="header-logo animated-logo">ESTA</div>
        <p className="header-tagline">Empowering Your Business with <span className="gradient-text">Innovative Technology</span></p>
      </header>

      <main>
        <section className="section aboutus-section animated-in">
          <div className="section-title">About Us</div>
          <p>
            <span className="blue-highlight">BlueWave Solutions</span> is a technology company dedicated to helping businesses succeed in the digital era.
            With a team of passionate professionals, we deliver high-quality software, consulting, and IT services tailored to your needs.
          </p>
        </section>

        <section className="section services-section animated-in">
          <div className="section-title">Our Services</div>
          <ul className="services-list">
            <li>Custom Software Development</li>
            <li>Cloud Solutions &amp; DevOps</li>
            <li>UI/UX Design</li>
            <li>IT Consulting</li>
            <li>Support &amp; Maintenance</li>
          </ul>
        </section>

        <section className="section team-section animated-in">
          <div className="section-title">Our Team Members</div>
          <div className="team">
            {[
              {
                img: dProfile,
                name: "Ananda Dony Setiawan",
                role: "Chief Technology Officer"
              },
              {
                img: hProfile,
                name: "Haykal Azrel",
                role: "Chief Executive Officer"
              },
              {
                img: rProfile,
                name: "Rizal Firmansyah",
                role: "Chief Marketing Officer"
              }
            ].map((member, i) => (
              <div
                className={`team-member card-interactive ${highlight === i ? "active" : ""}`}
                key={i}
                onMouseEnter={() => setHighlight(i)}
                onMouseLeave={() => setHighlight(-1)}
                tabIndex={0}
                aria-label={`Team member: ${member.name}`}
              >
                <img src={member.img} alt={member.name} />
                <div className="team-info">
                  <div className="team-name">{member.name}</div>
                  <div className="team-role">{member.role}</div>
                </div>
                <div className="card-bg-glow"></div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <InstallPWAButton />
    </div>
  );
}

export default App;