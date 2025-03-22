import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black/[0.9] relative overflow-hidden text-white">
      {/* Rough Noise Effect */}

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none mix-blend-overlay "
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.4"
            numOctaves="5"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>

      {/* Page Content */}
      <div className="z-10 relative">
        <Navbar />
        <Hero />
        <div className="h-40 w-full">

      </div>
      </div>
    </div>
  );
};

export default App;
