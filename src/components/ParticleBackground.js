import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // You can optionally load additional shapes or presets here
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container); // Optional: can log to see the container
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#fed620", // Set the background color
          },
        },
        fpsLimit: 120,
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#1e3a8a",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: { min: 1, max: 5 },
            random: true,
          },
          links: {
            enable: true,
            distance: 150,
            color: "#1e3a8a",
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "bounce",
            },
          },
        },
        detectRetina: true,
      }}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 1,
      }}
    />
  );
};

export default ParticleBackground;
