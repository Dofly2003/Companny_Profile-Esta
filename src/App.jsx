import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InstallPWAButton from './components/installButton';
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
      <div style={{
        maxWidth: 400,
        margin: "100px auto",
        padding: 24,
        borderRadius: 12,
        boxShadow: "0 2px 16px rgba(0,0,0,0.12)",
        textAlign: "center"
      }}>
        <h1>React Vite PWA</h1>
        <p>Aplikasi simple dengan Vite + React</p>
        <p>di tambahkan PWA</p>
        <div>
          <b>Status PWA:</b>{" "}
          {isStandalone ? "Sudah diinstall (Standalone)" : "Belum diinstall"}
        </div>
        <InstallPWAButton />
      </div>
      
  );
}



export default App;