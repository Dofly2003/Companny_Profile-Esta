import { useEffect } from "react";

export default function InstallPWAPopup() {
  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      // Langsung tampilkan prompt install
      e.prompt();
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  return null; // Tidak render apa-apa
}