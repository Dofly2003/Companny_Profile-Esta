import { useState, useEffect } from 'react';
import '../App.css'
import InstallPWAButton from './installButton';
import dProfile from '../assets/profile/d.jpg';
import hProfile from '../assets/profile/h.jpg';
import rProfile from '../assets/profile/r.jpg';
function App() {
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const isStandaloneMode = window.matchMedia('(display-mode: standalone)').matches;
      console.log('Standalone mode:', isStandaloneMode);
      setIsStandalone(isStandaloneMode);
    }
  }, []);

  return (
    <>
      <header className="header">
        <div className="logo">ESTA</div>
        <p>Empowering Your Business with Innovative Technology</p>
      </header>

      <main>
        <section className="section">
          <div className="section-title">About Us</div>
          <p>
            BlueWave Solutions is a technology company dedicated to helping businesses succeed in the digital era.
            With a team of passionate professionals, we deliver high-quality software, consulting, and IT services
            tailored to your needs.
          </p>
        </section>

        <section className="section">
          <div className="section-title">Our Services</div>
          <ul>
            <li>Custom Software Development</li>
            <li>Cloud Solutions &amp; DevOps</li>
            <li>UI/UX Design</li>
            <li>IT Consulting</li>
            <li>Support &amp; Maintenance</li>
          </ul>
        </section>

        <section className="section">
          <div className="section-title">Our Team Members</div>
          <div className="team">
            <div className="team-member">
              <img src={dProfile} style={{ width: 100, height: 100, borderRadius: '50%' }} alt="CEO"  />
              <div><strong>Ananda Dony Setiawan</strong></div>
              <div>Chief Technology Officer</div>
            </div>
            <div className="team-member">
              <img src={hProfile} style={{ width: 100, height: 100, borderRadius: '50%' }} alt="CTO"  />
              <div><strong>Haykal Azrel</strong></div>
              <div>Chief Executive Officer</div>
            </div>
            <div className="team-member">
              <img src={rProfile} style={{ width: 100, height: 100, borderRadius: '50%' }} alt="Lead  UI/UX" />
              <div><strong>Rizal Firmansyah</strong></div>
              <div>Chief Marketing Officer</div>
            </div>
          </div>
        </section>
      </main>
    <InstallPWAButton />
    </>

  );
}



export default App;